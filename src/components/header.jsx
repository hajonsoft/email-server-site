// src/components/Header.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';

// Get the site name from the environment variable, with a fallback.
const siteName = process.env.REACT_APP_SITE_NAME || 'Mail Server';

const Header = () => (
    <AppBar position="static" color="primary" elevation={0}>
        <Toolbar>
            <Box display="flex" alignItems="center" gap={1}>
                <MailIcon sx={{ color: 'white', fontSize: 28 }} />
                <Typography variant="h1" color="inherit">
                    {siteName}
                </Typography>
            </Box>
            {/* Add additional navigation links if needed */}
        </Toolbar>
    </AppBar>
);

export default Header;
