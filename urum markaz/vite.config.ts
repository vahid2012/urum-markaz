import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
import { categories } from './src/data/categories'

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      // نسخهٔ بدون www — چون ریدایرکت www → بدون www را انجام داده‌ایم
      hostname: 'https://urummarkaz.ir',

      // صفحات ثابت — همهٔ روت‌های اصلی که در <Routes> دارید
      staticRoutes: [
        { url: '/', priority: 1.0 },
        { url: '/about', priority: 0.8 },
        { url: '/services', priority: 0.8 },
        { url: '/contact', priority: 0.5 },
      ],

      // صفحات داینامیک — با پیشوند /products/ (نه /category/)
      dynamicRoutes: categories.map((cat) => `/products/${cat.slug}`),

      // تنظیمات خروجی
      outDir: 'dist',
      generateRobotsTxt: false, // robots.txt را دستی در public/ بسازید
      readable: true,           // XML را خوانا بساز (برای دیباگ)
      exclude: ['/404', '/admin/*'], // هر مسیری که نباید در سایت‌مپ باشد
    }),
  ],
})
