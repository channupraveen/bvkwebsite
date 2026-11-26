import Image from "next/image";
import { Icon } from "@/components/Icon";
import { Clocks, Disclaimer, EnquiryForm } from "@/components/Interactive";
import { ScrollEffects } from "@/components/ScrollEffects";
import { MainNav } from "@/components/MainNav";
import { MomentsSlider } from "@/components/MomentsSlider";
import { site, waLink, socials, judgments, courts, nriServices, consultSlots, steps, faqs, moments } from "@/lib/site";

const litigation = [
  "Civil & Property Suits", "Criminal Law & Bail", "Family & Divorce", "Cheque Dishonour (s. 138)",
  "Consumer Disputes", "Writ Petitions", "Injunctions", "Recovery Suits",
];
const advisory = [
  "Legal Notices & Replies", "Sale Deeds & Agreements", "Title Verification", "Wills & Probate",
  "Lease & Rental Agreements", "Affidavits",
];

function JsonLd() {
  const data = [
    {
      "@context": "https://schema.org",
      "@type": ["LegalService", "LocalBusiness"],
      "@id": `${site.url}/#chambers`,
      name: site.name,
      description:
        "Advocates in Hyderabad and Medchal for civil, criminal, family and property matters before the courts across Telangana and the High Court of Telangana, with video consultations for NRIs in the USA and UK.",
      url: site.url,
      telephone: site.phoneE164,
      email: site.email,
      image: `${site.url}/vinay-kumar-high-court.jpg`,
      logo: `${site.url}/bvk-logo.png`,
      priceRange: "₹₹",
      hasMap: site.mapsUrl,
      sameAs: socials.map((x) => x.url),
      address: {
        "@type": "PostalAddress",
        streetAddress: "#2-127, HB Colony",
        addressLocality: "Medchal",
        addressRegion: "Telangana",
        postalCode: "501401",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Hyderabad" },
        { "@type": "City", name: "Medchal" },
        { "@type": "State", name: "Telangana" },
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "United Kingdom" },
      ],
      knowsLanguage: ["en", "te", "hi"],
      knowsAbout: [
        "Civil litigation", "Criminal law and bail", "Family law and divorce", "Property disputes",
        "Cheque dishonour under Section 138 NI Act", "Consumer disputes", "Power of attorney for NRIs",
        "Succession and inheritance", "Legal notices and documentation",
      ],
      founder: { "@id": `${site.url}/#advocate` },
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${site.url}/#advocate`,
      name: `Advocate ${site.advocate}`,
      jobTitle: "Advocate",
      worksFor: { "@id": `${site.url}/#chambers` },
      image: `${site.url}/vinay-kumar-high-court.jpg`,
      memberOf: { "@type": "Organization", name: "Bar Council of Telangana" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
    },
  ];
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
  );
}

function Tbc({ children }: { children: React.ReactNode }) {
  return <span className="tbc">{children}</span>;
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Disclaimer />
      <ScrollEffects />

      <div className="topbar">
        <div className="wrap">
          <a href="#nri">NRI Desk (USA &amp; UK)</a>
          <a href={waLink()}>WhatsApp {site.phoneDisplay}</a>
        </div>
      </div>

      <header className="site">
        <div className="wrap">
          <a className="logo" href="#top" aria-label={`${site.name}, home`}>
            <Image className="emblem" src="/bvk-logo.png" alt="" width={70} height={64} priority style={{ height: 64, width: "auto" }} />
          </a>
          <MainNav />
          <a className="btn" href="#contact"><Icon name="calendar" strokeWidth={2} /><span>Get In Touch</span></a>
        </div>
      </header>

      <main id="top">
        <section className="hero dark contour">
          <div className="wrap">
            <div data-reveal="up">
              <p className="eyebrow">Advocate in Hyderabad &amp; Medchal · High Court of Telangana</p>
              <h1>BVK Law <em>Chambers</em></h1>
              <p className="lede">
                The BVK Law chambers of Advocate {site.advocate}, based in Hyderabad, handles civil, criminal, family, and
                property matters before the courts across Telangana and the High Court of Telangana. We also offer video
                consultations for clients in the USA and UK.
              </p>
              <div className="actions">
                <a className="btn" href={waLink()}><Icon name="whatsapp" />WhatsApp {site.phoneDisplay}</a>
                <a className="btn ghost" href="#chambers">I live in Telangana</a>
              </div>
            </div>
            <div className="hero-photo" data-reveal="zoom" data-delay="150">
              <div className="disc">
                <Image src="/vinay-kumar-high-court.jpg" alt={`Advocate ${site.advocate} in court dress outside the High Court for the State of Telangana`} width={900} height={1200} sizes="(max-width: 620px) 300px, (max-width: 980px) 360px, 420px" priority />
              </div>
              <div className="tag" data-reveal="right" data-delay="450"><b>Adv. {site.advocate}</b><span>Founder, {site.name}</span></div>
            </div>
          </div>
        </section>

        <section className="intro" id="expertise">
          <div className="wrap">
            <p data-reveal="up">
              At {site.name}, we take up matters at every stage, from the first legal notice through trial, appeal and
              execution. We appear before the High Courts, Civil Courts, Criminal Courts, Family Courts, Consumer
              Commissions, tribunals and work with families abroad through a power of attorney, video calls and scanned
              documents.
            </p>
          </div>
        </section>

        <section className="band beige contour">
          <div className="wrap">
            <div className="panel photo" data-reveal="left">
              <Image src="/office/chambers-hall.jpg" alt={`Reception and meeting area of ${site.name}, Hyderabad`} width={900} height={1200} sizes="(max-width: 980px) 100vw, 520px" />
              <div className="panel-note"><span>Appears before</span>{courts.join(" · ")}</div>
            </div>
            <div data-reveal="right" data-delay="120">
              <h2>Litigation</h2>
              <div className="rule" />
              <p>
                We represent clients in civil, criminal and family proceedings across the courts of Telangana, from
                filing and interim relief to final hearing: property and partition suits, bail and criminal defence,
                divorce and maintenance, and cheque bounce cases. Every matter starts with a reading of the documents
                and a plain explanation of the remedies, the likely stages and the time each takes.
              </p>
              <ul className="pills">{litigation.map((t, i) => <li key={t} data-reveal="up" data-delay={200 + i * 60}>{t}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="band flip contour" id="advisory">
          <div className="wrap">
            <div className="panel photo" data-reveal="right">
              <Image src="/office/chambers-desk.jpg" alt={`The advocate’s desk and law library at ${site.name}`} width={900} height={1200} sizes="(max-width: 980px) 100vw, 520px" />
            </div>
            <div data-reveal="left" data-delay="120">
              <h2>Advisory &amp; Documentation</h2>
              <div className="rule" />
              <p>
                Many disputes are avoided by careful paperwork. We draft and review legal notices, agreements and sale
                deeds, verify title before a property purchase, and prepare wills and affidavits.
              </p>
              <ul className="pills">{advisory.map((t, i) => <li key={t} data-reveal="up" data-delay={200 + i * 60}>{t}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="band dark contour" id="nri">
          <div className="wrap">
            <div className="panel art clocks" data-reveal="left" aria-label="Current time in Hyderabad, London and New York">
              <Clocks />
            </div>
            <div data-reveal="right" data-delay="120">
              <h2>NRI Desk: USA &amp; UK</h2>
              <div className="rule" />
              <p>
                Families living abroad often have property, inheritance or family matters still pending in Telangana.
                Most of this work can be done without travelling to India.
              </p>
              <ul className="pills">{nriServices.map((n, i) => <li key={n.title} data-reveal="up" data-delay={200 + i * 60}>{n.title}</li>)}</ul>
              <div className="slots">
                <table>
                  <thead><tr><th>Video consultation</th><th>India</th><th>UK</th><th>US East</th><th>US West</th></tr></thead>
                  <tbody>
                    {consultSlots.map((s) => (
                      <tr key={s.slot}><td>{s.slot}</td><td>{s.ist}</td><td>{s.uk}</td><td>{s.usEast}</td><td>{s.usWest}</td></tr>
                    ))}
                  </tbody>
                </table>
                <p>Winter times; UK and US move one hour later in summer. * Previous evening in the USA. Slots <Tbc>to be confirmed</Tbc>.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="process beige contour" id="process" style={{ background: "var(--beige)" }}>
          <div className="wrap">
            <div className="sec-title" data-reveal="up">
              <h2>How It Works</h2>
              <p>The same four steps whether you visit the chambers in Hyderabad or write to us from abroad.</p>
            </div>
            <ol className="steps">
              {steps.map((s, i) => <li key={s.title} data-reveal="up" data-delay={i * 120}><h3>{s.title}</h3><p>{s.text}</p></li>)}
            </ol>
          </div>
        </section>

        <section className="moments" id="moments">
          <div className="wrap">
            <div className="sec-title" data-reveal="up">
              <h2>Moments from the Chambers</h2>
              <p>From the courts and the chambers in Hyderabad.</p>
            </div>
            <MomentsSlider items={moments} />
          </div>
        </section>

        <section className="news dark contour" id="news" aria-labelledby="news-title">
          <div className="wrap">
            <div className="sec-title" data-reveal="up">
              <h2 id="news-title">In The News</h2>
              <p>Reported judgments in matters argued by the chambers.</p>
            </div>
            <div className="news-grid">
              {judgments.map((j, i) => (
                <article className="news-card" key={j.url} data-reveal="up" data-delay={i * 120}>
                  <span className="kicker">{j.court}{j.date ? ` · ${j.date}` : ""}</span>
                  <h3>{j.title}</h3>
                  {(j.caseNo || j.bench) && (
                    <p className="meta">{[j.caseNo, j.bench].filter(Boolean).join(" · ")}</p>
                  )}
                  {j.summary && <p className="summary">{j.summary}</p>}
                  <a className="read" href={j.url} target="_blank" rel="noopener noreferrer">
                    Read the judgment on {j.source}
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><path d="M7 17L17 7M9 7h8v8" /></svg>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="faq" id="faq" style={{ background: "var(--beige)" }}>
          <div className="wrap">
            <div className="sec-title" data-reveal="up">
              <h2>Common Questions</h2>
              <p>General information only. Every matter depends on its own facts and documents.</p>
            </div>
            <div className="list">
              {faqs.map((f, i) => (
                <details key={f.q} open={i === 0} data-reveal="up" data-delay={i * 80}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="visit" id="chambers" aria-labelledby="visit-title">
          <Image src="/office/chambers-wide.jpg" alt={`Inside ${site.name}, Hyderabad`} fill sizes="100vw" className="visit-bg" />
          <div className="wrap">
            <div className="visit-card" data-reveal="up">
              <span className="kicker">Medchal · Hyderabad</span>
              <h2 id="visit-title">Visit the Chambers</h2>
              <p>Meet Advocate {site.advocate} in person to go through your documents. Visits are by appointment.</p>
              <p className="visit-meta">{site.addressLines[0]}<br />{site.addressLines[1]}<br /><Tbc>{site.hours}</Tbc></p>
              <div className="visit-actions">
                <a className="btn" href={waLink("Hello, I would like to book an appointment at the chambers.")}><Icon name="calendar" strokeWidth={2} />Book an appointment</a>
                <a className="btn ghost" href={site.mapsUrl}><Icon name="pin" strokeWidth={2} />Get directions</a>
              </div>
            </div>
          </div>
        </section>

        <section className="contact dark contour" id="contact" style={{ background: "var(--charcoal)", color: "#fff" }}>
          <div className="wrap">
            <div data-reveal="left">
              <h2>Get In Touch</h2>
              <div className="rows">
                <div className="row">
                  <div className="ic"><Icon name="phone" /></div>
                  <div><h3>Phone &amp; WhatsApp</h3><p><a href={waLink()}>{site.phoneDisplay}</a></p></div>
                </div>
                <div className="row">
                  <div className="ic"><Icon name="pin" /></div>
                  <div><h3>Chambers</h3><p>{site.addressLines[0]}<br />{site.addressLines[1]}</p><p><a className="maplink" href={site.mapsUrl}>Get directions on Google Maps</a></p><p><Tbc>{site.hours}</Tbc></p></div>
                </div>
                <div className="row">
                  <div className="ic"><Icon name="mail" /></div>
                  <div><h3>Email</h3><p><a href={`mailto:${site.email}`}>{site.email}</a></p></div>
                </div>
                <div className="row">
                  <div className="ic"><Icon name="instagram" /></div>
                  <div>
                    <h3>Follow</h3>
                    <p className="social-links">
                      {socials.map((x, k) => (
                        <span key={x.name}>{k > 0 && " · "}<a href={x.url} target="_blank" rel="noopener noreferrer">{x.name}</a></span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <EnquiryForm />
          </div>
        </section>
      </main>

      <footer className="site">
        <div className="wrap">
          <a className="foot-logo" href="#top" aria-label={`${site.name}, back to top`}>
            <Image src="/bvk-logo.png" alt="" width={92} height={84} style={{ height: 84, width: "auto" }} />
            <span>BVK Law Chambers<small>Advocates · Hyderabad · USA · UK</small></span>
          </a>
          <ul className="socials" aria-label="BVK Law Chambers on social media">
            {socials.map((x) => (
              <li key={x.name}>
                <a href={x.url} target="_blank" rel="noopener noreferrer" aria-label={`${x.name}: ${x.handle}`}>
                  <Icon name={x.icon} /><span>{x.name}</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="cols">
            <div>
              <h2>About Us</h2>
              <p>
                {site.name} is the practice of Advocate {site.advocate}, enrolled with the Bar Council of Telangana,
                serving clients in Hyderabad, Telangana and abroad.
              </p>
            </div>
            <div>
              <h2>Practice Areas</h2>
              <ul>
                <li><a href="#expertise">Litigation</a></li>
                <li><a href="#advisory">Advisory &amp; Documentation</a></li>
                <li><a href="#nri">NRI Desk</a></li>
              </ul>
            </div>
            <div>
              <h2>Contact</h2>
              <ul>
                <li><a href={waLink()}>{site.phoneDisplay}</a></li>
                <li><a href={`mailto:${site.email}`}>{site.email}</a></li>
                <li>{site.addressLines[0]}<br />{site.addressLines[1]}</li>
              </ul>
            </div>
          </div>
          <div className="legal">
            <span>© 2026 {site.name}. All rights reserved.</span>
            <span>Information only, in line with Rule 36 of the Bar Council of India Rules. Not legal advice.</span>
          </div>
        </div>
      </footer>

      <a className="fab" href={waLink()} aria-label="Chat on WhatsApp"><Icon name="whatsapp" /><span>WhatsApp</span></a>
    </>
  );
}
