import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Crown, Apple, Grape, Box, Palette, Truck, Cherry, Wind, FlaskConical,
  Droplet, Bug, Package, Mountain, ArrowLeft, Search, TrendingUp,
  ShieldCheck, Globe2, Users, Award, Star, MapPin, Phone, MessageCircle,
} from 'lucide-react';
import Seo from '@/components/Seo';
import BrandedImage from '@/components/BrandedImage';
import { categories } from '@/data/categories';
import { suppliers } from '@/data/suppliers';
import { stats, SITE } from '@/data/site';
import { blogArticles } from '@/data/blog';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Crown, Apple, Grape, Box, Palette, Truck, Cherry, Wind, FlaskConical,
  Droplet, Bug, Package, Mountain,
};

function Counter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && !started.current) {
        started.current = true;
        const duration = 1500;
        const start = performance.now();
        const tick = (now: number) => {
          const p = Math.min((now - start) / duration, 1);
          setCount(Math.floor(p * value));
          if (p < 1) requestAnimationFrame(tick);
          else setCount(value);
        };
        requestAnimationFrame(tick);
      }
    });
    obs.observe(el);
    return () => obs.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-extrabold text-white">
        {count.toLocaleString('fa-IR')}{suffix}
      </div>
      <div className="text-sm text-navy-100 mt-1">{label}</div>
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState('');
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "B2BDirectory",
    name: "اروم مرکز B2B Directory",
    url: SITE.url,
    description: "دایرکتوری B2B صادرکنندگان، تولیدکنندگان و خدمات تشریفات بازرگانی آذربایجان غربی",
    areaServed: "West Azerbaijan, Iran",
  };

  return (
    <>
      <Seo
        title="اروم مرکز | مرجع صادرات، واردات و تشریفات بازرگانی آذربایجان غربی - Urummarkaz.ir"
        description="اروم مرکز، مرجع تخصصی صادرات، واردات و خدمات تشریفات و پذیرایی بازرگانی استان آذربایجان غربی و ارومیه. دایرکتوری صادرکنندگان، ون VIP، رزرو هتل و رستوران."
        keywords="صادرات ارومیه, تشریفات بازرگانی, ون VIP, سیب صادراتی, تریلر سازی, سیمان سفید, توتون, اروم مرکز, Urummarkaz"
        path="/"
        jsonLd={jsonLd}
      />

      {/* HERO */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.pexels.com/photos/9477542/pexels-photo-9477542.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="بازرگانی و صادرات ارومیه" className="w-full h-full object-cover" />
          <div className="absolute inset-0 hero-overlay" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 py-20 w-full">
          <div className="max-w-3xl animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-400/40 text-emerald-200 px-4 py-1.5 rounded-full text-sm mb-5 backdrop-blur-sm">
              <ShieldCheck size={15} /> صادرکنندگان و خدمات تأیید شده آذربایجان غربی
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white leading-snug text-balance">
              مرجع تخصصی صادرات، واردات و خدمات تشریفات و پذیرایی بازرگانی آذربایجان غربی | اروم مرکز
            </h1>
            <p className="mt-5 text-lg text-navy-100 leading-relaxed">
              اتصال مستقیم بازرگانان بین‌المللی، واردکنندگان و تولیدکنندگان منتخب ارومیه. از سیب صادراتی و تریلر تا ون VIP، هتل و پذیرایی اختصاصی - همه در یک پلتفرم.
            </p>

            <form onSubmit={(e) => { e.preventDefault(); if (search.trim()) window.location.href = `/exporters-directory?q=${encodeURIComponent(search.trim())}`; }} className="mt-7 flex flex-col sm:flex-row gap-3 bg-white/95 backdrop-blur p-2 rounded-2xl shadow-2xl">
              <div className="relative flex-1">
                <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="جستجوی محصول یا صادرکننده..." className="w-full pr-10 pl-3 py-3 rounded-xl text-slate-800 text-sm focus:outline-none" />
              </div>
              <button type="submit" className="bg-navy-600 hover:bg-navy-500 text-white px-6 py-3 rounded-xl font-bold transition-colors">جستجو</button>
              <Link to="/vip-concierge-booking" className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-xl font-bold text-center transition-colors flex items-center justify-center gap-2">
                <Crown size={18} /> رزرو VIP
              </Link>
            </form>

            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6 bg-navy-600/40 backdrop-blur rounded-2xl p-6 border border-navy-400/30">
              {stats.map((s) => (
                <Counter key={s.label} value={s.value} suffix={s.suffix} label={s.label} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-extrabold text-navy-600">۱۳ دسته صادراتی و خدماتی منتخب ارومیه</h2>
          <p className="text-slate-500 mt-3 max-w-2xl mx-auto">از محصولات کشاورزی تا صنایع سنگین و خدمات تشریفات VIP - تمام ظرفیت‌های صادراتی آذربایجان غربی در یکجا</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((c, i) => {
            const Icon = iconMap[c.icon] || Box;
            return (
              <Link key={c.slug} to={`/category/${c.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-fade-up" style={{ animationDelay: `${i * 40}ms` }}>
                <div className="relative h-48">
                  <BrandedImage src={c.image} alt={c.title} className="w-full h-full" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-600/90 via-navy-600/20 to-transparent" />
                  <div className="absolute top-3 right-3 w-11 h-11 rounded-xl bg-emerald-500 flex items-center justify-center shadow-lg">
                    <Icon size={22} className="text-white" />
                  </div>
                  {c.featured && (
                    <span className="absolute top-3 left-3 bg-amber-400 text-navy-700 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                      <Star size={10} /> منتخب
                    </span>
                  )}
                  <h3 className="absolute bottom-3 right-4 left-4 text-white font-bold text-lg leading-tight">{c.title}</h3>
                </div>
                <div className="p-5">
                  <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">{c.shortDesc}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <span className="text-xs text-slate-400">{c.suppliers} صادرکننده</span>
                    <span className="text-emerald-600 text-sm font-bold flex items-center gap-1 group-hover:gap-2 transition-all">
                      مشاهده <ArrowLeft size={14} />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-navy-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold">چرا اروم مرکز؟</h2>
            <p className="text-navy-100 mt-3">پلتفرم مورد اعتماد بازرگانان بین‌المللی برای تجارت با آذربایجان غربی</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { icon: ShieldCheck, title: 'صادرکنندگان تأیید شده', desc: 'تمام تأمین‌کنندگان اروم مرکز قبل از لیست شدن بررسی و تأیید می‌شوند.' },
              { icon: Globe2, title: 'پشتیبانی چندزبانه', desc: 'مترجم ترکی، عربی، کردی و انگلیسی برای مذاکرات تجاری شما.' },
              { icon: Crown, title: 'تشریفات VIP کامل', desc: 'ون، هتل، رستوران و پذیرایی - یک پکیج یکپارچه برای سفر تجاری.' },
              { icon: TrendingUp, title: 'بازارهای منطقه‌ای', desc: 'ارتباط مستقیم با بازارهای عراق، کوردستان، ترکیه و کشورهای CIS.' },
            ].map((f) => (
              <div key={f.title} className="bg-navy-500/50 rounded-2xl p-6 border border-navy-400/20 hover:border-emerald-400/40 transition-colors">
                <div className="w-12 h-12 rounded-xl bg-emerald-500 flex items-center justify-center mb-4">
                  <f.icon size={24} className="text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-navy-100 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SUPPLIERS DIRECTORY PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-600">صادرکنندگان و خدماتیاران منتخب</h2>
            <p className="text-slate-500 mt-2">شرکت‌های تأیید شده با امکان تماس مستقیم</p>
          </div>
          <Link to="/exporters-directory" className="hidden sm:flex items-center gap-1 text-emerald-600 font-bold hover:gap-2 transition-all">
            دایرکتوری کامل <ArrowLeft size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {suppliers.slice(0, 6).map((s) => (
            <div key={s.id} className="bg-white rounded-2xl p-5 shadow-md hover:shadow-xl transition-shadow border border-slate-100">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-navy-600">{s.name}</h3>
                  <p className="text-xs text-slate-400 mt-0.5" dir="ltr">{s.nameEn}</p>
                </div>
                {s.verified && (
                  <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                    <ShieldCheck size={11} /> تأیید شده
                  </span>
                )}
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-3 line-clamp-2">{s.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {s.services.slice(0, 3).map((sv) => (
                  <span key={sv} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded">{sv}</span>
                ))}
              </div>
              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="text-xs text-slate-500 flex items-center gap-1"><MapPin size={12} /> {s.city}</span>
                <a href={`https://wa.me/${s.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-emerald-600 text-xs font-bold flex items-center gap-1 hover:gap-2 transition-all">
                  <MessageCircle size={14} /> تماس
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VIP CTA */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="relative rounded-3xl overflow-hidden">
          <BrandedImage src="https://images.pexels.com/photos/17455629/pexels-photo-17455629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="تشریفات VIP ارومیه" className="absolute inset-0 w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-l from-navy-600/95 to-navy-600/60" />
          <div className="relative p-8 md:p-12 max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-4">
              <Crown size={13} /> تشریفات بازرگانی VIP
            </span>
            <h2 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">سفر تجاری بی‌دردسر به ارومیه</h2>
            <p className="mt-4 text-navy-100 leading-relaxed">ون VIP، رزرو هتل ۵ ستاره، رستوران اختصاصی و مترجم - همه را یکجا رزرو کنید. درخواست شما مستقیم در واتساپ ارسال می‌شود.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link to="/vip-concierge-booking" className="bg-emerald-500 hover:bg-emerald-400 text-white px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2">
                <Crown size={18} /> رزرو آنلاین تشریفات
              </Link>
              <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3 rounded-xl font-bold transition-colors flex items-center gap-2">
                <MessageCircle size={18} /> مشاوره واتساپ
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 pb-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-navy-600">بلاگ و راهنمای صادرات</h2>
            <p className="text-slate-500 mt-2">مقالات تخصصی برای صادرکنندگان و بازرگانان</p>
          </div>
          <Link to="/blog" className="hidden sm:flex items-center gap-1 text-emerald-600 font-bold hover:gap-2 transition-all">
            همه مقالات <ArrowLeft size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogArticles.slice(0, 3).map((a) => (
            <Link key={a.slug} to={`/blog/${a.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow">
              <div className="h-44 relative">
                <BrandedImage src={a.image} alt={a.title} className="w-full h-full" />
              </div>
              <div className="p-5">
                <span className="text-xs text-emerald-600 font-bold">{a.category}</span>
                <h3 className="font-bold text-navy-600 mt-2 leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors">{a.title}</h3>
                <p className="text-sm text-slate-500 mt-2 line-clamp-2">{a.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                  <span>{a.date}</span>
                  <span>{a.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
