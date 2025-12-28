import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://chert.coin',
  output: 'static',
  integrations: [
    react(),
    tailwind({
      config: {
        theme: {
          extend: {
            colors: {
              'chert-blue': '#1E40AF',
              'quantum-gold': '#F59E0B',
              'silica-white': '#FAFAFA',
              'carbon-black': '#111827',
              'speed-blue': '#3B82F6',
              'science-green': '#10B981',
              'security-purple': '#7C3AED'
            },
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              mono: ['JetBrains Mono', 'monospace']
            },
            animation: {
              'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
              'gradient': 'gradient 8s ease infinite',
              'float': 'float 6s ease-in-out infinite'
            },
            keyframes: {
              gradient: {
                '0%, 100%': { 'background-position': '0% 50%' },
                '50%': { 'background-position': '100% 50%' }
              },
              float: {
                '0%': { transform: 'translateY(0px)' },
                '50%': { transform: 'translateY(-20px)' },
                '100%': { transform: 'translateY(0px)' }
              }
            }
          }
        }
      }
    })
  ],
  vite: {
    optimizeDeps: {
      include: ['three', 'framer-motion', 'chart.js']
    }
  }
});