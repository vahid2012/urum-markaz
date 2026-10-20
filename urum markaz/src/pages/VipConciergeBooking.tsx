import { useState } from 'react';
import {
  Crown, Car, Hotel, UtensilsCrossed, Check, ChevronLeft, ChevronRight,
  User, Calendar, MessageCircle, Star, Plane, Languages,
} from 'lucide-react';
import Seo from '@/components/Seo';
import BrandedImage from '@/components/BrandedImage';
import { vipVans, hotelRooms, restaurantMenus, SITE } from '@/data/site';

const steps = [
  { id: 1, label: 'ون و حمل‌ونقل', icon: Car },
  { id: 2, label: 'هتل و اقامت', icon: Hotel },
  { id: 3, label: 'رستوران و پذیرایی', icon: UtensilsCrossed },
  { id: 4, label: 'اطلاعات و ارسال', icon: User },
];

const cipServices = ['پذیرش سالن CIP', 'تسریع گمرک و ویزا', 'حمل بار', 'نوشیدنی و استراحت', 'ترانسفر مستقیم به هتل'];
const interpreterLangs = ['بدون مترجم', 'ترکی', 'عربی', 'کردی', 'انگلیسی', 'روسای'];

export default function VipConciergeBooking() {
  const [step, setStep] = useState(1);

  const [van, setVan] = useState<string>('');
  const [vanCount, setVanCount] = useState(1);
  const [transferType, setTransferType] = useState<string[]>([]);
  const [language, setLanguage] = useState<string>('');
  const [cipServicesSel, setCipServicesSel] = useState<string[]>([]);

  const [room, setRoom] = useState<string>('');
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [amenities, setAmenities] = useState<string[]>([]);

  const [menu, setMenu] = useState<string[]>([]);
  const [restDate, setRestDate] = useState('');
  const [people, setPeople] = useState(1);
  const [meetingRoom, setMeetingRoom] = useState(false);

  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');

  const toggle = (arr: string[], set: (v: string[]) => void, val: string) =>
    set(arr.includes(val) ? arr.filter((x) => x !== val) : [...arr, val]);

  const canNext = () => {
    if (step === 1) return van !== '';
    if (step === 2) return room !== '' && checkIn && checkOut;
    if (step === 3) return menu.length > 0;
    if (step === 4) return name && phone;
    return true;
  };

  const buildMessage = () => {
    const vanObj = vipVans.find((v) => v.id === van);
    const roomObj = hotelRooms.find((r) => r.id === room);
    const menus = restaurantMenus.filter((m) => menu.includes(m.id)).map((m) => m.name);
    return [
      `*درخواست رزرو تشریفات VIP - آکای ترید (اروم مرکز)*`,
      ``,
      `*۱. ون و حمل‌ونقل:*`,
      `نوع ون: ${vanObj?.name || '-'}`,
      `تعداد روز: ${vanCount}`,
      `نوع سرویس: ${transferType.join('، ') || '-'}`,
      `مترجم: ${language || 'بدون مترجم'}`,
      `پذیرش CIP: ${cipServicesSel.join('، ') || 'بدون CIP'}`,
      ``,
      `*۲. هتل و اقامت:*`,
      `نوع اتاق: ${roomObj?.name || '-'}`,
      `تاریخ ورود: ${checkIn || '-'}`,
      `تاریخ خروج: ${checkOut || '-'}`,
      `تعداد مهمان: ${guests}`,
      `امکانات: ${amenities.join('، ') || 'استاندارد'}`,
      ``,
      `*۳. رستوران و پذیرایی:*`,
      `منو: ${menus.join('، ') || '-'}`,
      `تاریخ: ${restDate || '-'}`,
      `تعداد افراد: ${people}`,
      `اتاق جلسات خصوصی: ${meetingRoom ? 'بله' : 'خیر'}`,
      ``,
      `*اطلاعات تماس:*`,
      `نام: ${name}`,
      `شرکت: ${company || '-'}`,
      `تلفن: ${phone}`,
    ].join('\n');
  };

  const submit = () => {
    const msg = buildMessage();
    window.open(`${SITE.whatsappLink}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "VIP Business Concierge Booking - آکای ترید - Urmia",
    serviceType: "VIP Concierge, Van Transfer, Hotel, Catering & Interpreter",
    provider: { "@type": "Organization", name: "آکای ترید - اروم مرکز" },
    areaServed: "Urmia, West Azerbaijan",
    url: `${SITE.url}/vip-concierge-booking`,
  };

  const SubServiceCard = ({ icon: Icon, title, items }: { icon: React.ComponentType<{ size?: number; className?: string }>; title: string; items: string[] }) => (
    <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
          <Icon size={20} className="text-emerald-600" />
        </div>
        <h3 className="font-bold text-navy-600 text-sm">{title}</h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
        {items.map((it) => (
          <div key={it} className="flex items-center gap-1.5 text-xs text-slate-600">
            <Check size={13} className="text-emerald-500 shrink-0" /> {it}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <Seo
        title="رزرو تشریفات VIP ارومیه | آکای ترید - ون VIP، هتل، رستوران و مترجم"
        description="فرم رزرو هوشمند آنلاین تشریفات بازرگانی آکای ترید در ارومیه: پذیرش CIP، ون VIP، رزرو هتل ۵ ستاره، رستوران اختصاصی و مترجم. درخواست مستقیم در واتساپ ارسال می‌شود."
        keywords="رزرو ون VIP ارومیه, رزرو هتل ارومیه, تشریفات بازرگانی, آکای ترید, رستوران VIP, مترجم تجاری, CIP فرودگاه"
        image="https://images.pexels.com/photos/17455629/pexels-photo-17455629.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        path="/vip-concierge-booking"
        jsonLd={jsonLd}
        type="service"
      />

      {/* HERO */}
      <section className="relative h-56 flex items-center overflow-hidden">
        <BrandedImage src="https://images.pexels.com/photos/39416591/pexels-photo-39416591.png?auto=compress&cs=tinysrgb&h=650&w=940" alt="ون VIP آکای ترید ارومیه" className="absolute inset-0 w-full h-full" />
        <div className="absolute inset-0 hero-overlay" />
        <div className="relative max-w-7xl mx-auto px-4 w-full">
          <span className="inline-flex items-center gap-2 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold mb-3">
            <Crown size={14} /> آکای ترید | تشریفات بازرگانی VIP
          </span>
          <h1 className="text-2xl md:text-4xl font-extrabold text-white">رزرو هوشمند تشریفات، ون VIP، هتل و رستوران ارومیه</h1>
          <p className="text-navy-100 mt-2 text-sm md:text-base">درخواست خود را در ۴ مرحله انتخاب کرده و مستقیم در واتساپ ارسال کنید.</p>
        </div>
      </section>

      {/* SUB-SERVICES OVERVIEW */}
      <section className="max-w-7xl mx-auto px-4 py-10">
        <div className="text-center mb-8">
          <h2 className="text-xl md:text-2xl font-bold text-navy-600">خدمات آکای ترید در ۵ بخش تخصصی</h2>
          <p className="text-sm text-slate-500 mt-2">هر بخش را می‌توانید جداگانه یا به‌صورت پکیج یکپارچه رزرو کنید</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <SubServiceCard icon={Plane} title="پذیرش CIP فرودگاه" items={cipServices} />
          <SubServiceCard icon={Car} title="ون VIP و حمل‌ونقل" items={vipVans.map((v) => v.name)} />
          <SubServiceCard icon={Hotel} title="رزرو هتل ۵ ستاره" items={hotelRooms.map((r) => r.name)} />
          <SubServiceCard icon={UtensilsCrossed} title="رستوران و پذیرایی" items={restaurantMenus.slice(0, 4).map((m) => m.name)} />
          <SubServiceCard icon={Languages} title="مترجم هم‌مرحله" items={interpreterLangs.slice(1)} />
          <SubServiceCard icon={Crown} title="پکیج کامل VIP" items={['ون + هتل + رستوران + مترجم + CIP']} />
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* STEPS */}
        <div className="flex items-center justify-between mb-10 bg-white rounded-2xl p-4 shadow-sm overflow-x-auto">
          {steps.map((s, i) => (
            <div key={s.id} className="flex items-center flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${step >= s.id ? 'bg-emerald-500 text-white' : 'bg-slate-100 text-slate-400'}`}>
                  {step > s.id ? <Check size={18} /> : <s.icon size={18} />}
                </div>
                <span className={`text-xs font-bold truncate ${step >= s.id ? 'text-navy-600' : 'text-slate-400'}`}>{s.label}</span>
              </div>
              {i < steps.length - 1 && <div className={`h-1 w-6 md:w-12 rounded mx-1 ${step > s.id ? 'bg-emerald-500' : 'bg-slate-200'}`} />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 min-h-[400px]">
          {/* STEP 1: VAN + CIP + INTERPRETER */}
          {step === 1 && (
            <div className="animate-fade-in space-y-6">
              <div>
                <h2 className="text-xl font-bold text-navy-600 mb-1">انتخاب ون VIP، CIP و مترجم</h2>
                <p className="text-sm text-slate-500">آکای ترید ون‌های VIP را در سه رده با راننده مجرب ارائه می‌دهد.</p>
              </div>

              {/* VAN */}
              <div>
                <label className="block text-sm font-bold text-navy-600 mb-2 flex items-center gap-1"><Car size={15} /> انتخاب ون VIP</label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {vipVans.map((v) => (
                    <button key={v.id} onClick={() => setVan(v.id)} className={`text-right rounded-2xl border-2 p-4 transition-all ${van === v.id ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-emerald-300'}`}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-bold text-navy-600 text-sm">{v.name}</span>
                        {van === v.id && <Check size={16} className="text-emerald-500" />}
                      </div>
                      <p className="text-xs text-slate-500 mb-3">{v.desc}</p>
                      <div className="flex items-center justify-between text-xs">
                        <span className="bg-slate-100 px-2 py-1 rounded">ظرفیت: {v.capacity} نفر</span>
                        <span className="font-bold text-emerald-600" dir="ltr">{v.price.toLocaleString('fa-IR')} ت</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy-600 mb-2">تعداد روز نیاز به ون</label>
                <input type="number" min={1} max={30} value={vanCount} onChange={(e) => setVanCount(Math.max(1, +e.target.value))} className="w-full md:w-40 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>

              {/* TRANSFER TYPE */}
              <div>
                <label className="block text-sm font-bold text-navy-600 mb-2">نوع سرویس حمل‌ونقل</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['پذیرش CIP فرودگاه', 'ترانسفر هتل-کارخانه', 'بازدید کارخانه', 'انتخاب شهری'].map((t) => (
                    <button key={t} onClick={() => toggle(transferType, setTransferType, t)} className={`text-xs px-3 py-2.5 rounded-lg border transition-colors ${transferType.includes(t) ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300'}`}>{t}</button>
                  ))}
                </div>
              </div>

              {/* CIP */}
              <div>
                <label className="block text-sm font-bold text-navy-600 mb-2 flex items-center gap-1"><Plane size={15} /> پذیرش CIP فرودگاه (اختیاری)</label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {cipServices.map((c) => (
                    <button key={c} onClick={() => toggle(cipServicesSel, setCipServicesSel, c)} className={`text-xs px-3 py-2.5 rounded-lg border transition-colors ${cipServicesSel.includes(c) ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300'}`}>{c}</button>
                  ))}
                </div>
              </div>

              {/* INTERPRETER */}
              <div>
                <label className="block text-sm font-bold text-navy-600 mb-2 flex items-center gap-1"><Languages size={15} /> مترجم هم‌مرحله (اختیاری)</label>
                <div className="grid grid-cols-2 md:grid-cols-6 gap-2">
                  {interpreterLangs.map((l) => (
                    <button key={l} onClick={() => setLanguage(l)} className={`text-xs px-3 py-2.5 rounded-lg border transition-colors ${language === l ? 'bg-navy-600 text-white border-navy-600' : 'bg-white text-slate-600 border-slate-200 hover:border-navy-300'}`}>{l}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 2: HOTEL */}
          {step === 2 && (
            <div className="animate-fade-in space-y-6">
              <div>
                <h2 className="text-xl font-bold text-navy-600 mb-1 flex items-center gap-2"><Hotel size={20} /> رزرو هتل در ارومیه</h2>
                <p className="text-sm text-slate-500">هتل‌های منتخب ۵ ستاره با امکانات VIP — هماهنگ شده توسط آکای ترید.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {hotelRooms.map((r) => (
                  <button key={r.id} onClick={() => setRoom(r.id)} className={`text-right rounded-2xl border-2 p-4 transition-all ${room === r.id ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-emerald-300'}`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-bold text-navy-600">{r.name}</span>
                      {room === r.id && <Check size={16} className="text-emerald-500" />}
                    </div>
                    <p className="text-xs text-slate-500">{r.desc}</p>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-navy-600 mb-2 flex items-center gap-1"><Calendar size={14} /> تاریخ ورود</label>
                  <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-600 mb-2 flex items-center gap-1"><Calendar size={14} /> تاریخ خروج</label>
                  <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-navy-600 mb-2">تعداد مهمان</label>
                <input type="number" min={1} max={20} value={guests} onChange={(e) => setGuests(Math.max(1, +e.target.value))} className="w-full md:w-40 border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
              </div>

              <div>
                <label className="block text-sm font-bold text-navy-600 mb-2">امکانات VIP (اختیاری)</label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {['پذیرایی ورود', 'ترانسفر فرودگاه', 'صبحانه VIP', 'اینترنت پرسرعت'].map((a) => (
                    <button key={a} onClick={() => toggle(amenities, setAmenities, a)} className={`text-xs px-3 py-2.5 rounded-lg border transition-colors ${amenities.includes(a) ? 'bg-emerald-500 text-white border-emerald-500' : 'bg-white text-slate-600 border-slate-200 hover:border-emerald-300'}`}>{a}</button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* STEP 3: RESTAURANT */}
          {step === 3 && (
            <div className="animate-fade-in space-y-6">
              <div>
                <h2 className="text-xl font-bold text-navy-600 mb-1 flex items-center gap-2"><UtensilsCrossed size={20} /> رستوران و پذیرایی اختصاصی</h2>
                <p className="text-sm text-slate-500">رزرو رستوران منتخب و پیش‌سفارش منو — توسط آکای ترید.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {restaurantMenus.map((m) => (
                  <button key={m.id} onClick={() => toggle(menu, setMenu, m.id)} className={`text-right rounded-2xl border-2 p-4 transition-all ${menu.includes(m.id) ? 'border-emerald-500 bg-emerald-50' : 'border-slate-200 hover:border-emerald-300'}`}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-bold text-navy-600">{m.name}</span>
                      {menu.includes(m.id) && <Check size={16} className="text-emerald-500" />}
                    </div>
                    <p className="text-xs text-slate-500">{m.desc}</p>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-navy-600 mb-2 flex items-center gap-1"><Calendar size={14} /> تاریخ پذیرایی</label>
                  <input type="date" value={restDate} onChange={(e) => setRestDate(e.target.value)} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-600 mb-2">تعداد افراد</label>
                  <input type="number" min={1} max={100} value={people} onChange={(e) => setPeople(Math.max(1, +e.target.value))} className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>
              </div>

              <label className="flex items-center gap-3 cursor-pointer bg-slate-50 rounded-xl p-4">
                <input type="checkbox" checked={meetingRoom} onChange={(e) => setMeetingRoom(e.target.checked)} className="w-5 h-5 accent-emerald-500" />
                <div>
                  <span className="font-bold text-navy-600 text-sm">رزرو اتاق جلسات خصوصی</span>
                  <p className="text-xs text-slate-500">سالن جلسات مجهز در رستوران برای مذاکرات تجاری</p>
                </div>
              </label>
            </div>
          )}

          {/* STEP 4: INFO */}
          {step === 4 && (
            <div className="animate-fade-in space-y-6">
              <div>
                <h2 className="text-xl font-bold text-navy-600 mb-1">اطلاعات تماس و ارسال درخواست</h2>
                <p className="text-sm text-slate-500">درخواست شما در واتساپ آکای ترید ارسال می‌شود.</p>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-bold text-navy-600 mb-2">نام و نام خانوادگی *</label>
                  <input value={name} onChange={(e) => setName(e.target.value)} placeholder="نام شما" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-600 mb-2">نام شرکت (اختیاری)</label>
                  <input value={company} onChange={(e) => setCompany(e.target.value)} placeholder="نام شرکت یا هیئت تجاری" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400" />
                </div>
                <div>
                  <label className="block text-sm font-bold text-navy-600 mb-2">شماره تماس / واتساپ *</label>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="مثال: 09143403431" dir="ltr" className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 text-left" />
                </div>
              </div>

              {/* SUMMARY */}
              <div className="bg-slate-50 rounded-2xl p-5 space-y-3">
                <h3 className="font-bold text-navy-600 flex items-center gap-2"><Star size={16} className="text-emerald-500" /> خلاصه رزرو آکای ترید</h3>
                <div className="text-sm text-slate-600 space-y-1">
                  <p><b>ون:</b> {vipVans.find((v) => v.id === van)?.name || '-'} × {vanCount} روز</p>
                  <p><b>سرویس:</b> {transferType.join('، ') || '-'}</p>
                  <p><b>CIP:</b> {cipServicesSel.join('، ') || 'بدون CIP'} | مترجم: {language || 'بدون مترجم'}</p>
                  <p><b>هتل:</b> {hotelRooms.find((r) => r.id === room)?.name || '-'} ({checkIn || '-'} تا {checkOut || '-'}) - {guests} مهمان</p>
                  <p><b>امکانات هتل:</b> {amenities.join('، ') || 'استاندارد'}</p>
                  <p><b>رستوران:</b> {restaurantMenus.filter((m) => menu.includes(m.id)).map((m) => m.name).join('، ') || '-'} - {people} نفر{meetingRoom ? ' + اتاق جلسات' : ''}</p>
                </div>
              </div>

              <button onClick={submit} disabled={!canNext()} className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-300 text-white py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-colors shadow-lg">
                <MessageCircle size={20} /> ارسال درخواست در واتساپ
              </button>
              <p className="text-center text-xs text-slate-400">با کلیک روی دکمه، پیام آماده شده در واتساپ 09143403431 باز می‌شود.</p>
            </div>
          )}

          {/* NAV */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-100">
            <button onClick={() => setStep(Math.max(1, step - 1))} disabled={step === 1} className="flex items-center gap-1 text-sm text-slate-500 disabled:opacity-40 hover:text-navy-600 transition-colors">
              <ChevronRight size={16} /> مرحله قبل
            </button>
            <span className="text-xs text-slate-400">مرحله {step} از 4</span>
            {step < 4 ? (
              <button onClick={() => setStep(Math.min(4, step + 1))} disabled={!canNext()} className="flex items-center gap-1 bg-navy-600 hover:bg-navy-500 disabled:bg-slate-300 text-white px-5 py-2 rounded-lg text-sm font-bold transition-colors">
                مرحله بعد <ChevronLeft size={16} />
              </button>
            ) : (
              <span className="text-xs text-emerald-600 font-bold">آماده ارسال</span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
