import { Box, Grid, Typography, Link } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        backgroundColor: '#93C572', // Set footer background color (can adjust)
        color: 'white', // Set text color to white for contrast
        padding: '40px 20px',
        marginTop: 'auto', // Ensure footer stays at the bottom of the page
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Left column: Site Name */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold">
            Harmonia Posta
          </Typography>
          <Typography variant="body2">
            Discover the convenience of online communication with Harmonia Posta.
          </Typography>
        </Grid>

        {/* Center column: Quick Links */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold">
            Quick Links
          </Typography>
          <Box>
            <Link href="#" color="inherit" display="block" sx={{ marginBottom: '8px' }}>
              Home
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ marginBottom: '8px' }}>
              About Us
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ marginBottom: '8px' }}>
              Services
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ marginBottom: '8px' }}>
              Blog
            </Link>
          </Box>
        </Grid>

        {/* Right column: Resources */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold">
            Resources
          </Typography>
          <Box>
            <Link href="#" color="inherit" display="block" sx={{ marginBottom: '8px' }}>
              Documentation
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ marginBottom: '8px' }}>
              API Reference
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ marginBottom: '8px' }}>
              Support Center
            </Link>
            <Link href="#" color="inherit" display="block" sx={{ marginBottom: '8px' }}>
              Community Forum
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
          <Link href="mailto:contact@harmoniaposta.com" color="inherit">
            contact@harmoniaposta.com
          </Link>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '8px' }}>
          © {new Date().getFullYear()} Harmonia Posta. All rights reserved.
        </Typography>
      </Box>
    </Box>
  );
}

export default Footer;
