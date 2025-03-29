import { defineConfig } from 'vite'
import react from '@vite.js/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
plugins: 
    [react(),
    tailwindcss()
    ],
    
})