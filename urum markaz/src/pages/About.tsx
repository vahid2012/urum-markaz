import { Link } from 'react-router-dom';
import { ShieldCheck, Globe2, Users, Award, Crown, Target, Eye, Heart, ArrowLeft } from 'lucide-react';
import Seo from '@/components/Seo';
import { SITE, stats } from '@/data/site';

export default function About() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "درباره اروم مرکز",
    url: `${SITE.url}/about-us`,
  };

  return (
    <>
      <Seo
        title="درباره اروم مرکز | مرجع صادرات و تشریفات بازرگانی آذربایجان غربی"
        description="اروم مرکز (Urummarkaz.ir) پلتفرم تخصصی اتصال بازرگانان بین‌المللی به صادرکنندگان، تولیدکنندگان و خدماتیاران استان آذربایجان غربی و ارومیه."
        keywords="درباره اروم مرکز, Urummarkaz, صادرات آذربایجان غربی, تشریفات بازرگانی"
        path="/about-us"
        jsonLd={jsonLd}
      />

      <section className="relative h-56 flex items-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-l from-navy-600 to-navy-700" />
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">درباره اروم مرکز</h1>
          <p className="text-navy-100 mt-2">مرجع تخصصی صادرات و تشریفات بازرگانی آذربایجان غربی</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-12 space-y-10">
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm">
          <h2 className="text-xl font-bold text-navy-600 mb-3">چه کسی هستیم؟</h2>
          <p className="text-slate-700 leading-relaxed">
            اروم مرکز (Urummarkaz.ir) پلتفرم تخصصی و مستقل برای اتصال بازرگانان بین‌المللی، واردکنندگان و تولیدکنندگان استان آذربایجان غربی است. ما با ارائه دایرکتوری صادرکنندگان تأیید شده، خدمات تشریفات بازرگانی VIP و راهنمای تخصصی صادرات، تجارت با ارومیه را ساده، شفاف و حرفه‌ای می‌کنیم.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl p-5 text-center shadow-sm">
              <div className="text-2xl font-extrabold text-emerald-600">{s.value.toLocaleString('fa-IR')}{s.suffix}</div>
              <div className="text-xs text-slate-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {[
            { icon: Target, title: 'ماموریت', desc: 'ایجاد پل ارتباطی شفاف و مطمئن بین تولیدکنندگان آذربایجان غربی و بازارهای بین‌المللی.' },
            { icon: Eye, title: 'چشم‌انداز', desc: 'تبدیل شدن به مرجع شماره یک صادرات و خدمات تشریفات بازرگانی در شمال غرب ایران.' },
            { icon: Heart, title: 'ارزش‌ها', desc: 'صداقت، کیفیت، احترام به بازرگان و پشتیبانی چندزبانه برای همه هیئت‌های تجاری.' },
          ].map((v) => (
            <div key={v.title} className="bg-white rounded-2xl p-6 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-3">
                <v.icon size={24} className="text-emerald-600" />
              </div>
              <h3 className="font-bold text-navy-600 mb-2">{v.title}</h3>
              <p className="text-sm text-slate-600 leading-relaxed">{v.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-l from-navy-600 to-navy-700 rounded-2xl p-6 md:p-8 text-white">
          <h2 className="text-xl font-bold mb-3">چرا به اروم مرکز اعتماد کنند؟</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {[
              { icon: ShieldCheck, text: 'تمام صادرکنندگان قبل از لیست شدن بررسی و تأیید می‌شوند.' },
              { icon: Globe2, text: 'پشتیبانی چندزبانه: ترکی، عربی، کردی، انگلیسی و فارسی.' },
              { icon: Crown, text: 'پکیج یکپارچه تشریفات VIP: ون، هتل، رستوران و مترجم.' },
              { icon: Award, text: '۱۲ سال تجربه در بازارهای صادراتی منطقه.' },
            ].map((f) => (
              <div key={f.text} className="flex items-start gap-3 bg-navy-500/50 rounded-xl p-4">
                <f.icon size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-sm text-navy-100">{f.text}</span>
              </div>
            ))}
          </div>
          <Link to="/contact-us" className="mt-6 inline-flex items-center gap-1 bg-emerald-500 hover:bg-emerald-400 px-5 py-3 rounded-xl font-bold transition-colors">
            تماس با ما <ArrowLeft size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
