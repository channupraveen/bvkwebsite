// All editable details of the chambers live here.
// Replace the values marked TODO once they are confirmed.

export const site = {
  name: "BVK Law Chambers",
  advocate: "Vinay Kumar",
  url: "https://bvklawchambers.com",
  phoneDisplay: "+91 95732 92027",
  phoneE164: "+919573292027",
  whatsapp: "919573292027",
  email: "basuradhi@bvklawchambers.com",
  address: "#2-127, HB Colony, Medchal, Medchal-Malkajgiri District, T.S-501401",
  addressLines: ["#2-127, HB Colony, Medchal,", "Medchal-Malkajgiri District, T.S-501401"],
  mapsUrl: "https://maps.app.goo.gl/k6wDmvYghBY3pUF47",
  hours: "Mon–Sat, 10 AM – 6 PM IST", // TODO: confirm
  enrolmentNo: "TS/____/____", // TODO: Bar Council of Telangana enrolment number
  enrolledSince: "Year", // TODO
  languages: "English, Telugu, Hindi",
};

export const waLink = (text?: string) =>
  `https://wa.me/${site.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const courts = [
  "High Courts",
  "Civil Courts",
  "Criminal Courts",
  "Family Courts",
  "Consumer Commissions",
  "Tribunals",
];

export type IconName =
  | "home" | "shield" | "people" | "cheque" | "cart" | "doc"
  | "check-doc" | "chat" | "clock" | "lock";

export const practiceAreas: { icon: IconName; title: string; text: string; law: string }[] = [
  { icon: "home", title: "Civil & property", text: "Title and partition suits, injunctions, recovery suits, specific performance and verification of property documents.", law: "CPC · Specific Relief Act" },
  { icon: "shield", title: "Criminal & bail", text: "Regular and anticipatory bail, quashing petitions, trial defence and private complaints.", law: "BNS · BNSS · BSA" },
  { icon: "people", title: "Family & matrimonial", text: "Mutual consent and contested divorce, maintenance, child custody and domestic violence proceedings.", law: "Hindu Marriage Act · PWDV Act" },
  { icon: "cheque", title: "Cheque dishonour", text: "Statutory demand notices, complaints and defence in cheque bounce cases.", law: "Section 138, NI Act" },
  { icon: "cart", title: "Consumer disputes", text: "Complaints about deficient services and defective goods before the consumer commissions.", law: "Consumer Protection Act, 2019" },
  { icon: "doc", title: "Notices & drafting", text: "Legal notices and replies, agreements, sale deeds, wills and affidavits.", law: "Drafting & documentation" },
];

export const nriServices: { title: string; text: string; law?: string }[] = [
  { title: "Property protection", text: "Illegal possession, encroachment, tenants who refuse to leave, and fraudulent sale or transfer of your property." },
  { title: "Buying & selling from abroad", text: "Title verification, encumbrance checks, sale agreements and registration in Telangana through your attorney holder." },
  { title: "Power of attorney", text: "Drafting a GPA or SPA to sign in the USA or UK, and stamping it in India once it arrives.", law: "Indian Stamp Act, s. 18" },
  { title: "Inheritance & succession", text: "Succession and legal heir certificates, partition between heirs, and probate of wills.", law: "Indian Succession Act" },
  { title: "Family matters", text: "Divorce, maintenance and custody cases in Hyderabad, and the effect in India of a decree passed abroad.", law: "CPC, s. 13" },
  { title: "Cases filed against you", text: "Representation when a suit, cheque bounce or criminal complaint is filed against you in Hyderabad while you are abroad." },
];

export const consultSlots = [
  { slot: "Evening slot", ist: "7:00–10:00 PM", uk: "1:30–4:30 PM", usEast: "8:30–11:30 AM", usWest: "5:30–8:30 AM" },
  { slot: "Morning slot", ist: "8:00–9:30 AM", uk: "2:30–4:00 AM", usEast: "9:30–11:00 PM*", usWest: "6:30–8:00 PM*" },
];

export const steps = [
  { title: "Share the facts", text: "Send a short summary and scanned documents on WhatsApp or email." },
  { title: "Consultation", text: "Meet at the chambers, or on a video call at a time that suits your time zone." },
  { title: "Authorise", text: "Sign the vakalatnama, or a power of attorney if someone will act for you in India." },
  { title: "Stay updated", text: "Get a WhatsApp update after every hearing, with the next date and what is needed." },
];

export const expectations: { icon: IconName; title: string; text: string }[] = [
  { icon: "check-doc", title: "Documents first", text: "Advice is given after reading your papers, not before." },
  { icon: "chat", title: "Hearing updates", text: "A message after every hearing with the next date." },
  { icon: "clock", title: "Your time zone", text: "Evening slots that fall in UK afternoons and US mornings." },
  { icon: "lock", title: "Confidential", text: "What you share stays between you and your advocate." },
];

export const faqs = [
  { q: "Can I deal with a property case in Hyderabad while living in the USA or UK?", a: "In most matters, yes. You can give a power of attorney to a family member or trusted person in India, and consultations and document review can happen over video call and email. Some steps, such as giving evidence, may need your presence or a video-conference order from the court." },
  { q: "How do I sign a power of attorney from abroad for use in Telangana?", a: "A power of attorney signed abroad is usually notarised and apostilled in that country, or attested at the Indian Embassy or Consulate. Once it reaches India, it has to be stamped within three months under the Indian Stamp Act before it can be used for property registration." },
  { q: "What should I do if someone is occupying my property in Hyderabad?", a: "Collect the title documents, tax receipts and any rental agreement first. Depending on the facts, the remedies include a legal notice, a civil suit for possession and injunction, and a police complaint where there is forgery or criminal trespass." },
  { q: "What time can I call from the UK or the USA?", a: "Evening video consultations run from 7 PM to 10 PM India time, which is 1:30 PM to 4:30 PM in the UK and 8:30 AM to 11:30 AM on the US East Coast during winter." },
];

// Photos for the "Moments from the Chambers" slider, in order (the first one shows first).
// To add more: put the photo in public/gallery/ and add an entry here.
export const moments: { src: string; width: number; height: number; caption: string; detail?: string }[] = [
  {
    src: "/gallery/aag-rajinikanth-reddy.jpg",
    width: 1120,
    height: 1400,
    caption: "T. Rajinikanth Reddy",
    detail: "AAG, TSHC (Additional Advocate General, Telangana High Court)",
  },
  {
    src: "/gallery/moment-1.jpg",
    width: 1200,
    height: 899,
    caption: "P. Shravan Goud",
    detail: "GP for Medical, TSHC (Government Pleader, Telangana High Court)",
  },
];
