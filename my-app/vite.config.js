import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindVite from '@tailwindcss/vite'; // keep only if you installed @tailwindcss/vite

export default defineConfig({
  plugins: [
    react(),
    tailwindVite() // remove this line if you don't have @tailwindcss/vite installed
  ],
  optimizeDeps: {
    // prevents Vite/esbuild from trying to pre-bundle lightningcss
    exclude: ['lightningcss']
  },
  ssr: {
    // prevents SSR builds from trying to externalize/bundle lightningcss
    noExternal: ['lightningcss']
  }
});
