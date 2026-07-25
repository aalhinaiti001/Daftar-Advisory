import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "حُكم كاليبر — من دفتر",
  description: "مذكّرة قرار جاهزة لتوظيف دور مالي واحد. اقرأ، قيّم، قارن، عايِر — توصية واحدة قابلة للدفاع خلال أسبوعين.",
};

const email="mailto:ahmad@daftaradvisory.com?subject=حُكم%20كاليبر";
const method=[
  ["اقرأ","نقرأ القائمة القصيرة التي جهّزتها — السير الذاتية وتاريخ العمل والسياق المالي للدور."],
  ["قيّم","يُقيَّم كل مرشّح وفق معيار خاص بالدور، فيصير الحُكم دليلًا قابلًا للمقارنة والدفاع."],
  ["قارن","تصطفّ الدرجات جنبًا إلى جنب، فيظهر الاختلاف الحقيقي قبل العرض — لا بعده."],
  ["عايِر","نحلّ الفجوات في توصية واحدة مرتّبة يقف خلفها الفريق كله."],
];
const deliverables=[
  ["بطاقة تقييم خاصة بالدور","معايير موزونة مبنيّة للدور المالي بالضبط — مراقب مالي، مدير مالية، أول توظيف مالي، أو قائد تخطيط."],
  ["دليل قراءة المرشّح","كيف تبدو الإجابات القوية والمقبولة والضعيفة لهذا الدور، ليقرأ الجميع الإشارة نفسها."],
  ["بنك أسئلة المقابلة","أسئلة مربوطة بكل معيار، مع متابعات تختبر متانة الإشارة المالية."],
  ["مذكّرة قرار مرتّبة","توصية واحدة مكتوبة مع مبرّرها — السجلّ القابل للدفاع الذي تضعه في الملف."],
  ["ملاحظات مخاطر التوظيف","حيث يكون الدليل ضعيفًا، وحيث اختلف الفريق، وما يجب سبره قبل العرض."],
  ["سجلّ النتائج","متابعة ما بعد القرار للتوظيف — قاعدة الدليل التي تجعل الحُكم التالي أدقّ."],
];
const scope=[
  ["دور مالي واحد","دور مالي واحد لكل حُكم — مراقب مالي، مدير مالية، أول توظيف مالي، أو قائد تخطيط وتحليل."],
  ["قائمتك القصيرة","قائمة قصيرة جهّزتها أنت — عادةً من ثلاثة إلى ستة مرشّحين."],
  ["ما نراجعه","السير الذاتية وتاريخ العمل والأدلة أمام الفريق، مُقيَّمة وفق المعيار."],
  ["أسبوعان، ثابتان","مهمة بسعر ثابت ونطاق ثابت تنتهي بمذكّرة القرار."],
];
const faqs=[
  ["أهذا توظيف (Recruitment)؟","لا. أنت تجهّز القائمة القصيرة؛ وكاليبر يقيّمها. لا نوظّف المرشّحين ولا نتفاوض على العروض — نسلّمك قرارًا قابلًا للدفاع."],
  ["لماذا الأدوار المالية فقط؟","لأن التقييم يقوم على الحُكم المالي — الصرامة نفسها التي يوليها دفتر للأرقام، موجَّهة إلى من سيملكونها."],
  ["نستخدم أصلًا اختبارات الشخصية أو DISC.","تلك تصف الشخصية. كاليبر يُركّب تقييمًا منظّمًا للدور نفسه — يكمّلها ولا ينافسها."],
  ["أليس تقييم المرشّحين مخاطرة قانونية؟","كاليبر يُنظّم كيفية تقييم فريقك، لا اختبار شخصية على المرشّح. إنه مرتبط بالدور وموثّق — ليجعل القرار أكثر قابلية للدفاع، لا أقل."],
  ["كم يستغرق؟","أسبوعان لدور واحد، من التحديد إلى مذكّرة القرار. المدة والأتعاب ثابتتان قبل أن نبدأ."],
  ["أين يناسب؟","غالبًا إلى جانب مهمة مالية مع دفتر، حين يكون هناك توظيف مالي مطروح. ويمكن تشغيله وحده أيضًا."],
];

function Eyebrow({children}:{children:React.ReactNode}){return <div className="eyebrow"><i/>§ {children}</div>}
function Brand(){return <Link className="brand" href="/ar/calibre"><b>C</b><span><em>كاليبر</em><small>من دفتر</small></span></Link>}

export default function CalibreAr(){return <main className="calibre ar" dir="rtl" lang="ar">
  <header><Brand/><nav><a href="#method">المنهج</a><a href="#deliver">المذكّرة</a><a href="#scope-of-work">النطاق</a><a href="#who">لِمن</a><a href="#faq">أسئلة</a><Link href="/ar">دفتر</Link><Link href="/calibre" className="lang" aria-label="English">EN</Link><a className="button small" href="#scope">اطلب حُكمًا</a></nav><a className="menu" href="#method" aria-label="القائمة">☰</a></header>
  <section className="hero wrap"><div><Eyebrow>حُكم كاليبر</Eyebrow><h1>أهمّ توظيف مالي لديك، مقرَّرٌ على الدليل.</h1><p className="lead">حُكم كاليبر مذكّرة قرار جاهزة لدور مالي واحد. نقرأ القائمة القصيرة التي جهّزتها، ونقيّمها وفق معيار خاص بالدور، ونسلّمك توصية واحدة مرتّبة قابلة للدفاع — خلال أسبوعين.</p><div className="actions"><a className="button" href="#scope">اطلب حُكمًا</a><a className="text-link" href="#method">كيف يعمل ←</a></div></div><Scorecard/></section>
  <section className="cred"><div className="wrap"><article><Eyebrow>من يبنيه</Eyebrow><h3>تقييم مالي من جانب التدقيق الكبير والبحث التنفيذي — موجَّهٌ إلى توظيفك أنت.</h3><p>يبنيه أحمد الهنائي، مؤسّس دفتر للاستشارات.</p></article><article><Eyebrow>أين يناسب</Eyebrow><h3>يُقدَّم إلى جانب مهمّات دفتر المالية.</h3><p>الأردن والإمارات والمنطقة الأوسع — حيثما وجب أن يكون التوظيف المالي قابلًا للدفاع.</p></article></div></section>
  <section className="dark"><div className="wrap problem"><div><Eyebrow>المشكلة</Eyebrow><h2>القائمة نفسها.<br/>أربعة مراجِعين.<br/>أربعة أحكام.</h2><p>حتى التوظيف المالي يجري غالبًا على الحدس مُلبَّسًا لباس الحُكم. بلا معيار مشترك، تنجرف الدرجة مع المراجِع — لا المرشّح — ولا أحد يستطيع أن يقول لاحقًا لماذا تمّ التعيين.</p></div><ReviewerCard/></div></section>
  <section id="method" className="section wrap"><Eyebrow>منهج كاليبر</Eyebrow><h2>أربع خطوات من الرأي إلى الدليل.</h2><div className="grid four">{method.map((x,i)=><article className="method" key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤"][i]}</code><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></section>
  <section id="deliver" className="section soft"><div className="wrap"><Eyebrow>ما الذي تتسلّمه</Eyebrow><h2>بطاقة تقييم ومذكّرة مرتّبة — لا عرض شرائح.</h2><div className="grid three">{deliverables.map((x,i)=><article className="card" key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤","٠٥","٠٦"][i]}</code><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div></div></section>
  <section id="scope-of-work" className="section wrap"><Eyebrow>ما هو في النطاق</Eyebrow><h2>دور واحد. قائمة واحدة. <em>حُكم</em> واحد.</h2><div className="grid four">{scope.map((x,i)=><article className="method" key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤"][i]}</code><h3>{x[0]}</h3><p>{x[1]}</p></article>)}</div><p className="scope-note">الاستقطاب والتفاوض على العرض وقرار التوظيف نفسه تبقى لك. أنت تقرّر؛ وكاليبر يعايِر.</p></section>
  <section id="who" className="section soft"><div className="wrap who"><div><Eyebrow>لِمن</Eyebrow><h2>لكل من يملك تعيينًا ماليًا سيُضطرّ للدفاع عنه.</h2></div><div className="people">{[["المؤسّسون","أول توظيف مالي يضبط الإيقاع — فاجعله على الدليل."],["المدراء الماليون","قراءة قابلة للدفاع لمن سيملك أرقامك."],["المجالس والمستثمرون","ثقة بأن تعيينًا ماليًا مهمًّا تمّ على أكثر من حدس."],["الفرق المالية الصغيرة","رأي ثانٍ أقدم حين يختلف الفريق."]].map(x=><article key={x[0]}><h3><em>{x[0]}</em></h3><p>{x[1]}</p></article>)}</div></div></section>
  <section id="pilot" className="pilot"><div className="wrap"><Eyebrow>كيف يجري الحُكم</Eyebrow><div className="pilot-grid"><div><h2>دور واحد. أسبوعان. قرار تدافع عنه.</h2><p>أحضِر دورًا ماليًا واحدًا والقائمة القصيرة التي جهّزتها. نُشغّله كاملًا عبر مهمة قصيرة محدّدة النطاق ونعيد إليك المذكّرة.</p><code>دور مالي واحد · أسبوعان · أتعاب ثابتة</code></div><div>{[["حدّد الدور","نعرّف المعايير والأوزان للدور المالي معك."],["اقرأ وقيّم","يُقيَّم كل مرشّح باستقلال وفق المعيار المشترك."],["قارن وعايِر","حوِّل أربع قراءات إلى قرار واحد مرتّب قابل للدفاع."],["مذكّرة القرار","تحتفظ ببطاقة التقييم والمذكّرة وسجلّ النتائج."]].map((x,i)=><article className="pilot-step" key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤"][i]}</code><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div></div></div></section>
  <section className="benefits wrap">{[["أوضح","يعرف الجميع ما يعنيه «الجيّد» للدور قبل أول مقابلة."],["أسرع","جدل دائري أقلّ؛ يُحسم القرار في أيام لا أسابيع."],["أكثر اتّساقًا","المعيار نفسه عبر كل مراجِع في الفريق."],["أقوى دفاعًا","مبرّر موثّق تضعه في الملف وتقف خلفه."]].map(x=><article key={x[0]}><em>{x[0]}</em><p>{x[1]}</p></article>)}</section>
  <section id="faq" className="section soft"><div className="wrap faq"><div><Eyebrow>أسئلة شائعة</Eyebrow><h2>قبل أن تطلب حُكمًا.</h2></div><div>{faqs.map((x,i)=><article key={x[0]}><code>{["٠١","٠٢","٠٣","٠٤","٠٥","٠٦"][i]}</code><div><h3>{x[0]}</h3><p>{x[1]}</p></div></article>)}</div></div></section>
  <section id="scope" className="scope"><div className="wrap"><div className="scope-intro"><Eyebrow>اطلب حُكمًا</Eyebrow><h2>أحضِر دورًا ماليًا واحدًا إلى <em>كاليبر</em>.</h2><p className="lead">أخبِرنا بالدور وأين وصلت القائمة القصيرة؛ نردّ خلال يومَي عمل.</p><div className="contact"><a href={email}>ahmad@daftaradvisory.com</a></div></div><form className="scope-form" name="calibre-scope" method="POST" data-netlify="true" netlify-honeypot="bot-field" action="/ar/calibre?scoped=calibre"><input type="hidden" name="form-name" value="calibre-scope"/><p className="scope-hp"><label>اتركه فارغًا <input name="bot-field"/></label></p><div className="row"><div className="field"><label htmlFor="ca-name">الاسم</label><input id="ca-name" name="name" required/></div><div className="field"><label htmlFor="ca-email">البريد الإلكتروني</label><input id="ca-email" name="email" type="email" required/></div></div><div className="field"><label htmlFor="ca-company">الشركة</label><input id="ca-company" name="company"/></div><div className="row"><div className="field"><label htmlFor="ca-role">الدور المالي الذي توظّف له</label><select id="ca-role" name="finance_role" defaultValue=""><option value="" disabled>اختر…</option><option>مراقب مالي</option><option>مدير مالية</option><option>أول توظيف مالي</option><option>قائد تخطيط وتحليل</option><option>دور مالي آخر</option></select></div><div className="field"><label htmlFor="ca-short">مرحلة القائمة القصيرة</label><select id="ca-short" name="shortlist" defaultValue=""><option value="" disabled>اختر…</option><option>القائمة جاهزة (٣–٦)</option><option>ما زلت أرشّح</option><option>لم تُجهَّز بعد</option></select></div></div><div className="field"><label htmlFor="ca-notes">ما القرار الذي توازنه؟</label><textarea id="ca-notes" name="notes"/></div><div className="form-actions"><button className="button" type="submit">اطلب حُكمًا</button><p className="note">دور واحد، نطاق ثابت. لا التزام بعد المكالمة.</p></div></form></div></section>
  <footer><Brand/><div><Link href="/ar">عن دفتر</Link><a href="mailto:ahmad@daftaradvisory.com">AHMAD@DAFTARADVISORY.COM</a><span>DAFTARADVISORY.COM</span></div></footer>
  </main>}

function Scorecard(){const rows=[["العمق التقني",82,"٤٫١"],["الضوابط والصرامة",64,"٣٫٢"],["الشراكة مع الأعمال",90,"٤٫٥"]];return <article className="scorecard"><div className="score-head"><code>بطاقة تقييم · مراقب مالي مجموعة</code><code>مرشّح ٠٤</code></div>{rows.map(x=><div className="score-row" key={String(x[0])}><span>{x[0]}</span><i><b style={{width:`${x[1]}%`}}/></i><code>{x[2]}</code></div>)}<div className="total"><em>الإجمالي المرجّح</em><strong>٣٫٩</strong></div></article>}
function ReviewerCard(){return <article className="review-card"><code>المرشّح ٠٤ · غير مُعايَر</code>{[["أ",85,"٨٫٥"],["ب",50,"٥٫٠"],["ج",75,"٧٫٥"],["د",30,"٣٫٠"]].map(x=><div className="review" key={x[0]}><code>مراجِع {x[0]}</code><i><b style={{width:`${x[1]}%`}}/></i><code>{x[2]}</code></div>)}<div className="spread"><em>التباعد</em><code>٥٫٥ نقاط</code></div></article>}
