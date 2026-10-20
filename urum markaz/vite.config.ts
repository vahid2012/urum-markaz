import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Sitemap from 'vite-plugin-sitemap'

export default defineConfig({
  plugins: [
    react(),
    Sitemap({
      hostname: 'https://www.urummarkaz.ir', // دامنه اصلی شما
      // مسیرهایی که در سایت دارید را اینجا بنویسید:
      dynamicRoutes: [
        '/',
        '/about',
        '/services',
        '/contact'
      ],
      changefreq: 'weekly',
      priority: 0.7,
    })
  ],
})
