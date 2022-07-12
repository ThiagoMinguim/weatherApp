import { defineConfig } from 'vite'
import * as path from 'path'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      { find: '@/public', replacement: path.resolve(__dirname, '/public') },
      { find: '@', replacement: path.resolve(__dirname, '/src') }
    ]
  },

  plugins: [react()]
})
