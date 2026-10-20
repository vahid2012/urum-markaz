import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X, Phone, Search, Crown, ChevronDown } from 'lucide-react';
import { SITE } from '@/data/site';
import { categories } from '@/data/categories';

export default function Header() {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState('');
  const [catOpen, setCatOpen] = useState(false);
  const navigate = useNavigate();

  const onSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/exporters-directory?q=${encodeURIComponent(search.trim())}`);
      setSearch('');
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-navy-600 text-white shadow-lg">
      <div className="bg-navy-700 text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <a href={`tel:${SITE.landline}`} className="flex items-center gap-1 hover:text-emerald-300 transition-colors">
              <Phone size={12} /> {SITE.landline}
            </a>
            <span className="text-navy-200">|</span>
            <span className="text-navy-100">{SITE.address}</span>
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <span className="text-navy-200">زبان:</span>
            {['FA', 'EN', 'TR', 'AR', 'KU'].map((l) => (
              <button key={l} className="hover:text-emerald-300 transition-colors px-1">{l}</button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform">
              <Crown className="text-white" size={26} />
            </div>
            <div>
              <h1 className="text-xl font-extrabold leading-tight">اروم مرکز</h1>
              <p className="text-xs text-navy-200">Urummarkaz.ir | مرجع صادرات آذربایجان غربی</p>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            <Link to="/" className="px-4 py-2 rounded-lg hover:bg-navy-500 transition-colors text-sm font-medium">خانه</Link>

            <div className="relative" onMouseEnter={() => setCatOpen(true)} onMouseLeave={() => setCatOpen(false)}>
              <button className="px-4 py-2 rounded-lg hover:bg-navy-500 transition-colors text-sm font-medium flex items-center gap-1">
                دسته‌بندی محصولات <ChevronDown size={14} />
              </button>
              {catOpen && (
                <div className="absolute right-0 top-full pt-2 w-72 z-50">
                  <div className="bg-white text-navy-600 rounded-xl shadow-2xl p-2 grid grid-cols-1 gap-0.5 max-h-[70vh] overflow-y-auto">
                    {categories.map((c) => (
                      <Link key={c.slug} to={`/category/${c.slug}`} className="px-3 py-2 rounded-lg hover:bg-emerald-50 text-sm text-slate-700 flex items-center gap-2 transition-colors">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                        {c.title}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/vip-concierge-booking" className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 transition-colors text-sm font-bold flex items-center gap-1">
              <Crown size={15} /> رزرو تشریفات VIP
            </Link>
            <Link to="/exporters-directory" className="px-4 py-2 rounded-lg hover:bg-navy-500 transition-colors text-sm font-medium">دایرکتوری صادرکنندگان</Link>
            <Link to="/blog" className="px-4 py-2 rounded-lg hover:bg-navy-500 transition-colors text-sm font-medium">بلاگ</Link>
            <Link to="/submit-inquiry" className="px-4 py-2 rounded-lg hover:bg-navy-500 transition-colors text-sm font-medium">استعلام خرید</Link>
            <Link to="/about-us" className="px-4 py-2 rounded-lg hover:bg-navy-500 transition-colors text-sm font-medium">درباره ما</Link>
            <Link to="/contact-us" className="px-4 py-2 rounded-lg hover:bg-navy-500 transition-colors text-sm font-medium">تماس</Link>
          </nav>

          <div className="hidden lg:block">
            <a href={SITE.whatsappLink} target="_blank" rel="noopener noreferrer" className="bg-emerald-500 hover:bg-emerald-400 px-5 py-2.5 rounded-xl text-sm font-bold flex items-center gap-2 transition-colors shadow-lg">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              واتساپ
            </a>
          </div>

          <button onClick={() => setOpen(!open)} className="lg:hidden p-2 hover:bg-navy-500 rounded-lg" aria-label="منو">
            {open ? <X /> : <Menu />}
          </button>
        </div>

        <form onSubmit={onSearch} className="hidden md:flex items-center gap-2 pb-3">
          <div className="relative flex-1">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 text-navy-200" size={18} />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجوی محصول، صادرکننده یا خدمت... (مثلا: سیب ارومیه، ون VIP، تریلر)"
              className="w-full bg-navy-500 text-white placeholder:text-navy-200 rounded-xl pr-10 pl-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
          </div>
          <button type="submit" className="bg-emerald-500 hover:bg-emerald-400 px-5 py-2.5 rounded-xl text-sm font-bold transition-colors">جستجو</button>
        </form>
      </div>

      {open && (
        <div className="lg:hidden bg-navy-600 border-t border-navy-500 animate-fade-in">
          <div className="px-4 py-4 space-y-1 max-h-[80vh] overflow-y-auto">
            <form onSubmit={onSearch} className="flex items-center gap-2 mb-3">
              <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="جستجو..." className="flex-1 bg-navy-500 text-white rounded-lg px-3 py-2 text-sm" />
              <button type="submit" className="bg-emerald-500 px-4 py-2 rounded-lg text-sm">جستجو</button>
            </form>
            <Link to="/" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-navy-500">خانه</Link>
            <Link to="/vip-concierge-booking" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg bg-emerald-500 text-center font-bold my-1">رزرو تشریفات VIP</Link>
            <Link to="/exporters-directory" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-navy-500">دایرکتوری صادرکنندگان</Link>
            <Link to="/blog" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-navy-500">بلاگ</Link>
            <Link to="/submit-inquiry" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-navy-500">استعلام خرید</Link>
            <Link to="/about-us" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-navy-500">درباره ما</Link>
            <Link to="/contact-us" onClick={() => setOpen(false)} className="block px-3 py-2.5 rounded-lg hover:bg-navy-500">تماس</Link>
            <div className="pt-3 border-t border-navy-500">
              <p className="text-xs text-navy-200 px-3 mb-2">دسته‌بندی محصولات</p>
              {categories.map((c) => (
                <Link key={c.slug} to={`/category/${c.slug}`} onClick={() => setOpen(false)} className="block px-3 py-2 rounded-lg hover:bg-navy-500 text-sm">• {c.title}</Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
