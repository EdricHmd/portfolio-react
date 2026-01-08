import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import {pwa} from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react(), VitePWA({
      registerType: 'autoUpdate', // Tự động cập nhật khi có nội dung mới
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      manifest: {
        name: 'Minh Đạt Portfolio',
        short_name: 'Minh Đạt',
        description: 'Mô tả ngắn về ứng dụng React PWA',
        theme_color: '#ffffff',
        icons: [
          {
            src: 'logo.png', // Bạn phải chuẩn bị icon này trong thư mục public
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo.png', // Bạn phải chuẩn bị icon này trong thư mục public
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })]
})
