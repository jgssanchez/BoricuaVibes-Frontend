import { Container } from '@mui/material'
import Banner from './Banner/Banner'
import CardContainer from "./CardContainer"

const Home = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Banner/>
      <CardContainer/>
    </Container>
  )
}

export default Home