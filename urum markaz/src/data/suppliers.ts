export interface Supplier {
  id: string;
  name: string;
  nameEn: string;
  categorySlug: string;
  city: string;
  phone: string;
  whatsapp?: string;
  desc: string;
  verified: boolean;
  services: string[];
  established: number;
}

export const suppliers: Supplier[] = [
  // VIP Concierge — آکای ترید
  {
    id: 's1', name: 'آکای ترید - تشریفات بازرگانی ارومیه', nameEn: 'Akay Trade - Business Concierge',
    categorySlug: 'vip-business-concierge-urmia', city: 'ارومیه', phone: '09143403431', whatsapp: '989143403431',
    desc: 'بازوی تشریفات بازرگانی اروم مرکز؛ ارائه‌دهنده خدمات یکپارچه ون VIP، رزرو هتل، رستوران و مترجم برای هیئت‌های تجاری بین‌المللی.',
    verified: true, services: ['ون VIP', 'رزرو هتل', 'پذیرایی', 'مترجم', 'CIP فرودگاه'], established: 2015,
  },
  {
    id: 's1b', name: 'آکای ترید - ون VIP و حمل‌ونقل', nameEn: 'Akay Trade - VIP Van Transfer',
    categorySlug: 'vip-business-concierge-urmia', city: 'ارومیه', phone: '09143403431', whatsapp: '989143403431',
    desc: 'سرویس ون VIP اختصاصی آکای ترید با راننده مجرب دوزبانه، پذیرش CIP فرودگاه و ترانسفر هتل-کارخانه-مرز.',
    verified: true, services: ['ون لوکس', 'ون استاندارد', 'فول VIP', 'CIP فرودگاه'], established: 2015,
  },
  {
    id: 's1c', name: 'آکای ترید - رزرو هتل و اقامت', nameEn: 'Akay Trade - Hotel Booking',
    categorySlug: 'vip-business-concierge-urmia', city: 'ارومیه', phone: '09143403431', whatsapp: '989143403431',
    desc: 'رزرو سوئیت اجرایی، دلوکس و ریاستی در هتل‌های منتخب ارومیه با پذیرایی VIP و ترانسفر فرودگاه.',
    verified: true, services: ['سوئیت اجرایی', 'دلوکس', 'ریاستی', 'صبحانه VIP'], established: 2015,
  },
  {
    id: 's1d', name: 'آکای ترید - رستوران و پذیرایی', nameEn: 'Akay Trade - Restaurant & Catering',
    categorySlug: 'vip-business-concierge-urmia', city: 'ارومیه', phone: '09143403431', whatsapp: '989143403431',
    desc: 'رزرو رستوران‌های منتخب ارومیه، منوهای تشریفاتی کباب و بین‌المللی، لانچ باکس شرکتی و اتاق جلسات خصوصی.',
    verified: true, services: ['کباب تشریفاتی', 'منوی بین‌المللی', 'لانچ باکس', 'اتاق جلسات'], established: 2015,
  },
  {
    id: 's1e', name: 'آکای ترید - مترجم تجاری چندزبانه', nameEn: 'Akay Trade - Business Interpreter',
    categorySlug: 'vip-business-concierge-urmia', city: 'ارومیه', phone: '09143403431', whatsapp: '989143403431',
    desc: 'مترجم‌های حرفه‌ای مسلط به ترکی، عربی، کردی و انگلیسی برای جلسات تجاری، مذاکرات صادراتی و بازدید کارخانه.',
    verified: true, services: ['ترکی', 'عربی', 'کردی', 'انگلیسی', 'روسای'], established: 2015,
  },
  // Apples
  {
    id: 's2', name: 'صادرکننده سیب سرخ و گلدن آذربایجان', nameEn: 'Red & Golden Apple Exporter',
    categorySlug: 'urmia-export-apples', city: 'ارومیه', phone: '09141110022', whatsapp: '989141110022',
    desc: 'صادرکننده سیب سرخ و گلدن با گریدبندی نوری استاندارد، بسته‌بندی صادراتی و تحویل مرزی به عراق و کوردستان.',
    verified: true, services: ['گرید A', 'بسته‌بندی ۱۰/۱۸/۲۰', 'تحویل مرزی', 'تأییدیه بهداشت گیاهی'], established: 2008,
  },
  {
    id: 's2b', name: 'بسته‌بندی و سورتینگ سیب صادراتی', nameEn: 'Apple Sorting & Packing',
    categorySlug: 'urmia-export-apples', city: 'ارومیه', phone: '09141110033', whatsapp: '989141110033',
    desc: 'خط سورتینگ نوری و بسته‌بندی سیب صادراتی با گریدبندی دقیق و امکان بسته‌بندی طبق سفارش خریدار.',
    verified: true, services: ['سورتینگ نوری', 'بسته‌بندی سفارشی', 'گریدبندی', 'پالت‌بندی'], established: 2012,
  },
  // Trailer
  {
    id: 's3', name: 'سازنده نیم تریلر و تانکر آذربایجان', nameEn: 'Trailer & Tanker Manufacturer',
    categorySlug: 'trailer-manufacturing-urmia', city: 'ارومیه', phone: '09142220033', whatsapp: '989142220033',
    desc: 'سازنده انواع نیم تریلر کفی، تانکر سوخت و آب، تریلر یخچال‌دار با گارانتی بدنه ۱۲ ماه و امکان صادرات.',
    verified: true, services: ['نیم تریلر کفی', 'تانکر سوخت', 'یخچال‌دار', 'گارانتی ۱۲ ماه'], established: 2002,
  },
  {
    id: 's3b', name: 'سازنده تریلر کوله‌ای و کمپرسی', nameEn: 'Tipper & Curtain Trailer Builder',
    categorySlug: 'trailer-manufacturing-urmia', city: 'ارومیه', phone: '09142220044', whatsapp: '989142220044',
    desc: 'ساخت تریلر کوله‌ای (کورتین سایدر)، کمپرسی و تریلرهای خاص با مشخصات فنی سفارشی و صادرات به منطقه.',
    verified: true, services: ['کوله‌ای', 'کمپرسی', 'سفارشی', 'صادراتی'], established: 2005,
  },
  // Cement
  {
    id: 's4', name: 'تولید و صادرات سیمان سفید آذربایجان', nameEn: 'White Cement Producer & Exporter',
    categorySlug: 'white-cement-west-azerbaijan', city: 'ارومیه', phone: '09143330044', whatsapp: '989143330044',
    desc: 'تولید و صادرات سیمان سفید نوع یک با استاندارد ISO 9001 در بسته‌بندی کیسه‌ای و فله سیلویی.',
    verified: true, services: ['کیسه ۵۰ کیلو', 'فله سیلویی', 'ISO 9001', 'تحویل مرزی'], established: 1998,
  },
  // Tobacco
  {
    id: 's5', name: 'تأمین و صادرات توتون و خاک توتون', nameEn: 'Tobacco & Dust Supplier',
    categorySlug: 'tobacco-tobacco-dust', city: 'ارومیه', phone: '09144440055', whatsapp: '989144440055',
    desc: 'تأمین و صادرات توتون ویرجینیا و برلی و خاک توتون صنعتی با مجوز صادراتی برای بازارهای B2B.',
    verified: true, services: ['توتون ویرجینیا', 'توتون برلی', 'خاک توتون', 'مجوز صادراتی'], established: 2010,
  },
  // Honey
  {
    id: 's6', name: 'تولید و صادرات عسل طبیعی کوهستان', nameEn: 'Mountain Honey Producer',
    categorySlug: 'natural-honey-azerbaijan', city: 'ارومیه', phone: '09145550066', whatsapp: '989145550066',
    desc: 'تولید و صادرات عسل چهل‌گیاه و گون کوهستانی با تأییدیه آزمایشگاهی و بسته‌بندی صادراتی.',
    verified: true, services: ['عسل گون', 'عسل چهل‌گیاه', 'بره موم', 'تأییدیه آزمایشگاهی'], established: 2012,
  },
  // Grapes & Raisins
  {
    id: 's7', name: 'صادرکننده انگور و کشمای طلایی ارومیه', nameEn: 'Grapes & Raisins Exporter',
    categorySlug: 'urmia-grapes-raisins', city: 'ارومیه', phone: '09146660077', whatsapp: '989146660077',
    desc: 'صادرکننده انگور تازه و کشمای طلایی و تاریک با تأییدیه بهداشت گیاهی و بسته‌بندی صادراتی.',
    verified: true, services: ['انگور تازه', 'کشمش طلایی', 'کشمش تاریک', 'تأییدیه بهداشت'], established: 2009,
  },
  // Paints
  {
    id: 's8', name: 'تولید رنگ صنعتی و ساختمانی آذربایجان', nameEn: 'Industrial & Architectural Paint',
    categorySlug: 'paints-chemical-coatings', city: 'ارومیه', phone: '09147770088', whatsapp: '989147770088',
    desc: 'تولید رنگ‌های صنعتی، ساختمانی، اتومبیلی و رزین‌های اکریلیک و آلکید با استاندارد ISO.',
    verified: true, services: ['رنگ ساختمانی', 'رنگ صنعتی', 'رزین', 'پودر کاور'], established: 2005,
  },
  // Dried Fruits
  {
    id: 's9', name: 'تولید میوه خشک و چیپس میوه طبیعی', nameEn: 'Dried Fruits & Chips Producer',
    categorySlug: 'dried-fruits-urmia', city: 'ارومیه', phone: '09148880099', whatsapp: '989148880099',
    desc: 'تولید چیپس میوه و میوه خشک بدون افزودنی با خشک‌کردن صنعتی و بسته‌بندی صادراتی به اروپا.',
    verified: true, services: ['چیپس سیب', 'میوه خشک', 'بدون افزودنی', 'بسته‌بندی لوکس'], established: 2016,
  },
  // Herbal Distillates
  {
    id: 's10', name: 'تولید عرقیجات و معجون‌های سنتی', nameEn: 'Herbal Distillates Producer',
    categorySlug: 'herbal-distillates-urmia', city: 'ارومیه', phone: '09149990010', whatsapp: '989149990010',
    desc: 'تولید عرقیجات گیاهی طبیعی و معجون‌های سنتی با بسته‌بندی شیشه‌ای و تأییدیه بهداشت.',
    verified: false, services: ['عرق نعناع', 'معجون چهارگل', 'عرق گلاب', 'تأییدیه بهداشت'], established: 2014,
  },
  // Minerals
  {
    id: 's11', name: 'استخراج و صادرات سنگ‌های معدنی', nameEn: 'Mineral Stones Exporter',
    categorySlug: 'minerals-building-stones', city: 'ارومیه', phone: '09140001011', whatsapp: '989140001011',
    desc: 'استخراج و صادرات مرمر سفید، گرانیت طوسی و سنگ‌های تزئینی در قالب اسلب و تایل.',
    verified: true, services: ['مرمر سفید', 'گرانیت', 'اسلب', 'برش سفارشی'], established: 2007,
  },
  // Packaging Machinery
  {
    id: 's12', name: 'طراح و سازنده خطوط سورتینگ و بسته‌بندی', nameEn: 'Sorting & Packaging Line Builder',
    categorySlug: 'sorting-packaging-machinery', city: 'ارومیه', phone: '09140002012', whatsapp: '989140002012',
    desc: 'طراحی و ساخت خطوط سورتینگ نوری و بسته‌بندی خودکار با ظرفیت ۲ تا ۱۰ تن و نصب و آموزش.',
    verified: false, services: ['خط سورتینگ', 'بسته‌بندی', 'نصب و آموزش', 'گارانتی'], established: 2013,
  },
  // Petrochemicals
  {
    id: 's13', name: 'تأمین مواد شیمیایی و حلال‌های صنعتی', nameEn: 'Chemicals & Solvents Supplier',
    categorySlug: 'petrochemicals-west-azerbaijan', city: 'ارومیه', phone: '09140003013', whatsapp: '989140003013',
    desc: 'تأمین و صادرات مواد شیمیایی پایه، حلال‌های صنعتی و اسیدها با برگه ایمنی MSDS.',
    verified: true, services: ['مواد شیمیایی', 'حلال', 'اسید', 'MSDS'], established: 2006,
  },
];

export const getSuppliersByCategory = (slug: string) =>
  suppliers.filter((s) => s.categorySlug === slug);
