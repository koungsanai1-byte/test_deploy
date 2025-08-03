import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
  base: "/test_deploy/", // ต้องตรงกับชื่อ repo
  plugins: [react()],
})
