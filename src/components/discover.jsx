// src/components/Discover.jsx
import EmailIcon from '@mui/icons-material/Email';
import { Box, Container, Link, Stack, Typography } from '@mui/material';
import React from 'react';
import discoverImage from '../assets/image/discover.jpg';
import { useConfig } from '../useConfig';


const Discover = () => {
    const { config } = useConfig();
    const loginUrl = config.loginUrl;

    return (
        <Box
            pt={2}
            sx={{
                backgroundColor: '#e0f7fa',
                textAlign: 'center',
                position: 'relative',
            }}
        >
            <Container maxWidth="md">
                {/* Main Heading */}
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 1, pt: 2 }}>
                    Discover the Convenience of private email: Your Exclusive
                </Typography>
                <Typography variant='h1' gutterBottom sx={{ mb: 1 }}>Invite only email server</Typography>
                {/* Login Link and Explanation */}
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                    <Typography variant="body1" color="textSecondary" sx={{ mb: 1 }} >
                        Ready to access your private email?
                    </Typography>
                    <Link href={loginUrl} color="primary" sx={{ display: 'flex', alignItems: 'center', '&:hover': { textDecoration: 'underline' } }}>
                        <EmailIcon sx={{ mr: 1 }} /> Login to your Email Here
                    </Link>
                </Box>

                {/* Subtitle */}
                <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                    Invite-only email server offers a secure and
                    private platform for individuals to manage their electronic communications.
                </Typography>
                <Stack
                    justifyContent="center"
                    alignItems="center"
                    sx={{
                        maxWidth: '100vw',
                        overflow: 'hidden',
                    }}
                >
                    <Box
                        component="img"
                        src={discoverImage}
                        alt="Discover the convenience of private email"
                        sx={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain',
                        }}
                    />
                </Stack>
            </Container>

        </Box>
    );
};

export default Discover;