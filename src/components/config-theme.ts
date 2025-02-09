import { PaletteMode, ThemeOptions, createTheme } from '@mui/material';
import '@fontsource/poppins';

function configTheme(mode: PaletteMode): ThemeOptions {
  return {
    palette:
      mode === 'light'
        ? {
            primary: {
              main: '#137b55',
              light: '#FFE382',
              dark: '#137b55',
            },
            neutral: {
              main: '#f2f7f9',
            },
            success: {
              main: '#38af8b',
            },
            warning: {
              main: '#EF9595',
            },
            info: {
              main: '#63aef7',
              light: '#0073e6',
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
              main: '#137b55',
              light: '#FFE382',
              dark: '#137b55',
            },
            neutral: {
              main: '#121212',
            },
            success: {
              main: '#38AF8B',
            },
            warning: {
              main: '#FFA732',
            },
            info: {
              main: '#006c93',
              light: '#3fa6ed',
            },
            error: {
              main: '#f13030',
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
