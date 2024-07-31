import path from 'node:path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import dts from 'vite-plugin-dts';
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';
import { name } from './package.json';

const formattedName = name.match(/[^/]+$/)?.[0] ?? name;
function resolveFilePath(file: string): string {
  return path.resolve(__dirname, file);
}

export default defineConfig({
  plugins: [react(), dts({ include: ['lib'] })],
  css: {
    preprocessorOptions: {
      css: {},
      scss: {},
    },
    modules: {
      localsConvention: 'camelCase',
      exportGlobals: true,
      generateScopedName: (name) => {
        return `ds-${name}`;
      },
    },
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolveFilePath('lib/main.ts'),
      name: formattedName,
      formats: ['es', 'umd'],
      fileName: (format) => `${formattedName}-${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react/jsx-runtime', 'react-dom', 'tailwindcss'],
      output: {
        globals: {
          react: 'React',
          'react/jsx-runtime': 'react/jsx-runtime',
          'react-dom': 'ReactDOM',
          tailwindcss: 'tailwindcss',
        },
      },
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});
