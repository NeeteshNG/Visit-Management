/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0px 4px 8px 2px rgba(0, 0, 0, 0.05)',
      },

      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        // NGtry Brand Colors (Mossy Hollow)
        ngtryprimary: "#636B2F",  // Primary Dark - buttons, headers
        ngtrydeep: "#3D4127",     // Deep Green - dark accents, gradients
        ngtrysage: "#BAC095",     // Sage - light accents, hover states
        ngtrylime: "#D4DE95",     // Lime - highlights, success states
        // Legacy aliases (for gradual migration)
        epassblue: "#636B2F",     // maps to ngtryprimary
        primaryblue: "#3D4127",   // maps to ngtrydeep
        primarysky: "#BAC095",    // maps to ngtrysage
        // Neutral colors
        neutralBlack: "#090A0A",
        lightneutra: "#FFFFFF",
        greyneutral: "#A3A3A3",
        textfromgray: "#F4F4F4",
        greyScale: "#111827"
      },
    },
  },
  plugins: [],
}
