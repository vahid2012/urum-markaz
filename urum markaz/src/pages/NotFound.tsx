import { Link } from 'react-router-dom';
import { Home as HomeIcon, ArrowLeft } from 'lucide-react';
import Seo from '@/components/Seo';

export default function NotFound() {
  return (
    <>
      <Seo title="صفحه یافت نشد | اروم مرکز" description="صفحه مورد نظر یافت نشد." path="/404" />
      <div className="max-w-2xl mx-auto px-4 py-32 text-center">
        <div className="text-7xl font-extrabold text-navy-600">۴۰۴</div>
        <h1 className="text-2xl font-bold text-navy-600 mt-4">صفحه مورد نظر یافت نشد</h1>
        <p className="text-slate-500 mt-3">متأسفیم! صفحه‌ای که دنبال آن بودید وجود ندارد یا منتقل شده است.</p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <Link to="/" className="bg-navy-600 hover:bg-navy-500 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors">
            <HomeIcon size={18} /> بازگشت به خانه
          </Link>
          <Link to="/exporters-directory" className="bg-emerald-500 hover:bg-emerald-400 text-white px-5 py-3 rounded-xl font-bold flex items-center gap-2 transition-colors">
            دایرکتوری صادرکنندگان <ArrowLeft size={16} />
          </Link>
        </div>
      </div>
    </>
  );
}
