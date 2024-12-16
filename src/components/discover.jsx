// src/components/Discover.jsx
import { Box, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import discoverImage from '../assets/image/discover.jpg';

const Discover = () => {
    return (
        <Box
            pt={2}
            sx={{
                backgroundColor: '#e0f7fa', // Light blue background similar to the image
                textAlign: 'center',
                position: 'relative',
            }}
        >
            <Container maxWidth="md">
                {/* Main Heading */}
                <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 4 }}>
                    Discover the Convenience of private email: Your Exclusive
                </Typography>
                <Typography variant='h1' gutterBottom>Invite only email server</Typography>
                {/* Subtitle */}
                <Typography variant="body1" color="textSecondary" sx={{ mb: 2 }}>
                    Invite-only email server offers a secure and
                    private platform for individuals to manage their electronic communications.
                </Typography>
                <Stack
                    justifyContent="center"  // Horizontally center the content
                    alignItems="center"      // Vertically center the content
                    sx={{
                        maxWidth: '100vw',      // Ensure the stack doesn't extend beyond the viewport width
                        overflow: 'hidden',     // Hide any content that overflows
                    }}
                >
                    <Box
                        component="img"
                        src={discoverImage}
                        alt="Discover the convenience of private email"
                        sx={{
                            maxWidth: '100%',      // Ensure the image doesn't exceed the box width
                            maxHeight: '100%',     // Ensure the image doesn't exceed the box height
                            objectFit: 'contain',  // Keep the image aspect ratio intact while scaling
                        }}
                    />
                </Stack>
            </Container>

        </Box>
    );
};

export default Discover;
