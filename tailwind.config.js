// tailwind.config.js
module.exports = {
    content: [
    "./public/**/*.html", // Adjust this based on your project structure
    "./views/**/*.ejs",   // Example for EJS templates
    "./src/**/*.{js,jsx,ts,tsx}", // Example for React/JS components
    ],
    theme: {
    extend: {},
    },
    plugins: [],
}