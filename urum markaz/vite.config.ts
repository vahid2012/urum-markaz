import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'
// ایمپورت کردن دیتای دسته‌بندی‌ها از فایل شما
import { categories } from './src/data/categories' 

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://www.urummarkaz.ir',
      // این خط لیست تمام دسته‌بندی‌ها را به صورت خودکار به سایت‌مپ اضافه می‌کند
      dynamicRoutes: categories.map((cat) => `/category/${cat.slug}`),
    }),
  ],
})
