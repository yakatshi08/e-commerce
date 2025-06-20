import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/e-commerce/', // ✅ Configuration correcte pour votre repository
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});