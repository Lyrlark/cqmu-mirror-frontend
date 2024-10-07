import { PaletteMode, ThemeOptions, createTheme } from '@mui/material';
import '@fontsource/poppins';

function configTheme(mode: PaletteMode): ThemeOptions {
  return {
    palette:
      mode === 'light'
        ? {
            primary: {
              main: '#FFAD84',
              light: '#FFE382',
              dark: '#FFAD84',
            },
            neutral: {
              main: '#f2f7f9',
            },
            success: {
              main: '#FFC47E',
            },
            warning: {
              main: '#EF9595',
            },
            info: {
              main: '#E48586',
              light: '#FCBAAD',
            },
            error: {
              main: '#C23373',
            },
            background: {
              default: '#F0F3F8',
            },
          }
        : {
            primary: {
              main: '#FFAD84',
              light: '#FFE382',
              dark: '#FFAD84',
            },
            neutral: {
              main: '#121212',
            },
            success: {
              main: '#FFC47E',
            },
            warning: {
              main: '#FFA732',
            },
            info: {
              main: '#E48586',
              light: '#FCBAAD',
            },
            error: {
              main: '#C23373',
            },
            background: {
              default: '#121212',
              paper: '#161718',
            },
          },
    typography: {
      h1: {
        fontFamily: '"Poppins", sans-serif',
        fontWeight: 700,
      },
      h2: {
        fontFamily: '"Metropolis", sans-serif',
        fontWeight: 700,
      },
      h3: {
        fontFamily: '"Metropolis", sans-serif',
        fontWeight: 700,
      },
      h5: {
        fontFamily: '"Metropolis", sans-serif',
        fontWeight: 700,
      },
      h6: {
        fontFamily: '"Metropolis", sans-serif',
        fontWeight: 700,
      },
      subtitle1: {
        fontFamily: '"Metropolis", sans-serif',
        fontWeight: 700,
      },
      subtitle2: {
        fontFamily: '"Metropolis", sans-serif',
        fontWeight: 700,
      },
    },
  };
}

export const lightTheme = createTheme(
  {
    palette: {
      mode: 'light',
    },
  },
  configTheme('light')
);

export const darkTheme = createTheme(
  {
    palette: {
      mode: 'dark',
    },
  },
  configTheme('dark')
);

/* the code below decares customized color */

declare module '@mui/material/styles' {
  interface Palette {
    neutral: Palette['primary'];
  }

  // allow configuration using `createTheme`
  interface PaletteOptions {
    neutral?: PaletteOptions['primary'];
  }
}

// Update the Button"s color prop options
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    neutral: true;
  }
}
