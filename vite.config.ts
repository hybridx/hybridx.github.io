import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [tailwindcss()],
  resolve: {
    alias: {
      '@thundrex/web-components': new URL(
        './node_modules/@thundrex/web-components/dist-lib/web-components.js',
        import.meta.url
      ).pathname,
    },
  },
});
