import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Cho phép truy cập từ tất cả IP
    port: 5173, // Port mặc định của Vite
    strictPort: false, // Tự động tìm port khác nếu 5173 bị chiếm
    open: true, // Tự động mở browser
    cors: true, // Cho phép CORS
    hmr: {
      host: "localhost", // Hot Module Replacement host
    },
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    strictPort: false,
    open: true,
  },
});
