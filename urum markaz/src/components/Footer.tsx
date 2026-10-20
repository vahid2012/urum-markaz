import { Link } from 'react-router-dom';
import { Crown, Phone, Mail, MapPin, MessageCircle, ExternalLink } from 'lucide-react';
import { SITE } from '@/data/site';
import { categories } from '@/data/categories';

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-navy-100 mt-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
                <Crown className="text-white" size={22} />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">اروم مرکز</h2>
                <p className="text-xs text-navy-200">Urummarkaz.ir</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-navy-200">
              مرجع تخصصی صادرات، واردات و خدمات تشریفات و پذیرایی بازرگانی استان آذربایجان غربی و ارومیه. اتصال بازرگانان بین‌المللی به صادرکنندگان و تولیدکنندگان منتخب.
            </p>
            <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white px-4 py-2 rounded-lg text-sm font-bold transition-colors">
              <MessageCircle size={16} /> واتساپ مستقیم
            </a>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">دسته‌بندی محصولات</h3>
            <ul className="space-y-2 text-sm">
              {categories.slice(0, 7).map((c) => (
                <li key={c.slug}>
                  <Link to={`/category/${c.slug}`} className="hover:text-emerald-300 transition-colors">{c.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">صفحات کلیدی</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/vip-concierge-booking" className="hover:text-emerald-300 transition-colors">رزرو تشریفات VIP</Link></li>
              <li><Link to="/exporters-directory" className="hover:text-emerald-300 transition-colors">دایرکتوری صادرکنندگان</Link></li>
              <li><Link to="/submit-inquiry" className="hover:text-emerald-300 transition-colors">استعلام خرید</Link></li>
              <li><Link to="/blog" className="hover:text-emerald-300 transition-colors">بلاگ و مقالات</Link></li>
              <li><Link to="/about-us" className="hover:text-emerald-300 transition-colors">درباره ما</Link></li>
              <li><Link to="/contact-us" className="hover:text-emerald-300 transition-colors">تماس با ما</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-4">اطلاعات تماس</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-emerald-400 mt-0.5 shrink-0" />
                <span>{SITE.address}</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-400 shrink-0" />
                <a href={`tel:${SITE.landline}`} className="hover:text-emerald-300 transition-colors" dir="ltr">{SITE.landline}</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-emerald-400 shrink-0" />
                <a href={`tel:${SITE.mobile}`} className="hover:text-emerald-300 transition-colors" dir="ltr">{SITE.mobile}</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-emerald-400 shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-emerald-300 transition-colors" dir="ltr">{SITE.email}</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-500 pt-8 mb-8">
          <h3 className="text-white font-bold mb-4 text-sm">شرکای تجاری اروم مرکز</h3>
          <div className="flex flex-wrap gap-3">
            {SITE.partners.map((p) => (
              <a key={p.url} href={p.url} rel="dofollow noopener noreferrer" target="_blank" className="inline-flex items-center gap-1.5 text-xs bg-navy-600 hover:bg-navy-500 px-3 py-2 rounded-lg transition-colors">
                {p.name} <ExternalLink size={11} className="text-emerald-400" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-navy-500 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-navy-200">
          <p>© ۱۴۰۳ اروم مرکز | Urummarkaz.ir - تمامی حقوق محفوظ است.</p>
          <p>طراحی و توسعه برای صادرکنندگان آذربایجان غربی</p>
        </div>
      </div>
    </footer>
  );
}
