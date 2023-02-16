'use client';

import { createTheme, ThemeOptions } from '@mui/material/styles';

export const lightTheme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#393E46',
    },
    secondary: {
      main: '#00ADB5',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 450,
      md: 768,
      lg: 1024,
      xl: 1200,
    },
  },
});

export const darkTheme: ThemeOptions = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#393E46',
      },
      secondary: {
        main: '#00ADB5',
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 450,
        md: 768,
        lg: 1024,
        xl: 1200,
      },
    },
  });