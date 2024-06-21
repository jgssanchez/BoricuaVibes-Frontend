import { Typography, Container} from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { useSelector } from "react-redux";

const CardContainer = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <>
    <Container sx={{my:5}}>
      <Typography
        variant="h3"
        component="h2"
        className="title"
        gutterBottom
        sx={{ textAlign: "center", m: 3 }}
      >
        Nuestro Menú
      </Typography>
      {products?.map((product, index) => (
        <ProductCard
          key={index}
         product={product}
        />
      ))}
    </Container>  
    </>
  );
};

export default CardContainer;
