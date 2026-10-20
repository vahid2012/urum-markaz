export const SITE = {
  name: 'اروم مرکز',
  nameEn: 'Urummarkaz',
  domain: 'Urummarkaz.ir',
  url: 'https://urummarkaz.ir',
  whatsapp: '989143403431',
  whatsappLink: 'https://wa.me/989143403431',
  mobile: '09143403431',
  landline: '04433465524',
  email: 'sanat.abr@gmail.com',
  address: 'ارومیه، خیابان آزادگان، خیابان تیلا، دفتر اروم مرکز',
  conciergeBrand: 'آکای ترید',
  partners: [
    { name: 'تورویزا', url: 'https://tourviza.ir' },
    { name: 'شanghai شهر', url: 'https://shanghaicity.ir' },
    { name: 'هتل ارومیه', url: 'https://hotelurmia.ir' },
    { name: 'هتل اربیل', url: 'https://hotelerbil.ir' },
    { name: 'سرویس ۳۶۵', url: 'https://service365.ir' },
    { name: 'سرویس اورژانس', url: 'https://service-sos.ir' },
    { name: 'امداد خودرو سمنان', url: 'https://emdadkhodro-semnan.ir' },
    { name: 'اربیل سیتی', url: 'https://erbilcity.ir' },
  ],
};

export const stats = [
  { label: 'صادرکننده تأیید شده', value: 320, suffix: '+' },
  { label: 'دسته محصولات و خدمات', value: 13, suffix: '' },
  { label: 'بازار صادراتی فعال', value: 12, suffix: '' },
  { label: 'سال تجربه تجاری', value: 15, suffix: '' },
];

// ون VIP — بدون نام برند، فقط رده‌بندی امکانات
export const vipVans = [
  {
    id: 'van-class-luxury',
    name: 'ون VIP رده لوکس',
    capacity: 7,
    desc: 'صندلی‌های چرمی، تهویه مستقل، اینترنت همره، نوشیدنی پذیرایی، راننده مجرب دوزبانه',
    price: 2500000,
  },
  {
    id: 'van-class-standard',
    name: 'ون VIP رده استاندارد',
    capacity: 9,
    desc: 'ظرفیت بیشتر، صندلی راحت، وای‌فای، آب‌و‌نوشیدنی، مناسب هیئت‌های متوسط',
    price: 1800000,
  },
  {
    id: 'van-class-fullvip',
    name: 'ون فول VIP اختصاصی',
    capacity: 6,
    desc: 'صندلی ماساژور، بار اختصاصی، مترجم هم‌مرحله، پذیرایی گرم، سیستم صوتی',
    price: 3200000,
  },
];

export const hotelRooms = [
  { id: 'executive-suite', name: 'سوئیت اجرایی', desc: ' اتاق ۶۰ متر، پذیرایی VIP ورود، اینترنت پرسرعت، صبحانه بین‌المللی' },
  { id: 'deluxe-twin', name: 'دلوکس دو تخته', desc: 'دو تخت مجزا، مناسب هیئت تجاری، ایستگاه کاری، اینترنت پرسرعت' },
  { id: 'presidential-suite', name: 'سوئیت ریاستی', desc: 'سالن جلسات خصوصی، اتاق پذیرایی، پنت‌هاوس با نمای شهر' },
];

export const restaurantMenus = [
  { id: 'urmia-kebab-vip', name: 'منوی کباب تشریفاتی ارومیه', desc: 'چنجه، برگ، جوجه، شیشلیک با برنج زعفرانی و مخلفات سنتی' },
  { id: 'international-menu', name: 'منوی بین‌المللی', desc: 'استیک، پاستا، ساشیمی، دسر فرنگی و سالاد بار' },
  { id: 'corporate-lunchbox', name: 'لانچ باکس شرکتی', desc: 'زرشک پلو با مرغ/خورشت، سالاد، نوشیدنی — مناسب جلسات کاری' },
  { id: 'traditional-urmia', name: 'منوی غذاهای سنتی ارومیه', desc: 'کوفته ارومیه، دوشاب با نان محلی، آش محلی و سبزی‌جات صحرایی' },
  { id: 'vegetarian-menu', name: 'منوی گیاهی و رژیمی', desc: 'سالاد ارگانیک، خوراک سبزیجات، دسر بدون شکر' },
  { id: 'tea-coffee-break', name: 'پذیرایی جلسات (چای و قهوه)', desc: 'قهوه اسپرسو، چای سنتی، میوه فصل، شیرینی خشک — مناسب استراحت جلسه' },
];

export const languages = [
  { id: 'fa', label: 'فارسی', short: 'FA' },
  { id: 'en', label: 'English', short: 'EN' },
  { id: 'tr', label: 'Türkçe', short: 'TR' },
  { id: 'ar', label: 'العربية', short: 'AR' },
  { id: 'ku', label: 'کوردی', short: 'KU' },
];
