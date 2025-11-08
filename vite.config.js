import { defineConfig } from 'vite';

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'src/assets/js/main.js'
      }
    }
  },
  server: {
    port: 5173
  }
});
