/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'selector',
    theme: {
        extend: {
            colors: {
                verdant: {
                    50: '#f0fdf4', // Slightly warmer/richer off-white
                    100: '#dcfce7',
                    200: '#bbf7d0',
                    300: '#86efac',
                    400: '#4ade80',
                    500: '#22c55e', // Standard Green-500 equivalent, slightly darker than previous emerald-ish
                    600: '#16a34a', // Darker standard green
                    700: '#15803d', // Rich forest green
                    800: '#166534', // Deep green
                    900: '#14532d', // Very dark green
                    950: '#052e16', // Almost black green
                },
                'bloom-dark': '#0a0a0a',
            },
            fontFamily: {
                sans: ['Lora', 'serif'],
                display: ['Fondamento', 'cursive'],
            },
            animation: {
                'fade-in': 'fadeIn 0.5s ease-out forwards',
                'fade-in-up': 'fadeInUp 0.7s ease-out forwards',
            },
            keyframes: {
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
        },
    },
    plugins: [],
}
