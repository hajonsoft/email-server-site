import { Box, Grid, Typography, Link, useTheme, IconButton } from '@mui/material';
import { getCleanHostname } from '../utils';
import LoginIcon from '@mui/icons-material/Login';

const siteName = getCleanHostname();
const loginUrl = "https://giow1026.siteground.us/webmail/log-in";

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
            {siteName}
          </Typography>
          <Typography variant="body2">
            {`Discover the convenience of online communication with ${siteName}.`}
          </Typography>
        </Grid>

        {/* Center column: Quick Links and Login Button */}
        <Grid item xs={12} sm={4} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Box sx={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
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
          <Link href={`mailto:contact@${siteName}.com`} color="inherit">
            {`contact@${siteName}.com`}
          </Link>
        </Typography>

        <Typography variant="body2" sx={{ marginTop: '8px' }}>
           <Link href={loginUrl} color="inherit">Sign in</Link>
        </Typography>
        <Typography variant="body2" sx={{ marginTop: '8px' }}>
          © {new Date().getFullYear()} {siteName} All rights reserved.
        </Typography>

      </Box>
    </Box>
  );
}

export default Footer;