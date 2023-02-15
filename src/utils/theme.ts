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
});

export const darkTheme: ThemeOptions = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#393E46',
      },
      secondary: {
        main: '#00ADB5',
      },
    },
  });