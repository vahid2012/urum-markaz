import { useState } from 'react';
import { Send, Check, FileText, MessageCircle } from 'lucide-react';
import Seo from '@/components/Seo';
import { categories } from '@/data/categories';
import { SITE } from '@/data/site';

export default function SubmitInquiry() {
  const [form, setForm] = useState({
    name: '', company: '', phone: '', country: '', category: '', product: '', quantity: '', unit: 'تن', deadline: '', details: '',
  });
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    const cat = categories.find((c) => c.slug === form.category);
    const msg = [
      `*استعلام خرید جدید - اروم مرکز*`,
      ``,
      `نام: ${form.name}`,
      `شرکت: ${form.company || '-'}`,
      `تلفن: ${form.phone}`,
      `کشور: ${form.country || '-'}`,
      ``,
      `دسته: ${cat?.title || '-'}`,
      `محصول: ${form.product || '-'}`,
      `تعداد: ${form.quantity} ${form.unit}`,
      `مهلت: ${form.deadline || '-'}`,
      ``,
      `توضیحات: ${form.details || '-'}`,
    ].join('\n');
    window.open(`${SITE.whatsappLink}?text=${encodeURIComponent(msg)}`, '_blank');
    setSent(true);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Action",
    name: "Submit Purchase Inquiry",
    url: `${SITE.url}/submit-inquiry`,
  };

  return (
    <>
      <Seo
        title="استعلام خرید و واردات از ارومیه | اروم مرکز - Urummarkaz"
        description="فرم استعلام خرید محصولات صادراتی آذربایجان غربی. درخواست خود را برای سیب، تریلر، سیمان، توتون و سایر محصولات ثبت و مستقیم در واتساپ ارسال کنید."
        keywords="استعلام خرید, واردات از ارومیه, صادرات آذربایجان غربی, واتساپ, اروم مرکز"
        path="/submit-inquiry"
        jsonLd={jsonLd}
      />

      <section className="relative h-44 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-navy-600 to-navy-700" />
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2"><FileText size={28} /> استعلام خرید</h1>
          <p className="text-navy-100 mt-2 text-sm">درخواست خرید خود را ثبت کنید - مستقیم در واتساپ اروم مرکز ارسال می‌شود</p>
        </div>
      </section>

      <div className="max-w-3xl mx-auto px-4 py-12">
        {sent ? (
          <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
            <div className="w-16 h-16 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-4">
              <Check size={32} className="text-emerald-500" />
            </div>
            <h2 className="text-xl font-bold text-navy-600">درخواست شما ارسال شد</h2>
            <p className="text-slate-500 mt-2 text-sm">کارشناسان اروم مرکز در واتساپ پاسخگو هستند. اگر پنجره باز نشد، مستقیم به {SITE.mobile} پیام دهید.</p>
            <button onClick={() => setSent(false)} className="mt-5 bg-navy-600 hover:bg-navy-500 text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors">ثبت درخواست جدید</button>
          </div>
        ) : (
          <form onSubmit={submit} className="bg-white rounded-2xl p-6 md:p-8 shadow-sm space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-bold text-navy-600 mb-1.5">نام و نام خانوادگی *</label>
                <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-600 mb-1.5">نام شرکت</label>
                <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-600 mb-1.5">شماره تماس / واتساپ *</label>
                <input required value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} dir="ltr" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 text-left" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-600 mb-1.5">کشور مقصد</label>
                <input value={form.country} onChange={(e) => setForm({ ...form, country: e.target.value })} placeholder="مثلا: عراق" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-navy-600 mb-1.5">دسته محصول *</label>
              <select required value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white">
                <option value="">انتخاب کنید...</option>
                {categories.map((c) => <option key={c.slug} value={c.slug}>{c.title}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-sm font-bold text-navy-600 mb-1.5">نام دقیق محصول</label>
              <input value={form.product} onChange={(e) => setForm({ ...form, product: e.target.value })} placeholder="مثلا: سیب سرخ گرید A - کیسه ۱۸ کیلو" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="col-span-2">
                <label className="block text-sm font-bold text-navy-600 mb-1.5">تعداد / مقدار</label>
                <input value={form.quantity} onChange={(e) => setForm({ ...form, quantity: e.target.value })} placeholder="مثلا: 50" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>
              <div>
                <label className="block text-sm font-bold text-navy-600 mb-1.5">واحد</label>
                <select value={form.unit} onChange={(e) => setForm({ ...form, unit: e.target.value })} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white">
                  <option>تن</option><option>کیلوگرم</option><option>عدد</option><option>کیسه</option><option>کامیون</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-navy-600 mb-1.5">مهلت تحویل</label>
              <input value={form.deadline} onChange={(e) => setForm({ ...form, deadline: e.target.value })} placeholder="مثلا: ۳۰ روز" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
            </div>

            <div>
              <label className="block text-sm font-bold text-navy-600 mb-1.5">توضیحات تکمیلی</label>
              <textarea rows={4} value={form.details} onChange={(e) => setForm({ ...form, details: e.target.value })} placeholder="هر جزئیات اضافی مانند گرید، بسته‌بندی، شرط پرداخت..." className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 resize-none" />
            </div>

            <button type="submit" className="w-full bg-emerald-500 hover:bg-emerald-400 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg">
              <MessageCircle size={20} /> ارسال استعلام در واتساپ
            </button>
            <p className="text-center text-xs text-slate-400">با کلیک روی دکمه، درخواست شما در واتساپ اروم مرکز آماده ارسال می‌شود.</p>
          </form>
        )}
      </div>
    </>
  );
}
