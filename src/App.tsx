import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyMobileBar from "./components/StickyMobileBar";
import logoSrc from "./assets/logo.svg";
import type { BrandInfo, ContactInfo, FooterLinkSection } from "./types/site";

const brand: BrandInfo = {
  logoSrc,
  name: "نجمة الفرسان للنقليات",
  tagline: "STAR KNIGHTS TRANSPORT",
};

const contact: ContactInfo = {
  phoneHref: "+966506455381",
  phoneDisplay: "0506455381",
  whatsappHref: "https://wa.me/966506455381",
  region: "المنطقة الشرقية، السعودية",
};

const footerSections: FooterLinkSection[] = [
  {
    title: "الخدمات",
    links: [
      { label: "توريد الديزل", href: "/services/diesel-supply" },
      { label: "توصيل الديزل", href: "/services/diesel-delivery" },
      { label: "عقود توريد الديزل", href: "/services/diesel-contracts" },
      { label: "ديزل للمولدات", href: "/services/diesel-for-generators" },
      { label: "تأجير الداينا", href: "/services/truck-rental" },
    ],
  },
  {
    title: "المدن",
    links: [
      { label: "الدمام", href: "/locations/dammam" },
      { label: "الخبر", href: "/locations/khobar" },
      { label: "الجبيل", href: "/locations/jubail" },
      { label: "الأحساء", href: "/locations/al-ahsa" },
      { label: "القطيف", href: "/locations/qatif" },
    ],
  },
  {
    title: "الشركة",
    links: [
      { label: "من نحن", href: "/about" },
      { label: "المدونة", href: "/blog" },
      { label: "الأسئلة الشائعة", href: "/faq" },
      { label: "اتصل بنا", href: "/contact" },
    ],
  },
];

export default function App() {
  return (
    <>
      <Header brand={brand} contact={contact} />

      <main style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <p style={{ color: "var(--steel)", padding: "80px 20px", textAlign: "center" }}>
          محتوى الصفحة يوضع هنا — هذا المشروع يحتوي فقط على مكوّني الهيدر والفوتر.
        </p>
      </main>

      <Footer
        brand={brand}
        description="شركة متخصصة في توريد وتوصيل الديزل وعقود التوريد وتأجير الداينا للمصانع والمشاريع والمنشآت في المنطقة الشرقية."
        contact={contact}
        sections={footerSections}
        trustBadges={["تغطية 9 مدن في المنطقة الشرقية", "خدمة الشركات والمصانع والمشاريع"]}
        commercialRegister="7041336616"
        mapEmbedUrl="https://www.google.com/maps?q=Eastern%20Province%20Saudi%20Arabia&output=embed"
        policies={[
          { label: "سياسة الخصوصية", href: "/privacy-policy" },
          { label: "الشروط والأحكام", href: "/terms" },
        ]}
      />

      <StickyMobileBar contact={contact} />
    </>
  );
}
