module.exports = {
    content: [
      "./src//*.{html,ts}"
    ],
    theme: {
      extend: {
        colors:{
          primary: "#00A5CF", // Azul celeste
          secondary: "#25A18E", // Turquesa
          tertiary: "#9FFFCB", // Verde menta claro

          support: {
            navy: "#004E64",      // Azul marino oscuro
            lightgreen: "#7AE582" // Verde claro
          },

          neutral:{
            white: "#FFFFFF",
            grayLightest: "#F5F7F8",
            grayLighter: "#E2E8EC",
            grayLight: "#B0BBC2",
            grayDark: "#5D6D77",
            grayDarker: "#263238"
          },

          state: {
            success: "#2CC091",
            error: "#E55A5A",
            warning: "#F0B64D",
            info: "#41A4D0"
          }
        },

        fontFamily: {
          title: ['Poppins', 'sans-serif'],
          body: ['"Nunito Sans"', 'sans-serif'],
        }
      }
    },
    plugins: [],
  }