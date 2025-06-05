import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src') // 设置@别名指向src目录
    }
  },
  base: './',
  // 开启局域网调试
  server: {
    host: '0.0.0.0',
    port: 3000, // 可选，指定端口号
    strictPort: true // 可选，如果端口被占用则退出
  }
})
