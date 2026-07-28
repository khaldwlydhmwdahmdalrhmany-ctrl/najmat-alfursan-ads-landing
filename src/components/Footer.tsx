import type { BrandInfo, ContactInfo, FooterLinkSection } from "../types/site";
import "./Footer.css";

export interface FooterProps {
  brand: BrandInfo;
  description: string;
  contact: ContactInfo;
  sections: FooterLinkSection[];
  /** e.g. ["تغطية 9 مدن في المنطقة الشرقية", "خدمة الشركات والمصانع والمشاريع"] */
  trustBadges?: string[];
  commercialRegister?: string;
  /** Google Maps "output=embed" URL, no API key required. */
  mapEmbedUrl?: string;
  policies?: { label: string; href: string }[];
}

export default function Footer({
  brand,
  description,
  contact,
  sections,
  trustBadges = [],
  commercialRegister,
  mapEmbedUrl,
  policies = [],
}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="site-footer__grid">
          <div className="site-footer__brand-col">
            <div className="site-footer__brand">
              <span className="logo-badge">
                <img src={brand.logoSrc} alt={brand.name} />
              </span>
              <span className="site-footer__brand-text">
                <b>{brand.name}</b>
                {brand.tagline && (
                  <span style={{ color: "rgba(255,255,255,0.45)" }}>{brand.tagline}</span>
                )}
              </span>
            </div>
            <p className="site-footer__desc">{description}</p>
            <ul className="site-footer__contact">
              <li>
                <PhoneIcon />
                <a href={`tel:${contact.phoneHref}`} className="mono">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <PinIcon />
                {contact.region}
              </li>
            </ul>
          </div>

          {sections.map((section) => (
            <div className="site-footer__col" key={section.title}>
              <h5>{section.title}</h5>
              <ul>
                {section.links.map((link) => (
                  <li key={link.href}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {mapEmbedUrl && (
            <div className="site-footer__col">
              <h5>موقعنا</h5>
              <div className="site-footer__map">
                <iframe src={mapEmbedUrl} loading="lazy" title={`خريطة ${brand.name}`} />
              </div>
            </div>
          )}
        </div>

        {(trustBadges.length > 0 || commercialRegister) && (
          <div className="site-footer__trust">
            {trustBadges.map((badge) => (
              <span key={badge}>
                <ShieldIcon />
                {badge}
              </span>
            ))}
            {commercialRegister && (
              <span className="mono">السجل التجاري: {commercialRegister}</span>
            )}
          </div>
        )}

        <div className="site-footer__bottom">
          <span>
            © {year} {brand.name}. جميع الحقوق محفوظة.
          </span>
          {policies.length > 0 && (
            <div className="site-footer__policies">
              {policies.map((p) => (
                <a key={p.href} href={p.href}>
                  {p.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </footer>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 0 0-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 2 7v6c0 5.5 3.8 10.7 10 12 6.2-1.3 10-6.5 10-12V7l-10-5z" />
    </svg>
  );
}
