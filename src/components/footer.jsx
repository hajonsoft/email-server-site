import { Box, Grid, Typography, Link, useTheme } from '@mui/material';
import { getCleanHostname } from '../utils';

const siteName = getCleanHostname();

function Footer() {
  const theme = useTheme(); // Access the theme

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main, // Use theme primary color
        color: 'white',
        padding: '40px 20px',
        marginTop: 'auto',
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Left column: Site Name */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold">
            {siteName}
          </Typography>
          <Typography variant="body2">
            {`Discover the convenience of online communication with ${siteName}.`}
          </Typography>
        </Grid>

        {/* Center column: Quick Links */}
        <Grid item xs={12} sm={4}>
          <Box>
            <Link href="#" color="inherit" display="block" sx={{ marginBottom: '8px' }}>
              Home
            </Link>
          </Box>
        </Grid>

      </Grid>

      {/* Bottom section: Contact Us */}
      <Box
        sx={{
          marginTop: '20px',
          textAlign: 'center',
          borderTop: '1px solid rgba(255, 255, 255, 0.3)',
          paddingTop: '20px',
        }}
      >
        <Typography variant="body2">
          <Link href={`mailto:contact@${siteName}.com`} color="inherit">
            {`contact@${siteName}.com`}
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '8px' }}>
          © {new Date().getFullYear()} {siteName} All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;