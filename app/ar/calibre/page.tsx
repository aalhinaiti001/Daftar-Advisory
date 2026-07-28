import Link from "next/link";
import type { Metadata } from "next";

const DESC = "مذكّرة قرار جاهزة لتوظيف دور مالي واحد. دور واحد، حُكم واحد، أسبوعان.";
export const metadata: Metadata = {
  title: "حُكم كاليبر — من دفتر",
  description: DESC,
  openGraph: { type: "website", siteName: "كاليبر من دفتر", locale: "ar_AR", title: "حُكم كاليبر — من دفتر", description: DESC, url: "/ar/calibre", images: ["/og-calibre.png"] },
  twitter: { card: "summary_large_image", title: "حُكم كاليبر — من دفتر", description: DESC, images: ["/og-calibre.png"] },
};

const email="mailto:ahmad@daftaradvisory.com?subject=حُكم%20كاليبر";
const method=[
  ["اقرأ","قائمتك القصيرة، قراءةً دقيقة."],
  ["قيّم","وفق معيار مبنيّ للدور."],
  ["قارن","المرشّحون جنبًا إلى جنب."],
  ["عايِر","ترشيح واحد قابل للدفاع."],
];
const deliverables=[
  ["بطاقة تقييم","معايير موزونة للدور."],
  ["دليل القراءة","القويّ والمقبول والضعيف، محدَّدًا."],
  ["بنك الأسئلة","أسئلة لكل معيار."],
  ["مذكّرة القرار","توصية واحدة مكتوبة."],
  ["ملاحظات المخاطر","أين الدليل ضعيف."],
  ["سجلّ النتائج","نتابع التوظيف لاحقًا."],
];
const scope=[
  ["دور مالي واحد","مراقب، مدير مالية، أول توظيف، أو تخطيط."],
  ["قائمتك القصيرة","من ثلاثة إلى ستة، جاهزة."],
  ["ما نراجعه","السِّير، تاريخ العمل، أدلّة الفريق."],
  ["أسبوعان","أتعاب ثابتة، نطاق ثابت."],
];
const faqs=[
  ["أهذا توظيف؟","لا. أنت تجهّز القائمة؛ ونحن نقيّمها."],
  ["لماذا المالية فقط؟","التقييم يقوم على الحُكم المالي."],
  ["نستخدم اختبارات شخصية.","تلك تقرأ الشخصية؛ ونحن نقرأ الدور — تتكاملان."],
  ["أمخاطرة قانونية؟","يُنظّم حُكم فريقك، لا اختبارًا على المرشّح."],
  ["كم المدّة؟","أسبوعان. الأتعاب ثابتة مسبقًا."],
];

function Eyebrow({children}:{children:React.ReactNode}){return <div className="eyebrow"><i/>§ {children}</div>}
function Brand(){return <Link className="brand" href="/ar/calibre"><b>C</b><span><em>كاليبر</em><small>من دفتر</small></span></Link>}

export default function CalibreAr(){return <main className="calibre ar" dir="rtl" lang="ar">
  <header><Brand/><input type="checkbox" id="nav-toggle" className="nav-toggle" aria-hidden="true"/><label className="menu" htmlFor="nav-toggle" aria-label="القائمة">☰</label><nav><a href="#method">المنهج</a><a href="#deliver">المذكّرة</a><a href="#scope-of-work">النطاق</a><a href="#faq">أسئلة</a><Link href="/ar">دفتر</Link><Link href="/calibre" className="lang" aria-label="English">EN</Link><a className="button small" href="#scope">اطلب حُكمًا</a></nav></header>
  <section className="hero wrap"><div><Eyebrow>حُكم كاليبر</Eyebrow><h1>قرار التوظيف المالي، على الدليل.</h1><p className="lead">مذكّرة قرار جاهزة لدور مالي واحد. نقيّم قائمتك القصيرة، ونعطيك ترشيحًا واحدًا قابلًا للدفاع — خلال أسبوعين.</p><div className="actions"><a className="button" href="#scope">اطلب حُكمًا</a><a className="text-link" href="#method">كيف يعمل ←</a></div></div><Scorecard/></section>
  <section className="cred"><div className="wrap"><article><Eyebrow>من يبنيه</Eyebrow><h3>تقييمٌ من عالم التدقيق الكبير والبحث التنفيذي، موجَّهٌ إلى توظيفك.</h3><p>أحمد الهنائي، مؤسّس دفتر.</p></article><article><Eyebrow>أين يناسب</Eyebrow><h3>إلى جانب عمل دفتر المالي.</h3><p>الأردن والإمارات والمنطقة الأوسع.</p></article></div></section>
  <section className="dark"><div className="wrap problem"><div><Eyebrow>المشكلة</Eyebrow><h2>القائمة نفسها.<br/>أربعة مراجِعين.<br/>أربعة أحكام.</h2><p>بلا معيار مشترك، تتبع الدرجةُ المراجِعَ — لا المرشّح.</p></div><ReviewerCard/></div></section>
  <section id="method" className="section wrap"><Eyebrow>المنهج</Eyebrow><h2>من الرأي إلى الدليل، في أربع.</h2><div className="grid four">{method.map((x,i)=><article className="method" key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤"][i]}</code><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
  <section id="deliver" className="section soft"><div className="wrap"><Eyebrow>ما تتسلّمه</Eyebrow><h2>بطاقة تقييم ومذكّرة.</h2><div className="grid three">{deliverables.map((x,i)=><article className="card" key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤","٠٥","٠٦"][i]}</code><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
  <section id="scope-of-work" className="section wrap"><Eyebrow>النطاق</Eyebrow><h2>دور واحد. قائمة واحدة. <em>حُكم</em> واحد.</h2><div className="grid four">{scope.map((x,i)=><article className="method" key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤"][i]}</code><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div><p className="scope-note">الاستقطاب والقرار يبقيان لك. أنت تقرّر؛ وكاليبر يعايِر.</p></section>
  <section id="who" className="section soft"><div className="wrap who"><div><Eyebrow>لِمن</Eyebrow><h2>لكل من يملك تعيينًا ماليًا سيدافع عنه.</h2></div><div className="people">{[["المؤسّسون","أول توظيف مالي، على الدليل."],["المدراء الماليون","قراءة لمن سيملك أرقامك."],["المجالس والمستثمرون","تعيين مهمّ، لا حدس."],["الفرق الصغيرة","رأي ثانٍ أقدم."]].map(x=><article key={x[0]}><h3><em>{x[0]}</em></h3><p>{x[1]}</p></article>)}</div></div></section>
  <section id="pilot" className="pilot"><div className="wrap"><Eyebrow>كيف يجري</Eyebrow><div className="pilot-grid"><div><h2>دور واحد. أسبوعان. قرار تدافع عنه.</h2><p>أحضِر الدور وقائمتك. نعيد إليك المذكّرة.</p><code>دور مالي واحد · أسبوعان · أتعاب ثابتة</code></div><div>{[["حدّد","المعايير والأوزان، معك."],["قيّم","كل مرشّح، باستقلال."],["عايِر","أربع قراءات في قرار."],["المذكّرة","بطاقة ومذكّرة وسجلّ."]].map((x,i)=><article className="pilot-step" key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤"][i]}</code><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div></div></div></section>
  <section className="benefits wrap">{[["أوضح","معيار واحد قبل أول مقابلة."],["أسرع","أيام، لا أسابيع."],["أكثر اتّساقًا","المعيار نفسه للجميع."],["أقوى دفاعًا","مبرّرٌ للملفّ."]].map(x=><article key={x[0]}><em>{x[0]}</em><p>{x[1]}</p></article>)}</section>
  <section id="faq" className="section soft"><div className="wrap faq"><div><Eyebrow>أسئلة</Eyebrow><h2>قبل أن تسأل.</h2></div><div>{faqs.map((x,i)=><article key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤","٠٥"][i]}</code><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div></div></section>
  <section id="scope" className="scope"><div className="wrap"><div className="scope-intro"><Eyebrow>اطلب حُكمًا</Eyebrow><h2>أحضِر دورًا ماليًا واحدًا إلى <em>كاليبر</em>.</h2><p className="lead">الدور وأين وصلت قائمتك. نردّ خلال يومين.</p><div className="contact"><a href={email}>ahmad@daftaradvisory.com</a></div></div><form className="scope-form" name="calibre-scope" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/ar/calibre?scoped=calibre"><input type="hidden" name="form-name" value="calibre-scope"/><p className="scope-hp"><label>اتركه فارغًا <input name="bot-field"/></label></p><div className="row"><div className="field"><label htmlFor="ca-name">الاسم</label><input id="ca-name" name="name" required/></div><div className="field"><label htmlFor="ca-email">البريد الإلكتروني</label><input id="ca-email" name="email" type="email" required/></div></div><div className="field"><label htmlFor="ca-company">الشركة</label><input id="ca-company" name="company"/></div><div className="row"><div className="field"><label htmlFor="ca-role">الدور المالي</label><select id="ca-role" name="finance_role" defaultValue=""><option value="" disabled>اختر…</option><option>مراقب مالي</option><option>مدير مالية</option><option>أول توظيف مالي</option><option>قائد تخطيط وتحليل</option><option>آخر</option></select></div><div className="field"><label htmlFor="ca-short">القائمة القصيرة</label><select id="ca-short" name="shortlist" defaultValue=""><option value="" disabled>اختر…</option><option>جاهزة (٣–٦)</option><option>ما زلت أرشّح</option><option>لم تُجهَّز بعد</option></select></div></div><div className="field"><label htmlFor="ca-notes">القرار، في سطر</label><textarea id="ca-notes" name="notes"/></div><div className="form-actions"><button className="button" type="submit">اطلب حُكمًا</button><p className="note">دور واحد، نطاق ثابت.</p></div></form></div></section>
  <footer><Brand/><div><Link href="/ar">عن دفتر</Link><a href="mailto:ahmad@daftaradvisory.com">AHMAD@DAFTARADVISORY.COM</a><span>DAFTARADVISORY.COM</span></div></footer>
  </main>}

function Scorecard(){const rows=[["العمق التقني",82,"٤٫١"],["الضوابط والصرامة",64,"٣٫٢"],["الشراكة مع الأعمال",90,"٤٫٥"]];return <article className="scorecard"><div className="score-head"><code>بطاقة تقييم · مراقب مالي</code><code>مرشّح ٠٤</code></div>{rows.map(x=><div className="score-row" key={String(x[0])}><span>{x[0]}</span><i><b style={{width:`${x[1]}%`}}/></i><code>{x[2]}</code></div>)}<div className="total"><em>الإجمالي المرجّح</em><strong>٣٫٩</strong></div></article>}
function ReviewerCard(){return <article className="review-card"><code>المرشّح ٠٤ · غير مُعايَر</code>{[["أ",85,"٨٫٥"],["ب",50,"٥٫٠"],["ج",75,"٧٫٥"],["د",30,"٣٫٠"]].map(x=><div className="review" key={x[0]}><code>مراجِع {x[0]}</code><i><b style={{width:`${x[1]}%`}}/></i><code>{x[2]}</code></div>)}<div className="spread"><em>التباعد</em><code>٥٫٥ نقاط</code></div></article>}
