# نجمة الفرسان — مكوّنات الهيدر والفوتر (Vite + React + TypeScript)

مشروع Vite + React + TypeScript جاهز يحتوي فقط على مكوّني **Header** و **Footer**
(بالإضافة إلى شريط اتصال/واتساب لاصق للجوال)، بنفس هوية نجمة الفرسان البصرية
(الأسود/الذهبي، خطوط Almarai و IBM Plex Sans Arabic)، والشعار الرسمي الحقيقي.

## التشغيل

```bash
npm install
npm run dev       # معاينة محلية على localhost
npm run build     # فحص TypeScript + بناء نسخة الإنتاج
```

تم اختبار `npm run build` بنجاح بدون أي أخطاء TypeScript.

## هيكل المشروع

```
src/
  assets/
    logo.svg              الشعار الرسمي (مضمّن كملف SVG حقيقي)
  types/
    site.ts                أنواع TypeScript المشتركة (BrandInfo, ContactInfo, NavLink...)
  components/
    Header.tsx / Header.css
    Footer.tsx / Footer.css
    StickyMobileBar.tsx / StickyMobileBar.css
  styles/
    tokens.css              متغيرات التصميم المشتركة (الألوان، الأزرار، الخطوط)
  App.tsx                   مثال تشغيلي يربط المكوّنات ببيانات نجمة الفرسان الحقيقية
  main.tsx                  نقطة الدخول
```

## الاستخدام في مشروع آخر (مثل متجر أريج النقاء أو أي صفحة React أخرى)

انسخ مجلدي `components` و `types` و `styles/tokens.css` وملف `assets/logo.svg`
إلى مشروعك، ثم استخدم المكوّنات مباشرة:

```tsx
import Header from "./components/Header";
import Footer from "./components/Footer";
import StickyMobileBar from "./components/StickyMobileBar";
import logoSrc from "./assets/logo.svg";

const brand = {
  logoSrc,
  name: "نجمة الفرسان للنقليات",
  tagline: "STAR KNIGHTS TRANSPORT",
};

const contact = {
  phoneHref: "+966506455381",
  phoneDisplay: "0506455381",
  whatsappHref: "https://wa.me/966506455381",
  region: "المنطقة الشرقية، السعودية",
};

<Header brand={brand} contact={contact} />
<Footer
  brand={brand}
  description="..."
  contact={contact}
  sections={[...]}          // أعمدة الفوتر، اختياري بالكامل
  trustBadges={[...]}       // شارات الثقة، اختياري
  commercialRegister="7041336616"
  mapEmbedUrl="https://www.google.com/maps?q=...&output=embed"
  policies={[...]}
/>
<StickyMobileBar contact={contact} />
```

## قابلية إعادة الاستخدام

- **Header** يقبل `navLinks` اختيارية — لا تمريرها للحصول على هيدر مبسّط (كصفحات
  الإعلانات)، أو مررها لعرض قائمة تنقل كاملة (كالموقع الرئيسي متعدد الصفحات).
- **Footer** يقبل عدد أعمدة `sections` غير محدود، بحيث يمكن استخدام نفس
  المكوّن في صفحة الهبوط، المدونة، أو أي صفحة أخرى بمحتوى فوتر مختلف.
- كل الألوان والخطوط مأخوذة من `tokens.css` — تغيير الهوية البصرية يتم من
  مكان واحد فقط.
