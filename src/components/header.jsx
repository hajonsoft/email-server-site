// src/components/Header.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import LoginIcon from '@mui/icons-material/Login';
import { getCleanHostname } from '../utils';

const siteName = getCleanHostname();
const loginUrl = "https://giow1026.siteground.us/webmail/log-in";


const Header = () => (
    <AppBar position="static" color="primary" elevation={0}>
        <Toolbar sx={{ justifyContent: 'space-between' }}> {/* Modified to space-between */}
            <Box display="flex" alignItems="center" gap={1}>
                <MailIcon sx={{ color: 'white', fontSize: 28 }} />
                <Typography variant="h1" color="inherit">
                    {siteName}
                </Typography>
            </Box>

            <Button
                variant="outlined"
                color="inherit"
                startIcon={<LoginIcon />}
                onClick={() => window.location.href = loginUrl}
            >
                Login
            </Button>
        </Toolbar>
    </AppBar>
);

export default Header;