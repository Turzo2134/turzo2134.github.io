import { defineConfig } from 'astro/config';

export default defineConfig({
  // Enable SSR
  output: 'static',
  
  // Vite config
  vite: {
    ssr: {
      external: ['svgo']
    }
  }
});