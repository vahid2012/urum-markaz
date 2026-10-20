import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, FileText } from 'lucide-react';
import Seo from '@/components/Seo';
import BrandedImage from '@/components/BrandedImage';
import { blogArticles } from '@/data/blog';
import { SITE } from '@/data/site';

export default function BlogList() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "بلاگ اروم مرکز",
    url: `${SITE.url}/blog`,
    publisher: { "@type": "Organization", name: "اروم مرکز" },
  };

  return (
    <>
      <Seo
        title="بلاگ و راهنمای صادرات ارومیه | اروم مرکز - Urummarkaz"
        description="مقالات تخصصی صادرات، واردات و تشریفات بازرگانی آذربایجان غربی: راهنمای صادرات سیب، تریلر سازی، سیمان سفید، توتون و خدمات VIP ارومیه."
        keywords="بلاگ صادرات ارومیه, راهنمای صادرات, سیب ارومیه, تریلر, سیمان سفید, توتون, تشریفات VIP"
        path="/blog"
        jsonLd={jsonLd}
      />

      <section className="relative h-48 flex items-center overflow-hidden">
        <BrandedImage src="https://images.pexels.com/photos/34601/pexels-photo.jpg?auto=compress&cs=tinysrgb&h=650&w=940" alt="بلاگ اروم مرکز" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <span className="inline-flex items-center gap-2 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
            <FileText size={14} /> مرکز دانش
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">بلاگ و راهنمای تخصصی صادرات آذربایجان غربی</h1>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogArticles.map((a) => (
            <Link key={a.slug} to={`/blog/${a.slug}`} className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-48 relative">
                <BrandedImage src={a.image} alt={a.title} className="w-full h-full" />
                <span className="absolute top-3 right-3 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded">{a.category}</span>
              </div>
              <div className="p-5">
                <h2 className="font-bold text-navy-600 leading-snug line-clamp-2 group-hover:text-emerald-600 transition-colors">{a.title}</h2>
                <p className="text-sm text-slate-500 mt-2 line-clamp-3 leading-relaxed">{a.excerpt}</p>
                <div className="mt-4 flex items-center justify-between text-xs text-slate-400 pt-3 border-t border-slate-100">
                  <span className="flex items-center gap-1"><Calendar size={12} /> {a.date}</span>
                  <span className="flex items-center gap-1"><Clock size={12} /> {a.readTime}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
