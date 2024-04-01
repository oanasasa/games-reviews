/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary' : 'SourceCode',
        'secondary': 'Professor3D'
      },
      colors: {
        'primary' : '#ffffff',
        'accent' : '#dda0dd',
        'dark' : '#341755'
      },
      zIndex: {
        'index-1': "-1",
      }
      
    },
  },
  plugins: [],
}

