/** A single navigational or footer link. */
export interface NavLink {
  label: string;
  href: string;
}

/** Company contact details, reused by Header, Footer, and the sticky mobile bar. */
export interface ContactInfo {
  /** E.164-ish phone number used for tel: links, e.g. "+966506455381" */
  phoneHref: string;
  /** Human-readable phone number, e.g. "0506455381" */
  phoneDisplay: string;
  /** Full wa.me URL, e.g. "https://wa.me/966506455381" */
  whatsappHref: string;
  region: string;
}

/** A titled group of links shown as one footer column. */
export interface FooterLinkSection {
  title: string;
  links: NavLink[];
}

export interface BrandInfo {
  logoSrc: string;
  name: string;
  tagline?: string;
}
