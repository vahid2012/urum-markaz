import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import Home from '@/pages/Home';
import Category from '@/pages/Category';
import VipConciergeBooking from '@/pages/VipConciergeBooking';
import BlogList from '@/pages/BlogList';
import BlogArticle from '@/pages/BlogArticle';
import About from '@/pages/About';
import Contact from '@/pages/Contact';
import ExportersDirectory from '@/pages/ExportersDirectory';
import SubmitInquiry from '@/pages/SubmitInquiry';
import NotFound from '@/pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-slate-100">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            {/* محصولات — جایگزین /category/:slug */}
            <Route path="/products/:slug" element={<Category />} />

            {/* خدمات — جایگزین /vip-concierge-booking */}
            <Route path="/services/vip-concierge-booking" element={<VipConciergeBooking />} />

            {/* بلاگ */}
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />

            {/* صادرکنندگان — جایگزین /exporters-directory */}
            <Route path="/exporters" element={<ExportersDirectory />} />

            {/* فرم استعلام — خارج از ایندکس */}
            <Route path="/inquiry" element={<SubmitInquiry />} />

            {/* صفحات ثابت — جایگزین /about-us و /contact-us */}
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </BrowserRouter>
  );
}
