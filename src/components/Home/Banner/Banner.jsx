import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import './Banner.css';

const Banner = () => {
  const urlImg = "https://i.pinimg.com/564x/a2/13/65/a21365e934017b83bc731ad0ed51a900.jpg";

  return (
    <Container
      disableGutters
      maxWidth={false}
      className="banner-container"
      sx={{
        backgroundImage: `url(${urlImg})`,
        height: { xs: 300, sm: 600, md: 800, lg: 1000 },
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Box
        sx={{
          px: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          backdropFilter: 'blur(8px)',
          background: 'rgba(0, 0, 0, 0.5)',
          borderRadius: 8,
          p: 3,
        }}
      >
        <Typography variant="h1" className="title-banner">
          Boricua Vibes
        </Typography>
        <Typography variant="h3" className="subtitle-banner">
          Tu lugar para disfrutar y comer a la vez...
        </Typography>
      </Box>
    </Container>
  );
};

export default Banner;
