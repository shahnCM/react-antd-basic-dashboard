import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImp from 'vite-plugin-imp';

export default defineConfig({
  plugins: [
    react(),
    vitePluginImp({
      libList: [
        {
          libName: 'antd',
          // style: (name) => `antd/es/${name}/style/index.css`,
        },
      ],
    }),
  ],
  server: {
    port: 8000,
    host: '0.0.0.0'
  },
});
