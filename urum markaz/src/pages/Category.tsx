import { Link, useParams } from 'react-router-dom';
import {
  Crown, Apple, Grape, Box, Palette, Truck, Cherry, Wind, FlaskConical,
  Droplet, Bug, Package, Mountain, Check, ShieldCheck, MapPin, Phone,
  MessageCircle, ArrowLeft, Star, FileText,
} from 'lucide-react';
import Seo from '@/components/Seo';
import BrandedImage from '@/components/BrandedImage';
import { getCategory, categories } from '@/data/categories';
import { getSuppliersByCategory } from '@/data/suppliers';
import { SITE } from '@/data/site';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Crown, Apple, Grape, Box, Palette, Truck, Cherry, Wind, FlaskConical,
  Droplet, Bug, Package, Mountain,
};

export default function Category() {
  const { slug } = useParams<{ slug: string }>();
  const cat = slug ? getCategory(slug) : undefined;

  if (!cat) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-32 text-center">
        <h1 className="text-2xl font-bold text-navy-600">دسته مورد نظر یافت نشد</h1>
        <Link to="/" className="mt-4 inline-block text-emerald-600 font-bold">بازگشت به خانه</Link>
      </div>
    );
  }

  const Icon = iconMap[cat.icon] || Box;
  const catSuppliers = getSuppliersByCategory(cat.slug);
  const related = categories.filter((c) => c.slug !== cat.slug && c.featured).slice(0, 3);

  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Product",
      name: cat.title,
      description: cat.shortDesc,
      image: cat.image,
      category: cat.titleEn,
      brand: { "@type": "Brand", name: "اروم مرکز" },
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      serviceType: cat.titleEn,
      provider: { "@type": "Organization", name: "اروم مرکز" },
      areaServed: "West Azerbaijan, Iran",
    },
  ];

  return (
    <>
      <Seo
        title={`${cat.title} | اروم مرکز - ${cat.titleEn}`}
        description={cat.shortDesc}
        keywords={`${cat.title}, ${cat.titleEn}, صادرات ارومیه, آذربایجان غربی, اروم مرکز`}
        image={cat.image}
        path={`/category/${cat.slug}`}
        jsonLd={jsonLd}
        type="product"
      />

      {/* HERO */}
      <section className="relative h-72 md:h-80 flex items-end overflow-hidden">
        <BrandedImage src={cat.image} alt={cat.title} className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-700 via-navy-600/50 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 pb-8 w-full">
          <nav className="text-xs text-navy-100 mb-3 flex items-center gap-2">
            <Link to="/" className="hover:text-emerald-300">خانه</Link>
            <span>/</span>
            <Link to="/exporters-directory" className="hover:text-emerald-300">دسته‌بندی‌ها</Link>
            <span>/</span>
            <span className="text-emerald-300">{cat.title}</span>
          </nav>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-500 flex items-center justify-center shadow-xl shrink-0">
              <Icon size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-2xl md:text-4xl font-extrabold text-white leading-tight">{cat.title}</h1>
              <p className="text-navy-100 text-sm mt-1" dir="ltr">{cat.titleEn}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* MAIN */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy-600 mb-3">درباره {cat.title}</h2>
            <p className="text-slate-600 leading-relaxed">{cat.longDesc}</p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <h2 className="text-xl font-bold text-navy-600 mb-4">مشخصات و امکانات</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cat.specs.map((s) => (
                <div key={s} className="flex items-center gap-2 bg-slate-50 rounded-lg p-3">
                  <Check size={16} className="text-emerald-500 shrink-0" />
                  <span className="text-sm text-slate-700">{s}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SUPPLIERS */}
          {catSuppliers.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-navy-600 mb-4">صادرکنندگان این دسته ({catSuppliers.length})</h2>
              <div className="space-y-4">
                {catSuppliers.map((s) => (
                  <div key={s.id} className="bg-white rounded-2xl p-5 shadow-sm border border-slate-100">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-bold text-navy-600">{s.name}</h3>
                        <p className="text-xs text-slate-400" dir="ltr">{s.nameEn}</p>
                      </div>
                      {s.verified && (
                        <span className="bg-emerald-50 text-emerald-600 text-[10px] font-bold px-2 py-1 rounded flex items-center gap-1">
                          <ShieldCheck size={11} /> تأیید شده
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{s.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {s.services.map((sv) => (
                        <span key={sv} className="text-[11px] bg-slate-100 text-slate-600 px-2 py-1 rounded">{sv}</span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                      <div className="text-xs text-slate-500 flex items-center gap-3">
                        <span className="flex items-center gap-1"><MapPin size={12} /> {s.city}</span>
                        <span className="flex items-center gap-1" dir="ltr"><Phone size={12} /> {s.phone}</span>
                      </div>
                      <a href={`https://wa.me/${s.whatsapp}`} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 text-white text-xs font-bold px-4 py-2 rounded-lg flex items-center gap-1 transition-colors">
                        <MessageCircle size={14} /> استعلام
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* SIDEBAR */}
        <aside className="space-y-6">
          <div className="bg-gradient-to-br from-navy-600 to-navy-700 rounded-2xl p-6 text-white sticky top-28">
            <h3 className="font-bold text-lg mb-2">استعلام خرید این محصول</h3>
            <p className="text-sm text-navy-100 mb-4">درخواست خود را مستقیم در واتساپ برای اروم مرکز ارسال کنید.</p>
            <a
              href={`${SITE.whatsappLink}?text=${encodeURIComponent(`سلام، برای دسته "${cat.title}" استعلام قیمت و شرایط می‌خواهم.`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-emerald-500 hover:bg-emerald-400 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors"
            >
              <MessageCircle size={18} /> استعلام واتساپ
            </a>
            <Link to="/submit-inquiry" className="mt-3 w-full bg-white/10 hover:bg-white/20 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
              <FileText size={18} /> فرم استعلام خرید
            </Link>
            {cat.slug === 'vip-business-concierge-urmia' && (
              <Link to="/vip-concierge-booking" className="mt-3 w-full bg-amber-400 hover:bg-amber-300 text-navy-700 py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors">
                <Crown size={18} /> رزرو تشریفات VIP
              </Link>
            )}
            <div className="mt-6 pt-6 border-t border-navy-400/30 space-y-2 text-sm">
              <div className="flex items-center justify-between"><span className="text-navy-200">تعداد صادرکننده</span><span className="font-bold">{cat.suppliers}</span></div>
              <div className="flex items-center justify-between"><span className="text-navy-200">منطقه</span><span>آذربایجان غربی</span></div>
              <div className="flex items-center justify-between"><span className="text-navy-200">وضعیت</span><span className="text-emerald-300">فعال</span></div>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-navy-600 mb-3">دسته‌های منتخب مرتبط</h3>
            <div className="space-y-3">
              {related.map((r) => {
                const RIcon = iconMap[r.icon] || Box;
                return (
                  <Link key={r.slug} to={`/category/${r.slug}`} className="flex items-center gap-3 bg-white rounded-xl p-3 shadow-sm hover:shadow-md transition-shadow">
                    <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0">
                      <RIcon size={18} className="text-emerald-600" />
                    </div>
                    <span className="text-sm text-slate-700 font-medium flex-1">{r.title}</span>
                    <ArrowLeft size={14} className="text-slate-300" />
                  </Link>
                );
              })}
            </div>
          </div>
        </aside>
      </div>
    </>
  );
}
