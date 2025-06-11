/** @type {import('tailwindcss').Config} */
export default {
    content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Scan all component files
    ],
    theme: {
    extend: {
        colors: {
            primary: "#6D28D9",  // Example custom color (purple-700)
        },
        fontFamily: {
            sans: ["Inter", "sans-serif"],
        },
    },
},
plugins: [],
};
