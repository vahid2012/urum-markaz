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
            <Route path="/category/:slug" element={<Category />} />
            <Route path="/vip-concierge-booking" element={<VipConciergeBooking />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogArticle />} />
            <Route path="/exporters-directory" element={<ExportersDirectory />} />
            <Route path="/submit-inquiry" element={<SubmitInquiry />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/contact-us" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppFab />
      </div>
    </BrowserRouter>
  );
}
