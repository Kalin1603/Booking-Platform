/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#E75480',        // Elegant Pink for buttons, links
        'primary-hover': '#FF7AA2', // Hover effect for primary elements
        secondary: '#9B59B6',      // Lavender Purple for secondary accents
        success: '#27AE60',        // Fresh Green for success messages
        info: '#3498DB',          // Soft Blue for info messages
        error: '#E74C3C',          // Red for error messages
        'base-text': '#333333',     // Main dark grey text color
        'secondary-text': '#666666', // Lighter grey text color
        'background': '#FAFAFA',    // Very light grey page background
        'divider': '#E0E0E0',      // Border and divider color
      },
    },
  },
  plugins: [],
}