/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        romantic: {
          pink: "#FFB6C1",
          gold: "#D4AF37",
          purple: "#9370DB",
          soft: "#FFF0F5",
        },
        "royal-gold": "#d4af37",
        "rose-gold": "#b76e79",
        "midnight": "#050810",
      },
      fontFamily: {
        serif: ["'Playfair Display'", "serif"],
        handwritten: ["'Dancing Script'", "cursive"],
      },
      animation: {
        "float": "float 3s ease-in-out infinite",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 1s ease-out forwards",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.8", filter: "brightness(100%)" },
          "50%": { opacity: "1", filter: "brightness(120%)" },
        }
      }
    },
  },
  plugins: [],
}
