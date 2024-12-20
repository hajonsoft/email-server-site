// src/components/Header.jsx
import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Box, Button } from '@mui/material';
import MailIcon from '@mui/icons-material/MailOutline';
import LoginIcon from '@mui/icons-material/Login';
import { getCleanHostname } from '../utils';
import { useConfig } from '../useConfig';

const siteName = getCleanHostname();
const Header = () => {

    const { config } = useConfig();

    return (
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
                    onClick={() => window.location.href = config.loginUrl}
                >
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    )
}

export default Header;