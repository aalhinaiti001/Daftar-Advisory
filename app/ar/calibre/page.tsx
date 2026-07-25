import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "كاليبر من دفتر",
  description: "أداة تشخيصية لقرارات التوظيف تحوّل الرأي إلى دليل.",
};

const email="mailto:ahmad@daftaradvisory.com?subject=مكالمة%20تشخيص%20كاليبر";
const methods=[
  ["اقرأ","دليل قراءة خاص بالدور يوضّح لكل مُقيّم أيّ إشارة يبحث عنها بالضبط."],
  ["قيّم","بطاقات تقييم منظّمة تحوّل الحُكم إلى دليل قابل للمقارنة والدفاع."],
  ["قارن","تصطفّ الدرجات جنبًا إلى جنب، فيظهر الاختلاف فورًا — لا بعد العرض."],
  ["عايِر","جلسة مُيسَّرة تحلّ الفجوات في قرار واحد يقف خلفه الفريق كله."],
];
const deliverables=[
  ["بطاقة تقييم خاصة بالدور","معايير موزونة مبنيّة للدور الذي توظّف له فعلًا، لا قالب عام."],
  ["دليل قراءة المرشّح","كيف تبدو الإجابات القوية والمتوسّطة والضعيفة — ليقرأ المُقيّمون بالطريقة نفسها."],
  ["بنك أسئلة المقابلة","أسئلة مربوطة بكل معيار، مع متابعات تختبر متانة الإشارة."],
  ["جلسة معايرة","جلسة عمل يوفّق فيها الفريق درجاته في حُكم واحد."],
  ["ملاحظات مخاطر التوظيف","حيث يكون الدليل ضعيفًا، وحيث اختلف الفريق، وما يجب سبره قبل العرض."],
  ["مذكّرة نتائج تنفيذية","ملخّص من صفحة واحدة جاهز للقرار تضعه القيادة في الملف وتدافع عنه لاحقًا."],
];
const faqs=[
  ["أهذا برنامج أم خدمة؟","خدمة، تُسلَّم كعُدّة عمل. نبني بطاقة التقييم ودليل القراءة وبنك الأسئلة لدورك، ونُيسّر المعايرة، وتحتفظ أنت بكل أداة."],
  ["كم يستغرق البرنامج التجريبي؟","أسبوعان إلى ثلاثة لدور واحد، من التحديد إلى مذكّرة النتائج. المدة والتكلفة واضحتان قبل أن نبدأ."],
  ["هل يستبدل مُقابِلينا؟","لا — بل يشحذهم. يظلّ فريقك يُقابل ويُقيّم؛ ويمنحه كاليبر معيارًا مشتركًا فتصير أحكامه قابلة للمقارنة."],
  ["لأيّ الأدوار يصلح؟","أيّ دور يهمّ فيه القرار ويختلف فيه الفريق. نبني المعايير من جديد كل مرة، فهو غير مرتبط بوظيفة واحدة."],
  ["ما الذي نحتاج إحضاره؟","توظيف واحد قائم أو حديث والفريق الذي أجراه. هذا يكفي لتشغيل المنهج كاملًا على مسارك أنت."],
  ["نستخدم أصلًا اختبارات الشخصية أو DISC.","تلك تصف الشخصية. كاليبر يُركّب منهج تقييم ومعايرة للمُقابِلين — يكمّلها ولا ينافسها."],
  ["أليس تقييم المرشّحين مخاطرة قانونية؟","كاليبر يتعلّق بكيفية تقييم فريقك، لا باختبار شخصية على المرشّح. إنه منظّم ومرتبط بالدور وموثّق — مصمَّم ليجعل القرارات أكثر قابلية للدفاع، لا أقل."],
  ["مُوظِّفونا ذوو خبرة.","الخبرة ليست اتّساقًا. في الجلسة الأولى، يكشف تمرين «مراجعان، سيرة واحدة» فجوة بعدّة نقاط داخل فريقك نفسه — مباشرةً."],
];
const packages=[
  ["التشخيص","البوابة الأولى","مراجعة بسعر ثابت لمسار التوظيف وعملية المقابلة وعيّنة من قراراتك الأخيرة — تُعاد كورقة نتائج من صفحة واحدة."],
  ["المعايرة","ورشة العمل","جلسة نصف يوم أو يوم كامل: إطار التقييم وتصميم المقابلة المنظّمة وبطاقات التقييم وبنك الأسئلة — ليُقيّم فريقك بالطريقة نفسها."],
  ["سيغنال","النظام، مُركَّبًا","بناء من أربعة إلى ستة أسابيع: بطاقات تقييم للأدوار، وبنك الأسئلة الكامل، ومعيار فرز مضمَّن في نظام التتبّع، مع دليل موارد بشرية."],
];

function Eyebrow({children}:{children:React.ReactNode}){return <div className="eyebrow"><i/>§ {children}</div>}
function Brand(){return <Link className="brand" href="/ar/calibre"><b>C</b><span><em>كاليبر</em><small>من دفتر</small></span></Link>}

export default function CalibreAr(){return <main className="calibre ar" dir="rtl" lang="ar">
  <header><Brand/><nav><a href="#method">المنهج</a><a href="#deliver">المخرجات</a><a href="#who">لِمن</a><a href="#pilot">التجريب</a><a href="#faq">أسئلة</a><Link href="/ar">دفتر</Link><Link href="/calibre" className="lang" aria-label="English">EN</Link><a className="button small" href="#scope">احجز مكالمة</a></nav><a className="menu" href="#method" aria-label="القائمة">☰</a></header>
  <section className="hero wrap"><div><Eyebrow>تشخيص قرار التوظيف</Eyebrow><h1>قرارات توظيفك تخمينٌ أكثر مما تظنّ.</h1><p className="lead">يستبدل كاليبر التقييم الذاتي للمرشّحين ببطاقات تقييم منظّمة، ومنهج قراءة مشترك، ومعايرة للفريق — فيَنال المرشّح نفسه القراءة نفسها في كل مرة.</p><div className="actions"><a className="button" href="#scope">احجز مكالمة تشخيص</a><a className="text-link" href="#method">شاهد المنهج ←</a></div></div><Scorecard/></section>
  <section className="cred"><div className="wrap"><article><Eyebrow>من يبنيه</Eyebrow><h3>تقييم من جانب شركات البحث التنفيذي والتدقيق الكبير — يُعلَّم لفريقك أنت.</h3><p>يبنيه أحمد الهنائي، مختصّ أقدم في جودة التوظيف عبر المنطقة.</p></article><article><Eyebrow>أين يناسب</Eyebrow><h3>مبنيّ للتوظيف في الخليج تحت ضغط التوطين.</h3><p>السعودية أولًا (نطاقات ٢٫٠)، ثم الإمارات والخليج الأوسع — توظيف سريع يظلّ قابلًا للدفاع.</p></article></div></section>
  <section className="dark"><div className="wrap problem"><div><Eyebrow>المشكلة</Eyebrow><h2>المرشّح نفسه.<br/>أربعة مراجِعين.<br/>أربعة أحكام.</h2><p>معظم التوظيف يجري على الحدس مُلبَّسًا لباس الحُكم. بلا معيار مشترك، تنجرف الدرجة مع المراجِع — لا المرشّح — ولا أحد يستطيع أن يقول، لاحقًا، لماذا اتُّخذ القرار.</p></div><ReviewerCard/></div></section>
  <section id="method" className="section wrap"><Eyebrow>منهج كاليبر</Eyebrow><h2>أربع خطوات من الرأي إلى الدليل.</h2><div className="grid four">{methods.map((x,i)=><article className="method" key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤"][i]}</code><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
  <section id="deliver" className="section soft"><div className="wrap"><Eyebrow>ما الذي تتسلّمه</Eyebrow><h2>عُدّة عمل، لا عرض شرائح.</h2><div className="grid three">{deliverables.map((x,i)=><article className="card" key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤","٠٥","٠٦"][i]}</code><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
  <section id="who" className="section wrap who"><div><Eyebrow>لِمن</Eyebrow><h2>لكل من يملك قرار توظيف سيُضطرّ للدفاع عنه.</h2></div><div className="people">{[["قادة الموارد البشرية","معيار تثق به المؤسسة كلها وتكرّره."],["فرق الاستقطاب","فرز أسرع بتردّد أقلّ بكثير."],["مديرو التوظيف","وضوح لما يعنيه «الجيّد» للدور."],["المؤسّسون","توظيفات عالية المخاطر تُبنى على الدليل، لا الانطباع."]].map(x=><article key={x[0]}><h3><em>{x[0]}</em></h3><p>{x[1]}</p></article>)}</div></section>
  <section id="packages" className="section soft"><div className="wrap"><Eyebrow>كيف نعمل معًا</Eyebrow><h2>ثلاثة أبواب، منهجٌ <em>واحد</em>.</h2><div className="grid three">{packages.map((x,i)=><article className="card" key={x[0]}><code>{["٠١","٠٢","٠٣"][i]}</code><h3>{x[0]}</h3><span className="tier">{x[1]}</span><p>{x[2]}</p></article>)}</div></div></section>
  <section id="pilot" className="pilot"><div className="wrap"><Eyebrow>كيف يعمل التجريب</Eyebrow><div className="pilot-grid"><div><h2>ابدأ بدور واحد.</h2><p>أحضِر توظيفًا واحدًا قائمًا أو حديثًا. نُشغّله كاملًا عبر مهمة قصيرة محدّدة النطاق — فترى المنهج على مسارك قبل الالتزام أكثر.</p><code>دور واحد · ٢–٣ أسابيع · نطاق ثابت</code></div><div>{[["حدّد الدور","عرِّف المعايير والأوزان مع فريقك."],["مراجعة منظّمة","يُقيّم المراجِعون باستقلال وفق الدليل المشترك."],["عايِر","حوِّل أربعة آراء إلى قرار واحد قابل للدفاع."],["مذكّرة النتائج","احتفِظ بالعُدّة كاملة وبملخّص جاهز للقرار."]].map((x,i)=><article className="pilot-step" key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤"][i]}</code><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div></div></div></section>
  <section className="benefits wrap">{[["أوضح","يعرف الجميع ما يعنيه «الجيّد» قبل أول مقابلة."],["أسرع","جدل دائري أقلّ؛ تُحسم القرارات في أيام لا أسابيع."],["أكثر اتّساقًا","المعيار نفسه عبر كل مراجِع وكل دور."],["أقوى دفاعًا","مبرّر موثّق يمكنك الوقوف خلفه لاحقًا."]].map(x=><article key={x[0]}><em>{x[0]}</em><p>{x[1]}</p></article>)}</section>
  <section id="faq" className="section soft"><div className="wrap faq"><div><Eyebrow>أسئلة شائعة</Eyebrow><h2>قبل أن تحجز المكالمة.</h2></div><div>{faqs.map((x,i)=><article key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤","٠٥","٠٦","٠٧","٠٨"][i]}</code><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div></div></section>
  <section id="scope" className="scope"><div className="wrap"><div className="scope-intro"><Eyebrow>احجز تشخيصًا</Eyebrow><h2>أحضِر دورًا واحدًا إلى <em>كاليبر</em>.</h2><p className="lead">مكالمة تشخيص قصيرة تكفي لترى إن كانت عمليتك تقيس المرشّح — أم المراجِع. أخبِرنا أين توظّف؛ نردّ خلال يومَي عمل.</p><div className="contact"><a href={email}>ahmad@daftaradvisory.com</a></div></div><form className="scope-form" name="calibre-scope" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/ar/calibre?scoped=calibre"><input type="hidden" name="form-name" value="calibre-scope"/><p className="scope-hp"><label>اتركه فارغًا <input name="bot-field"/></label></p><div className="row"><div className="field"><label htmlFor="ca-name">الاسم</label><input id="ca-name" name="name" required/></div><div className="field"><label htmlFor="ca-email">البريد الإلكتروني</label><input id="ca-email" name="email" type="email" required/></div></div><div className="field"><label htmlFor="ca-company">الشركة</label><input id="ca-company" name="company"/></div><div className="row"><div className="field"><label htmlFor="ca-role">الدور أو الفريق الذي توظّف له</label><input id="ca-role" name="role"/></div><div className="field"><label htmlFor="ca-vol">التوظيفات سنويًا</label><select id="ca-vol" name="hires_per_year" defaultValue=""><option value="" disabled>اختر…</option><option>أقلّ من ١٠</option><option>١٠–٥٠</option><option>أكثر من ٥٠</option></select></div></div><div className="field"><label htmlFor="ca-notes">ما الذي يبدو غير متّسق الآن؟</label><textarea id="ca-notes" name="notes"/></div><div className="form-actions"><button className="button" type="submit">اطلب مكالمة تشخيص</button><p className="note">دور واحد، نطاق ثابت. لا التزام بعد المكالمة.</p></div></form></div></section>
  <footer><Brand/><div><Link href="/ar">عن دفتر</Link><a href="mailto:ahmad@daftaradvisory.com">AHMAD@DAFTARADVISORY.COM</a><span>DAFTARADVISORY.COM</span></div></footer>
  </main>}

function Scorecard(){const rows=[["صياغة المشكلة",82,"٤٫١"],["دليل التنفيذ",64,"٣٫٢"],["إشارة أصحاب المصلحة",90,"٤٫٥"]];return <article className="scorecard"><div className="score-head"><code>بطاقة تقييم · مدير منتج أول</code><code>مرشّح ٠٤</code></div>{rows.map(x=><div className="score-row" key={String(x[0])}><span>{x[0]}</span><i><b style={{width:`${x[1]}%`}}/></i><code>{x[2]}</code></div>)}<div className="total"><em>الإجمالي المرجّح</em><strong>٣٫٩</strong></div></article>}
function ReviewerCard(){return <article className="review-card"><code>المرشّح ٠٤ · غير مُعايَر</code>{[["أ",85,"٨٫٥"],["ب",50,"٥٫٠"],["ج",75,"٧٫٥"],["د",30,"٣٫٠"]].map(x=><div className="review" key={x[0]}><code>مراجِع {x[0]}</code><i><b style={{width:`${x[1]}%`}}/></i><code>{x[2]}</code></div>)}<div className="spread"><em>التباعد</em><code>٥٫٥ نقاط</code></div></article>}
