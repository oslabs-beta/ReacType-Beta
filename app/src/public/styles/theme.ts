import { createTheme } from '@mui/material/styles';
// theme creator: https://bareynol.github.io/mui-theme-creator/

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ef6c00', //darker orange with red hue
      light: '#f7f4dc',
      dark: '#01224a',
      contrastText: '#f7f4dc' // white
    },
    secondary: {
      main: '#00acc1' //
    },
    background: {
      paper: '#181818'
    },
    text: {
      primary: '#f7f4dc',
      hint: '#ffa000',
      disabled: '#f7f4dc',
      secondary: '#f7f4dc'
    }
  }
});

export const theme2 = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#ef6c00'
    },
    secondary: {
      main: '#00acc1'
    },
    background: {
      paper: '#181818'
    }
  }
});

export const SigninDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#3c59ba'
    },
    secondary: {
      main: '#17a2b8'
    },
    background: {
      paper: '#2997ff'
    }
  }
});

export const SigninLight = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#3c59ba'
    },
    secondary: {
      main: '#17a2b8'
    },
    background: {
      paper: '#f88e16'
    }
  }
});
