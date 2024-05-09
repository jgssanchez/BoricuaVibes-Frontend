import "./Banner.css"
import { Container, Box, Typography } from '@mui/material';

const Banner = () => {

  const urlImg = "https://i.pinimg.com/564x/a2/13/65/a21365e934017b83bc731ad0ed51a900.jpg"

  return(
    <Container 
    disableGutters 
    maxWidth={false}
    sx={{backgroundImage: `url(${urlImg})`, height: {xs: 300, sm: 600, md: 800, lg: 1000}, backgroundSize: "100% 100%", position: "relative"}}
    >
      <Box sx={{
      px: 3, 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      height: '100%',
      width: 'fit-content',
      background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 100%)"
      }}>
        <Typography variant="h1" className="title-banner">Boricua Vibes</Typography>
        <Typography variant="h2" className="subtitle-banner">&quot;Tu lugar para disfrutar y comer a la vez...&quot;</Typography>
      </Box>
    </Container>
  )
}

export default Banner;