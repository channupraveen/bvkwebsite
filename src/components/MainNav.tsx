"use client";

import { useEffect, useState } from "react";
import { waLink } from "@/lib/site";

const links = [
  { href: "#expertise", label: "Our Expertise" },
  { href: "#nri", label: "NRI Desk" },
  { href: "#process", label: "How It Works" },
  { href: "#faq", label: "FAQ" },
  { href: "#contact", label: "Contact" },
];

/** Desktop: inline links. Phones and tablets: a menu button that opens a full-width panel. */
export function MainNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setOpen(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <button
        type="button"
        className={`menu-btn${open ? " is-open" : ""}`}
        aria-expanded={open}
        aria-controls="main-nav"
        aria-label={open ? "Close menu" : "Open menu"}
        onClick={() => setOpen((v) => !v)}
      >
        <span /><span /><span />
      </button>
      <nav id="main-nav" className={`main${open ? " is-open" : ""}`} aria-label="Main">
        <ul>
          {links.map((l) => (
            <li key={l.href}><a href={l.href} onClick={() => setOpen(false)}>{l.label}</a></li>
          ))}
        </ul>
        <a className="btn nav-wa" href={waLink()} onClick={() => setOpen(false)}>WhatsApp the chambers</a>
      </nav>
    </>
  );
}
