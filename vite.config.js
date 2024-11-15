import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['cmdk'], // Ensure `cmdk` is bundled correctly
  },
  server: {
    port: 3000, // You can change the port as needed
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
