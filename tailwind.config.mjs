import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary brand colors
        'void': '#0a0a0f',
        'obsidian': '#111118',
        'graphite': '#1a1a24',
        'slate': '#252532',
        'ash': '#3a3a4a',
        'silver': '#8a8a9a',
        'pearl': '#e8e8f0',
        'snow': '#ffffff',
        
        // Accent colors
        'quantum': '#fbbf24',
        'quantum-bright': '#fcd34d',
        'quantum-glow': '#f59e0b',
        
        'silica': '#3b82f6',
        'silica-bright': '#60a5fa',
        'silica-glow': '#2563eb',
        
        'aurora': '#22c55e',
        'aurora-bright': '#4ade80',
        
        'nebula': '#a855f7',
        'nebula-bright': '#c084fc',

        // Legacy colors (for blog compatibility)
        'chert-blue': '#1E40AF',
        'quantum-gold': '#F59E0B',
        'silica-white': '#FAFAFA',
        'silica-light': '#f8fafc',
        'silica-dark': '#111827',
        'carbon-black': '#111827',
        'speed-blue': '#3B82F6',
        'science-green': '#10B981',
        'security-purple': '#7C3AED',
        'success-green': '#22c55e',
        'code-bg': '#1a1a2e',
        'code-text': '#e8e8f0',
      },
      fontFamily: {
        display: ['Space Grotesk', ...fontFamily.sans],
        sans: ['Inter', ...fontFamily.sans],
        mono: ['JetBrains Mono', ...fontFamily.mono]
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
        'gradient': 'gradient 8s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll': 'scroll 20s linear infinite',
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
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
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' }
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #1E40AF 0%, #F59E0B 100%)',
        'card-gradient': 'linear-gradient(135deg, #3B82F6 0%, #1E40AF 100%)',
        'button-gradient': 'linear-gradient(135deg, #F59E0B 0%, #EF4444 100%)',
        'golden-gradient': 'linear-gradient(135deg, #fbbf24 0%, #f59e0b 50%, #d97706 100%)',
        'royal-gradient': 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #a855f7 100%)',
        'void-gradient': 'linear-gradient(180deg, #0a0a0f 0%, #111118 100%)',
      },
      boxShadow: {
        'glow-quantum': '0 0 40px rgba(251, 191, 36, 0.3), 0 0 80px rgba(251, 191, 36, 0.1)',
        'glow-silica': '0 0 40px rgba(59, 130, 246, 0.3), 0 0 80px rgba(59, 130, 246, 0.1)',
        'glow-aurora': '0 0 40px rgba(34, 197, 94, 0.3), 0 0 80px rgba(34, 197, 94, 0.1)',
        'glow-nebula': '0 0 40px rgba(168, 85, 247, 0.3), 0 0 80px rgba(168, 85, 247, 0.1)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms')
  ]
};