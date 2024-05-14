import { Container } from '@mui/material'
import Banner from './Banner/Banner'
import CardContainer from "./CardContainer"
import AboutUs from './AboutUs/AboutUs'

const Home = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Banner/>
      <AboutUs/>
      <CardContainer/>
    </Container>
  )
}

export default Home