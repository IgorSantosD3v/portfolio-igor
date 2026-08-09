import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Se for publicar em GitHub Pages num repositório (ex: usuario.github.io/portfolio),
  // troque a linha abaixo para: base: '/nome-do-repositorio/'
  base: './',
})
