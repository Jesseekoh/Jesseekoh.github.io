import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
import preact from '@preact/preset-vite';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [preact(), tailwindcss()],
  server: {
    port: 3000
  },
  resolve: {
    alias: {
      react: 'preact/compat',
      'react-dom': 'preact/compat',
    },
  },
});
