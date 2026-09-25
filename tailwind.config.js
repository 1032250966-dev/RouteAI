/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ops: {
          bg: '#080B10',
          surface: '#0E131E',
          surfaceHover: '#131927',
          surfaceElevated: '#171E2F',
          border: '#1E2638',
          borderSubtle: '#151C2A',
          borderLight: '#2A354C',
          text: '#F0F4F8',
          textMuted: '#8492A6',
          textDim: '#4B5568',
          emerald: '#10B981',
          amber: '#F59E0B',
          crimson: '#EF4444',
          blue: '#3B82F6',
          cyan: '#06B6D4',
        }
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['JetBrains Mono', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'monospace']
      },
      boxShadow: {
        'subtle': '0 1px 2px 0 rgba(0, 0, 0, 0.4)',
        'ops-card': '0 4px 20px -2px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(30, 38, 56, 0.6)',
        'ops-active': '0 0 15px -3px rgba(59, 130, 246, 0.25)',
        'ops-danger': '0 0 15px -3px rgba(239, 68, 68, 0.25)',
        'ops-success': '0 0 15px -3px rgba(16, 185, 129, 0.25)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      }
    },
  },
  plugins: [],
}
