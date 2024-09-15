/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {

    extend: {
      colors: {
        "project-green": "#E2F1E8",
        "project-red": "#F1DADA",
        "project-yellow": "#F1F1E2",
        "gray": "#F4F4F4"
      },

      screens: {
        'lg': '1440px',
      }

    },
  },
  plugins: [function ({ addComponents }) {
    addComponents({


      '.basic-button': {
        padding: "12px 16px",
        "font-size": "10px",
        //background: "#E2F1E8",
        border: "1px solid #000000",
        "box-shadow": "-2px 2px 0px #000000",
        "border-radius": "4px",
        "font-weight": "700",
        "text-transform": "uppercase"
      }
    });
  }],
}

