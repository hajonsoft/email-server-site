import LoginIcon from '@mui/icons-material/Login';
import { Box, Grid, IconButton, Link, Typography, useTheme } from '@mui/material';
import { friendlyName, loginUrl } from '../config';
import { getCleanHostname, getDomainExtension } from '../utils';

const siteName = getCleanHostname();
const siteExtension = getDomainExtension();

function Footer() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        color: 'white',
        padding: '40px 20px',
        marginTop: 'auto',
      }}
    >
      <Grid container spacing={4} justifyContent="space-between">
        {/* Left column: Site Name */}
        <Grid item xs={12} sm={4}>
          <Typography variant="h6" fontWeight="bold">
            {friendlyName || siteName}
          </Typography>
          <Typography variant="body2">
            {`Discover the convenience of online communication with ${friendlyName || siteName}.`}
          </Typography>
        </Grid>

        {/* Center column: Quick Links and Login Button */}
        <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Link href="#" color="inherit" display="block" sx={{ marginBottom: '8px' }}>
              Home
            </Link>
            <IconButton
              color="inherit"
              aria-label="login"
              onClick={() => window.location.href = loginUrl}
              sx={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)', // Add a subtle background to the icon button
                borderRadius: '50%', // Make it circular
                width: 48,
                height: 48,
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }
              }}
            >
              <LoginIcon />
            </IconButton>
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
          <Link href={`mailto:contact@${friendlyName || siteName}.${siteExtension}`} color="inherit">
            {`contact@${friendlyName || siteName}.${siteExtension}`}
          </Link>
        </Typography>

        <Typography variant="body2" sx={{ marginTop: '8px' }}>
          <Link href={loginUrl} color="inherit">Sign in</Link>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '8px' }}>
          © {new Date().getFullYear()} {friendlyName || siteName} All rights reserved.
        </Typography>

      </Box>
    </Box>
  );
}

export default Footer;