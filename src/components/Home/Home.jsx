import { Container } from '@mui/material'
import Banner from './Banner/Banner'
import AboutUs from './AboutUs/AboutUs'
import ProductsCategories from './ProductCategories/ProductsCategories'
import Offerts from './Offers/Offers'
import Delivery from './Delivery/Delivery'

const Home = () => {
  return (
    <Container disableGutters maxWidth={false}>
      <Banner/>
      <AboutUs/>
      <Offerts/>
      <Delivery/>
      <ProductsCategories/>
     
      
    </Container>
  )
}

export default Home