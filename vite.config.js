import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 記得把你的 GitHub repo 名稱改對 👇
export default defineConfig({
  base: '/vibeCoding/',
  plugins: [react()],
})
