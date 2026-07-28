import type { ContactInfo } from "../types/site";
import "./StickyMobileBar.css";

export interface StickyMobileBarProps {
  contact: ContactInfo;
}

/** Fixed call/WhatsApp bar shown only on small screens (<980px). Respects iOS safe-area. */
export default function StickyMobileBar({ contact }: StickyMobileBarProps) {
  return (
    <div className="sticky-mobile">
      <div className="sticky-mobile__row">
        <a href={`tel:${contact.phoneHref}`} className="btn btn-ghost-dark">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
          اتصال الآن
        </a>
        <a href={contact.whatsappHref} className="btn btn-gold">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.35 5.08L2 22l5.06-1.33C8.51 21.51 10.2 22 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.2 14.2c-.24.68-1.4 1.3-1.94 1.36-.5.06-1.07.28-3.6-.75-2.98-1.23-4.9-4.25-5.05-4.45-.15-.2-1.2-1.6-1.2-3.05 0-1.45.76-2.16 1.03-2.46.27-.3.6-.36.8-.36.2 0 .4 0 .58.01.18.01.44-.07.68.53.25.6.85 2.08.92 2.23.07.15.12.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.38-.44.51-.15.15-.3.31-.13.6.17.3.77 1.27 1.65 2.06 1.14 1.02 2.1 1.34 2.4 1.49.3.15.48.13.65-.08.18-.2.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.78.84 2.08 1 .3.15.5.23.58.35.07.12.07.7-.17 1.4z" />
          </svg>
          واتساب
        </a>
      </div>
    </div>
  );
}
