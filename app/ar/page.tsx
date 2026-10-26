import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader, SiteFooter, Eyebrow } from "../_components/SiteChrome";
import { EMAIL } from "../_data/practice";
import SentNotice from "./SentNotice";

/* The Arabic home, on the canon stylesheet (DECISIONS.md row 33). The copy is
   the live /ar page's, carried as it was; the only new Arabic strings are the
   form field labels, the "received" note, and the footer lines, all listed in
   DECISIONS.md §7 for the founder's review. Chapters the English page has and
   this one does not (the memo, the service table, Notes) wait for native copy. */

const DESC = "عمل مالي بسيط، حتى حين لا تكون المسألة كذلك. قوائم مالية، استعداد للتدقيق، مراجعة فنية، ودعم صفقات.";

export const metadata: Metadata = {
  title: "دفتر للاستشارات",
  description: DESC,
  alternates: {
    canonical: "/ar",
    languages: { en: "/", ar: "/ar", "x-default": "/" },
  },
  openGraph: { type: "website", siteName: "دفتر للاستشارات", locale: "ar_AR", title: "دفتر للاستشارات", description: DESC, url: "/ar", images: ["/og-daftar.png"] },
  twitter: { card: "summary_large_image", title: "دفتر للاستشارات", description: DESC, images: ["/og-daftar.png"] },
};

const STATS: [string, string][] = [
  ["ممارس أقدم", "واحد"],
  ["النطاق", "واضح"],
  ["الأتعاب", "ثابتة"],
  ["المخرَج", "عملي"],
];

const SERVICES_AR: [string, string, string][] = [
  ["٠١", "القوائم المالية", "إعدادها أو تنظيفها، مع ملفّاتها الداعمة."],
  ["٠٢", "الاستعداد للتدقيق", "قبل وصول المدقّق: فجوات، مستندات، خطة."],
  ["٠٣", "المراجعة الفنية", "رأي ثانٍ في رقم أو معالجة أو موقف محاسبي."],
  ["٠٤", "دعم الصفقات", "مهمّات محدّدة حول الصفقات والمشاريع الخاصة."],
];

const FIT: [string, string, string][] = [
  ["٠١", "تتحدّث إلى من ينجز العمل", "وصول مباشر، بلا وسطاء."],
  ["٠٢", "تعرف النطاق قبل البدء", "لا مفاجآت."],
  ["٠٣", "تحصل على ملفّ عملي", "لا مجرّد تعليقات."],
  ["٠٤", "تخرج بشيء يبقى", "أداة يستمرّ فريقك في استخدامها."],
];

export default function DaftarAr() {
  return (
    <div className="dft" dir="rtl" lang="ar">
      <SiteHeader active="home" lang="ar" />

      <main className="dft-rise">
        <section className="dft-wrap dft-hero dft-hero-one">
          <div>
            <Eyebrow tone="rust">§ ٠٠ · الشركة</Eyebrow>
            <h1 className="dft-h1">مشورة واضحة. عمل أقدم. بلا طبقات.</h1>
            <p className="dft-lead">
              دفتر يساعد المؤسّسين والفِرق المالية في أهمّ الأعمال: القوائم المالية، والاستعداد
              للتدقيق، والمراجعة الفنية، ودعم الصفقات.
            </p>
            <div className="dft-actions">
              <a className="dft-btn" href="#scope">ابدأ محادثة</a>
              <a className="dft-btn-ghost" href="#services">اطّلع على الخدمات</a>
            </div>
          </div>
        </section>

        <div className="dft-wrap">
          <dl className="dft-strip">
            {STATS.map(([term, value]) => (
              <div key={term}>
                <dt>{term}</dt>
                <dd>{value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <section id="plain" className="dft-section">
          <div className="dft-wrap dft-split">
            <div>
              <Eyebrow>§ ٠١ · بعبارة بسيطة</Eyebrow>
              <h2 className="dft-h2">عمل مالي بسيط، حتى حين لا تكون المسألة كذلك.</h2>
            </div>
            <div>
              <p className="dft-lead" style={{ marginBottom: 22 }}>
                دفتر — <em>دَفْتَر</em>، السجلّ. نجهّز أرقامك للتدقيق والمجالس والمقرضين والمستثمرين —
                دون كلفة شركة كبيرة.
              </p>
              <p>ممارس أقدم واحد، نطاق واضح، أتعاب ثابتة، ومخرَج يبقى في يد فريقك.</p>
            </div>
          </div>
        </section>

        <section id="services" className="dft-section dft-section-soft">
          <div className="dft-wrap">
            <Eyebrow>§ ٠٢ · الخدمات</Eyebrow>
            <h2 className="dft-h2" style={{ marginBottom: 44 }}>أربع خدمات. كلٌّ بمخرَج واضح.</h2>
            <div className="dft-ledger">
              {SERVICES_AR.map(([num, title, body]) => (
                <article className="dft-ledger-3" key={num}>
                  <code>{num}</code>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="fit" className="dft-section dft-section-dark">
          <div className="dft-wrap">
            <Eyebrow tone="dark">§ ٠٣ · ما يجعله أيسر</Eyebrow>
            <h2 className="dft-h2" style={{ margin: "0 0 50px", maxWidth: "24ch" }}>
              للمؤسّسين والمدراء الماليين والفرق الصغيرة.
            </h2>
            <div className="dft-commitments">
              {FIT.map(([num, title, body]) => (
                <div key={num}>
                  <span>{num}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="calibre" className="dft-section dft-calibre-band" aria-labelledby="calibre-h">
          <div className="dft-wrap dft-calibre-inner">
            <div className="dft-calibre-mark" aria-hidden="true">
              <span className="dft-calibre-tile">C</span>
              <span className="dft-calibre-name dft-calibre-name-ar">كاليبر</span>
              <span className="dft-calibre-kicker">من دفتر</span>
            </div>
            <div>
              <Eyebrow>كاليبر · من دفتر</Eyebrow>
              <h2 id="calibre-h" className="dft-h2-sm">الصرامة نفسها، على التوظيف المالي.</h2>
              <p className="dft-calibre-use">
                حُكم كاليبر مذكّرة قرار لدور مالي واحد: نقرأ القائمة القصيرة ونقيّمها، ونعطيك ترشيحًا
                قابلًا للدفاع.
              </p>
              <Link className="dft-btn-light" href="/ar/calibre">استكشف كاليبر</Link>
            </div>
          </div>
        </section>

        <section id="scope" className="dft-section">
          <div className="dft-wrap dft-split">
            <div>
              <Eyebrow>§ ٠٤ · ابدأ</Eyebrow>
              <h2 className="dft-h2">
                لنجعل الرقم القادم <em>واضحًا</em>.
              </h2>
              <p className="dft-lead" style={{ marginTop: 22 }}>أخبِرنا بما هو مطروح. نردّ خلال يومين.</p>
              <p className="dft-contact-line">
                <a href={`mailto:${EMAIL}?subject=محادثة%20مع%20دفتر`} lang="en" dir="ltr">{EMAIL}</a>
                {" "}· عمّان · المنطقة
              </p>
            </div>
            <div>
              <SentNotice />
              {/* Same Netlify form name and field names as the English scope
                  builder and public/__forms.html, so both land in one inbox. */}
              <form
                className="dft-form"
                name="daftar-scope"
                method="POST"
                action="/ar?sent=1"
                data-netlify="true"
                netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="daftar-scope" />
                <p className="dft-hp" aria-hidden="true">
                  <label>
                    اتركه فارغًا <input name="bot-field" tabIndex={-1} autoComplete="off" />
                  </label>
                </p>
                <div className="dft-form-row">
                  <div className="dft-field">
                    <label htmlFor="a-name">الاسم</label>
                    <input id="a-name" name="name" required autoComplete="name" />
                  </div>
                  <div className="dft-field">
                    <label htmlFor="a-email">البريد الإلكتروني</label>
                    <input id="a-email" name="email" type="email" required autoComplete="email" dir="ltr" />
                  </div>
                </div>
                <div className="dft-field">
                  <label htmlFor="a-company">المؤسسة</label>
                  <input id="a-company" name="company" autoComplete="organization" />
                </div>
                <div className="dft-field">
                  <label htmlFor="a-message">ما المسألة المطروحة؟</label>
                  <textarea id="a-message" name="message" rows={4} />
                </div>
                <div className="dft-field">
                  <label htmlFor="a-timing">الإطار الزمني</label>
                  <select id="a-timing" name="timing" defaultValue="">
                    <option value="" disabled>اختر…</option>
                    <option>استكشاف مبدئي</option>
                    <option>هذا الربع</option>
                    <option>عاجل</option>
                  </select>
                </div>
                <button className="dft-btn" type="submit">ابدأ محادثة</button>
                <p className="dft-form-note">قراءة أقدم لما إن كنّا نستطيع المساعدة.</p>
              </form>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter lang="ar" />
    </div>
  );
}
