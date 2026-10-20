import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Clock, Send, Check } from 'lucide-react';
import Seo from '@/components/Seo';
import { SITE } from '@/data/site';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `*تماس از سایت اروم مرکز*\n\nنام: ${form.name}\nایمیل: ${form.email}\nموضوع: ${form.subject}\n\n${form.message}`;
    window.open(`${SITE.whatsappLink}?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    url: `${SITE.url}/contact-us`,
  };

  return (
    <>
      <Seo
        title="تماس با اروم مرکز | Urummarkaz.ir"
        description="تماس با اروم مرکز: واتساپ 09143403431، تلفن 04433465524، ایمیل sanat.abr@gmail.com. آدرس: ارومیه، خیابان آزادگان، خیابان تیلا."
        keywords="تماس اروم مرکز, واتساپ, آدرس ارومیه, Urummarkaz contact"
        path="/contact-us"
        jsonLd={jsonLd}
      />

      <section className="relative h-48 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-navy-600 to-navy-700" />
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">تماس با ما</h1>
          <p className="text-navy-100 mt-2">کارشناسان اروم مرکز پاسخگوی شما هستند</p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* INFO */}
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-lg font-bold text-navy-600 mb-4">اطلاعات تماس</h2>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0"><MapPin size={18} className="text-emerald-600" /></div>
                <div><span className="block text-xs text-slate-400">آدرس</span><span className="text-sm text-slate-700">{SITE.address}</span></div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0"><Phone size={18} className="text-emerald-600" /></div>
                <div><span className="block text-xs text-slate-400">تلفن ثابت</span><a href={`tel:${SITE.landline}`} className="text-sm text-slate-700" dir="ltr">{SITE.landline}</a></div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0"><Phone size={18} className="text-emerald-600" /></div>
                <div><span className="block text-xs text-slate-400">موبایل / واتساپ</span><a href={`tel:${SITE.mobile}`} className="text-sm text-slate-700" dir="ltr">{SITE.mobile}</a></div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0"><Mail size={18} className="text-emerald-600" /></div>
                <div><span className="block text-xs text-slate-400">ایمیل</span><a href={`mailto:${SITE.email}`} className="text-sm text-slate-700" dir="ltr">{SITE.email}</a></div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0"><Clock size={18} className="text-emerald-600" /></div>
                <div><span className="block text-xs text-slate-400">ساعات کاری</span><span className="text-sm text-slate-700">شنبه تا پنجشنبه، ۹ تا ۱۸</span></div>
              </li>
            </ul>
          </div>

          <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="block bg-emerald-500 hover:bg-emerald-400 text-white rounded-2xl p-5 text-center font-bold transition-colors">
            <MessageCircle className="inline-block ml-2" size={20} /> گفتگوی مستقیم در واتساپ
          </a>
        </div>

        {/* FORM */}
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-lg font-bold text-navy-600 mb-4">فرم تماس</h2>
          {sent ? (
            <div className="text-center py-10">
              <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
                <Check size={32} className="text-emerald-500" />
              </div>
              <h3 className="font-bold text-navy-600">پیام شما آماده ارسال است</h3>
              <p className="text-sm text-slate-500 mt-2">اگر واتساپ باز نشد، مستقیم به شماره {SITE.mobile} پیام دهید.</p>
              <button onClick={() => setSent(false)} className="mt-4 text-emerald-600 font-bold text-sm">ارسال پیام جدید</button>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
              <div>
                <label className="block text-sm font-bold text-navy-600 mb-1.5">نام و نام خانوادگی</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-600 mb-1.5">ایمیل</label>
                <input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} dir="ltr" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 text-left" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-600 mb-1.5">موضوع</label>
                <input required value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-600 mb-1.5">پیام</label>
                <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none" />
              </div>
              <button type="submit" className="w-full bg-navy-600 hover:bg-navy-500 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                <Send size={18} /> ارسال پیام
              </button>
            </form>
          )}
        </div>
      </div>
    </>
  );
}
