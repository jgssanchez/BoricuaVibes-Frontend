import { useSelector } from "react-redux";
import comida from "../../../assets/icons/iconComida.png";
import postres from "../../../assets/icons/iconPostres.png";
import bebida from "../../../assets/icons/iconBebidas.png";
import { Box, Container, Typography } from "@mui/material";
import { useState } from "react";
import ProductCard from "../../ProductCard/ProductCard";

const categories = [
  {
    name: "Tradicional",
    icon: comida,
  },
  {
    name: "Bebidas",
    icon: bebida,
  },
  {
    name: "Postres",
    icon: postres,
  },
];

const ProductsCategories = () => {
  const { products } = useSelector((state) => state.product);
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);

  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory
  );

  return (
    
    <Container maxWidth="xl" sx={{minHeight: 600, my: 5}}>
      <Typography variant="h3" textAlign={"center"} mb={2} color={"#333"}>Explora nuestro menú</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: 1,
          mb: 3,
        }}
      >
        {categories.map((category, index) => (
          <Box
            key={index}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: 75,
              cursor: "pointer",
              transition: "all .2s ease-in-out",
              ":hover": { transform: "translateY(-5px)", color: "#0050f0" },
              flexGrow: 1,
              color: selectedCategory === category.name ? "#ed0000" : "#333",
            }}
            onClick={() => setSelectedCategory(category.name)}
          >
            <Box
              component="img"
              src={category.icon}
              sx={{
                width: 40,
                m: 1,
              }}
              alt={category.name}
            />
            <Typography
              variant="subtitle1"
              sx={{
                fontWeight: "bolder !important",
                color: "inherit",
              }}
            >
              {category.name}
            </Typography>
          </Box>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
        }}
      >
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <Typography variant="h6" color="text.secondary">
            No hay productos en esta categoría.
          </Typography>
        )}
      </Box>
    </Container>
  );
};

export default ProductsCategories;