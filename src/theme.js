import { grey } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { getCleanHostname } from './utils';

// Helper function to generate a unique integer from a string
function hashCode(str) {
  let hash = 0;
  if (str.length === 0) return hash;
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return hash;
}


function stringToColor(str) {
  const hash = hashCode(str);
  const r = (hash & 0xFF0000) >> 16;
  const g = (hash & 0x00FF00) >> 8;
  const b = hash & 0x0000FF;

  return `#${(r.toString(16).padStart(2, '0'))}${g.toString(16).padStart(2, '0')}${b.toString(16).padStart(2, '0')}`;
}


const siteName = getCleanHostname();
const primaryColor = stringToColor(siteName);

const theme = createTheme({
  palette: {
    primary: {
      main: primaryColor, // Dynamic primary color
      light: '#F0F8FF',  // A fixed light color, feel free to change this.
      dark: '#191970',   // A fixed dark color, feel free to change this.
    },
    secondary: {
      main: '#F0F8FF',  // Dynamic light color based on siteName
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