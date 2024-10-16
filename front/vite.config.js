import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
// import fs from "fs"

export default defineConfig({
  plugins: [react(), svgr()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "src/styles/sasss/style.scss";
        `,
      },
    },
  },
  // server: {
  //   port: 7163,
  //   https: {
  //     key: fs.readFileSync('localhost-key.pem'),
  //     cert: fs.readFileSync('localhost-cert.pem'),
  //   },
  //   proxy: {
  //     '/api': {
  //       target: 'https://localhost:7163',
  //       changeOrigin: true,
  //       secure: false,
  //       rewrite: (path) => path.replace(/^\/api/, '')
  //     }
  //   }
  // },
});
