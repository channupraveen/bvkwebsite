"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { site, waLink } from "@/lib/site";

/** Bar Council of India disclaimer, shown once per browser session. */
const listeners = new Set<() => void>();
function readAgreed() {
  try { return sessionStorage.getItem("bvk-agree") === "1"; } catch { return false; }
}
function subscribeAgreed(cb: () => void) {
  listeners.add(cb);
  return () => { listeners.delete(cb); };
}

export function Disclaimer() {
  // Server render: hidden. Browser: shown until the visitor agrees in this session.
  const agreed = useSyncExternalStore(subscribeAgreed, readAgreed, () => true);
  const open = !agreed;
  const btn = useRef<HTMLButtonElement>(null);

  useEffect(() => { if (open) btn.current?.focus(); }, [open]);

  if (!open) return null;
  return (
    <div className="dlg" role="dialog" aria-modal="true" aria-labelledby="dlg-title">
      <div className="box">
        <h2 id="dlg-title">DISCLAIMER</h2>
        <p className="lead">
          The Bar Council of India does not permit advocates to advertise or solicit work in any form. By accessing the
          {" "}{site.name} website (our website), you acknowledge that:
        </p>
        <ul>
          <li>You are visiting our website of your own accord, to learn about us for your own information and use, and there has been no advertisement, solicitation, invitation or inducement of any kind from us or our members.</li>
          <li>No information read on or downloaded from our website creates an advocate–client relationship between {site.name} and you.</li>
          <li>Everything on this website is for general information only and is not a legal opinion or legal advice.</li>
          <li>{site.name} is not responsible for any consequence of an action taken on the basis of the material or information on this website.</li>
        </ul>
        <div className="go">
          <button
            ref={btn}
            type="button"
            className="btn"
            onClick={() => {
              try { sessionStorage.setItem("bvk-agree", "1"); } catch {}
              listeners.forEach((l) => l());
            }}
          >
            Proceed to Website
          </button>
        </div>
      </div>
    </div>
  );
}

const zones = [
  { label: "Hyderabad", tz: "Asia/Kolkata" },
  { label: "London", tz: "Europe/London" },
  { label: "New York", tz: "America/New_York" },
];

/** Live clocks. Renders "--:--" on the server so hydration matches. */
export function Clocks() {
  const [now, setNow] = useState<Date | null>(null);
  useEffect(() => {
    const tick = () => setNow(new Date());
    const first = setTimeout(tick, 0);
    const id = setInterval(tick, 30_000);
    return () => { clearTimeout(first); clearInterval(id); };
  }, []);
  return (
    <>
      {zones.map((z) => (
        <div className="clock-row" key={z.tz}>
          <span>{z.label}</span>
          <b>{now ? now.toLocaleTimeString("en-GB", { timeZone: z.tz, hour: "2-digit", minute: "2-digit" }) : "--:--"}</b>
        </div>
      ))}
    </>
  );
}

const countries = ["India (Hyderabad)", "India (elsewhere)", "USA", "UK", "Other country"];
const matters = ["Property / civil", "Criminal / bail", "Family / divorce", "Cheque bounce", "Consumer complaint", "Power of attorney", "Inheritance / succession", "Other"];

/** Enquiry form: builds a WhatsApp message. Nothing is stored on the site. */
export function EnquiryForm() {
  const [error, setError] = useState("");

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get("name") ?? "").trim();
    const msg = String(f.get("msg") ?? "").trim();
    if (!name) return setError("Please enter your name.");
    if (!msg) return setError("Please add a short summary of your matter.");
    setError("");
    const text = `Hello ${site.name},\n\nName: ${name}\nLives in: ${f.get("country")}\nMatter: ${f.get("type")}\n\n${msg}`;
    window.open(waLink(text), "_blank", "noopener");
  }

  return (
    <form className="enq" onSubmit={onSubmit} noValidate data-reveal="right" data-delay="150">
      <h3>Send an enquiry on WhatsApp</h3>
      <div>
        <label htmlFor="f-name">Your name</label>
        <input id="f-name" name="name" autoComplete="name" required />
      </div>
      <div>
        <label htmlFor="f-country">You live in</label>
        <select id="f-country" name="country">{countries.map((c) => <option key={c}>{c}</option>)}</select>
      </div>
      <div className="full">
        <label htmlFor="f-type">Type of matter</label>
        <select id="f-type" name="type">{matters.map((m) => <option key={m}>{m}</option>)}</select>
      </div>
      <div className="full">
        <label htmlFor="f-msg">Short summary</label>
        <textarea id="f-msg" name="msg" placeholder="What happened, and what do you need help with?" />
      </div>
      <p className="err" role="alert">{error}</p>
      <div className="full">
        <button className="btn" type="submit" style={{ width: "100%" }}>Open WhatsApp with this message</button>
      </div>
      <p className="hint">Nothing is stored on this website. Your message opens in WhatsApp, and you choose whether to send it.</p>
    </form>
  );
}
