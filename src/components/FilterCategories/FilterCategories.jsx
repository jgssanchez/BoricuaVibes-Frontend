import {
    Box,
    IconButton,
    Divider,
    Grid,
    InputBase,
    Paper,
    Typography,
    FormControl,
    RadioGroup,
    FormControlLabel,
    Radio,
    Select,
    MenuItem,
    Stack,
    Pagination,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";
  
  import { useSelector } from "react-redux";
  import ProductCard from "../ProductCard/ProductCard";
  import { useEffect, useState } from "react";
  
  const FilterCategories = () => {
    const { products } = useSelector((state) => state.product);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [productName, setProductName] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [category, setCategory] = useState("Todas las categorías");
    const [page, setPage] = useState(1);
  
    const categoryList = [
      "Todas las categorías",
      "Tradicional",
      "Bebidas",
      "Postres",
    ];
  
    const handleChange = (event, value) => {
      setPage(value);
    };
  
    useEffect(() => {
      filterProducts();
    }, [products, productName, category, sortBy]);
    const filterProducts = () => {
      let filtered = [...products];
  
      if (productName) {
        filtered = filtered.filter((product) =>
          product.name.toLowerCase().includes(productName.toLowerCase())
        );
      }
  
      if (category !== "Todas las categorías") {
        filtered = filtered.filter((product) => product.category === category);
      }
  
      if (sortBy === "lowerPrice") {
        filtered = filtered.sort((a, b) => a.price - b.price);
      } else if (sortBy === "higherPrice") {
        filtered = filtered.sort((a, b) => b.price - a.price);
      }
  
      setFilteredProducts(filtered);
      setPage(1);
    };
  
    return (
      <Grid container maxWidth="xl" sx={{ mx: "auto", minHeight: 950 }}>
        <Grid
          item
          xs={12}
          sm={3}
          sx={{ backgroundColor: "#f2f2f2", p: 1, color: "#333333" }}
        >
          <Box sx={{ mt: 2 }}>
            <Typography variant="subtitle1">Buscar por...</Typography>
            <Paper
              component="form"
              sx={{
                display: "flex",
                alignItems: "center",
                width: "100%",
                height: 40,
                mt: 1,
              }}
            >
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Nombre del producto"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
                inputProps={{ maxLength: 30 }}
              />
              <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
              <IconButton disabled>
                <SearchIcon />
              </IconButton>
            </Paper>
          </Box>
          <Divider sx={{ mt: 5, backgroundColor: "#ed0000" }} />
          <Box sx={{ my: 5 }}>
            <Typography variant="subtitle1">Ordenar por...</Typography>
            <FormControl>
              <RadioGroup
                name="sortedBy"
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
              >
                <FormControlLabel
                  value="lowerPrice"
                  control={
                    <Radio
                      sx={{
                        color: "red",
                        "&.Mui-checked": {
                          color: "#0050f0",
                        },
                      }}
                    />
                  }
                  label="Menor precio"
                />
                <FormControlLabel
                  value="higherPrice"
                  control={
                    <Radio
                      sx={{
                        color: "red",
                        "&.Mui-checked": {
                          color: "#0050f0",
                        },
                      }}
                    />
                  }
                  label="Mayor precio"
                />
              </RadioGroup>
            </FormControl>
          </Box>
          <Divider sx={{ mt: 5, backgroundColor: "#ed0000" }} />
          <Box sx={{ my: 5 }}>
            <Typography variant="subtitle1">Filtrar por...</Typography>
            <FormControl fullWidth size="small" sx={{ mt: 1 }}>
              <Select
                MenuProps={{
                  PaperProps: {
                    sx: {
                      width: 200,
                      maxHeight: 300,
                    },
                  },
                }}
                sx={{ backgroundColor: "#f2f2f2" }}
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categoryList.map((category, index) => (
                  <MenuItem key={index} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Grid>
        <Grid
          item
          xs={12}
          sm={9}
          sx={{ p: 1, display: "flex", flexDirection: "column" }}
        >
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              gap: 2,
              justifyContent: "center",
              mt: 2,
            }}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts
                .slice((page - 1) * 6, page * 6)
                .map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))
            ) : (
              <Typography variant="h6" sx={{ mt: 2 }}>
                No se encontraron productos que coincidan con : &quot;{productName}&quot;
              </Typography>
            )}
          </Box>
          <Stack spacing={2} sx={{ my: 2, alignSelf: "end", mt: "auto" }}>
            <Typography>Página: {page}</Typography>
            <Pagination
              count={Math.ceil(filteredProducts.length / 6)}
              page={page}
              onChange={handleChange}
            />
          </Stack>
        </Grid>
      </Grid>
    );
  };
  
  export default FilterCategories;