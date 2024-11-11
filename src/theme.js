// src/theme.js
import { createTheme } from '@mui/material/styles';
import { green, grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: '#93C572', // Your custom green color for primary elements
      light: green[200], // A lighter shade of green
      dark: green[700],  // A darker shade of green for contrast
    },
    secondary: {
      main: grey[100], // A light gray for secondary elements (good for backgrounds)
      light: grey[50],  // A very light gray for lighter backgrounds
      dark: grey[300],  // A medium gray for subtle contrasts
    },
    text: {
      primary: grey[900],  // Dark gray for primary text (almost black)
      secondary: grey[700], // Medium gray for secondary text
    },
    background: {
      default: grey[50], // A soft off-white background color
      paper: grey[100],  // Slightly darker background for paper elements
    },
  },
  typography: {
    h1: {
      fontSize: '2rem',
      fontWeight: 'bold',
    },
    h2: {
      fontSize: '1.75rem',
      fontWeight: 'bold',
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.6,
    },
  },
});

export default theme;
