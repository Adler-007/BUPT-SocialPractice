import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    port: 3000,
    open: true,
    host: "localhost",
  },
  // 关键配置 - 确保输出目录为 dist
  build: {
    outDir: "dist", // 明确设置输出目录为 dist
    assetsDir: "assets", // 静态资源目录
    emptyOutDir: true, // 构建前清空输出目录
  },
});
