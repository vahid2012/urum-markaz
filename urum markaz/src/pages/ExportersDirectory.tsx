import { useMemo, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, ShieldCheck, MapPin, Phone, MessageCircle, Filter, Users } from 'lucide-react';
import Seo from '@/components/Seo';
import { suppliers } from '@/data/suppliers';
import { categories } from '@/data/categories';
import { SITE } from '@/data/site';

export default function ExportersDirectory() {
  const [params] = useSearchParams();
  const initialQ = params.get('q') || '';
  const [q, setQ] = useState(initialQ);
  const [cat, setCat] = useState('all');
  const [onlyVerified, setOnlyVerified] = useState(false);

  const filtered = useMemo(() => {
    return suppliers.filter((s) => {
      if (cat !== 'all' && s.categorySlug !== cat) return false;
      if (onlyVerified && !s.verified) return false;
      if (q.trim()) {
        const text = `${s.name} ${s.nameEn} ${s.desc} ${s.services.join(' ')}`.toLowerCase();
        if (!text.includes(q.toLowerCase())) return false;
      }
      return true;
    });
  }, [q, cat, onlyVerified]);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Directory",
    name: "دایرکتوری صادرکنندگان اروم مرکز",
    url: `${SITE.url}/exporters-directory`,
  };

  return (
    <>
      <Seo
        title="دایرکتوری صادرکنندگان و خدماتیاران ارومیه | اروم مرکز"
        description="فهرست کامل صادرکنندگان، تولیدکنندگان و خدماتیاران تأیید شده آذربایجان غربی با امکان تماس مستقیم واتساپ و استعلام خرید."
        keywords="دایرکتوری صادرکنندگان, ارومیه, آذربایجان غربی, صادرات, B2B, اروم مرکز"
        path="/exporters-directory"
        jsonLd={jsonLd}
      />

      <section className="relative h-44 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-navy-600 to-navy-700" />
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-2xl md:text-3xl font-extrabold text-white flex items-center gap-2"><Users size={28} /> دایرکتوری صادرکنندگان</h1>
          <p className="text-navy-100 mt-2 text-sm">{suppliers.length} صادرکننده و خدماتیار تأیید شده در آذربایجان غربی</p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* FILTERS */}
        <div className="bg-white rounded-2xl p-4 shadow-sm mb-6 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="جستجو در نام، توضیحات، خدمات..." className="w-full pr-10 pl-3 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
          </div>
          <select value={cat} onChange={(e) => setCat(e.target.value)} className="border border-slate-200 rounded-xl px-3 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white">
            <option value="all">همه دسته‌ها</option>
            {categories.map((c) => <option key={c.slug} value={c.slug}>{c.title}</option>)}
          </select>
          <label className="flex items-center gap-2 text-sm text-slate-600 bg-slate-50 px-4 py-2.5 rounded-xl cursor-pointer">
            <input type="checkbox" checked={onlyVerified} onChange={(e) => setOnlyVerified(e.target.checked)} className="w-4 h-4 accent-emerald-500" />
            <Filter size={14} /> فقط تأیید شده
          </label>
        </div>

        <p className="text-sm text-slate-500 mb-4">{filtered.length.toLocaleString('fa-IR')} نتیجه یافت شد</p>

        {filtered.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl">
            <p className="text-slate-500">نتیجه‌ای یافت نشد. لطفاً فیلتر را تغییر دهید.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((s) => {
              const c = categories.find((c) => c.slug === s.categorySlug);
              return (
                <div key={s.id} className="bg-white rounded-2xl p-5 shadow-sm hover:shadow-lg transition-shadow border border-slate-100">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-bold text-navy-600">{s.name}</h3>
                      <p className="text-xs text-slate-400" dir="ltr">{s.nameEn}</p>
                    </div>
                    {s.verified && <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1"><ShieldCheck size={11} /> تأیید شده</span>}
                  </div>
                  {c && <Link to={`/category/${c.slug}`} className="text-[11px] text-emerald-600 hover:underline block mb-2">{c.title}</Link>}
                  <p className="text-sm text-slate-600 mb-3 line-clamp-2">{s.desc}</p>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {s.services.map((sv) => <span key={sv} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded">{sv}</span>)}
                  </div>
                  <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                    <span className="text-xs text-slate-500 flex items-center gap-1"><MapPin size={12} /> {s.city}</span>
                    <a href={`https://wa.me/${s.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 transition-colors">
                      <MessageCircle size={14} /> تماس
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
