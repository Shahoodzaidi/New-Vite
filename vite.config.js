import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/New-Vite/",
  plugins: [react()],
  server:{
    host:true
  }
})
