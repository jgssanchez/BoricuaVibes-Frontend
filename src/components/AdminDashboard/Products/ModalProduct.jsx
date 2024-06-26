import {
  styled,
  Avatar,
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import UploadFileTwoToneIcon from "@mui/icons-material/UploadFileTwoTone";

import { useDispatch } from "react-redux";
import { autoCloseAlert, customAlert } from "../../../utils/alerts";
import { useState } from "react";
import {
  handleReadImage,
  handleUploadImage,
} from "../../../utils/handleUploadImage";
import { handleError } from "../../../utils/handleInputError";
import {
  createProduct,
  deleteProduct,
  editProduct,
} from "../../../redux/actions/productActions";
import Loader from "../../Loader/Loader";

const regexProd = /^[a-zA-Z0-9,. -ñ]{4,50}$/;
const regexDesc = /^[a-zA-Z0-9,. \u00C0-\u00FF-]{4,100}$/;
const regexPrice = /^(?!0+$)[0-9]{2,6}$/;

export const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 300,
  bgcolor: "background.paper",
  border: "thin solid #000",
  boxShadow: 24,
  p: 3,
  borderRadius: 2,
};

const ModalProduct = ({
  openModal,
  closeModal,
  isCreatingProduct,
  selectedProduct,
}) => {
  const dispatch = useDispatch();
  const [productName, setProductName] = useState(
    isCreatingProduct ? "" : selectedProduct.name
  );
  const [productNameError, setProductNameError] = useState(false);
  const [productPrice, setProductPrice] = useState(
    isCreatingProduct ? "" : selectedProduct.price
  );
  const [productPriceError, setProductPriceError] = useState(false);
  const [productDescription, setProductDescription] = useState(
    isCreatingProduct ? "" : selectedProduct.description
  );
  const [productDescriptionError, setProductDescriptionError] = useState(false);
  const [productCategory, setProductCategory] = useState(
    isCreatingProduct ? "" : selectedProduct.category
  );
  const [productImage, setProductImage] = useState(
    isCreatingProduct ? "" : selectedProduct.image
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleCreateProduct = async () => {
    setIsLoading(true);
    if (
      productNameError ||
      productPriceError ||
      productDescriptionError ||
      !productCategory ||
      !productImage ||
      !productName ||
      !productPrice ||
      !productDescription
    ) {
      setIsLoading(false);
      return autoCloseAlert("Por favor, rellena bien el formulario", "error");
    }

    const productImageUpload = await handleUploadImage(
      productImage,
      "productsImages"
    );

    const product = {
      name: productName,
      price: productPrice,
      description: productDescription,
      category: productCategory,
      image: productImageUpload,
    };

    dispatch(createProduct(product))
      .unwrap()
      .then(() => {
        setIsLoading(false);
        autoCloseAlert("PRODUCTO CREADO", "success");
        closeModal();
      })
      .catch((error) => {
        setIsLoading(false);
        autoCloseAlert(error.message, "error");
      });
  };

  const handleDeleteProduct = async () => {
    customAlert("¿Deseas eliminar este producto?", () => {
      dispatch(deleteProduct(selectedProduct._id))
        .unwrap()
        .then(() => {
          autoCloseAlert("PRODUCTO ELIMINADO", "success");
          closeModal();
        });
    });
  };

  const handleEditProduct = async () => {
    setIsLoading(true);

    if (
      productNameError ||
      productPriceError ||
      productDescriptionError ||
      !productCategory ||
      !productImage ||
      !productName ||
      !productPrice ||
      !productDescription
    ) {
      setIsLoading(false);
      return autoCloseAlert("Por favor, rellena bien el formulario", "error");
    }

    let productData = {id: selectedProduct._id};
    if(productName !== selectedProduct.name) productData.name = productName;
    if(productPrice !== selectedProduct.price) productData.price = productPrice;
    if(productDescription !== selectedProduct.description) productData.description = productDescription;
    if(productCategory !== selectedProduct.category) productData.category = productCategory;
    if(productImage !== selectedProduct.image){
      const newProductImage = await handleUploadImage(productImage, "productsImages")
      productData.image = newProductImage;
    }

    customAlert("¿Guardar cambios?", () => {
      dispatch(editProduct(productData)).unwrap()
      .then(() => {
        autoCloseAlert("PRODUCTO ACTUALIZADO", "success");
        closeModal();
      })
      .catch((error) => {
        autoCloseAlert(error.message, "error");
      })
    })

  };

  return (
    <>
    {isLoading && <Loader/>}
      <Modal open={openModal} onClose={closeModal}>
        <Box sx={style}>
          <CloseIcon
            onClick={closeModal}
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              cursor: "pointer",
              zIndex: 99,
            }}
          />
          <Box
            sx={{
              position: "relative",
              width: { xs: 100, sm: 150, md: 200 },
              mx: "auto",
              mb: 3,
            }}
          >
            <Avatar
              variant="rounded"
              src={productImage}
              sx={{
                width: "100%",
                height: "100%",
                mx: "auto",
              }}
            />
            <Button
              size="small"
              sx={{ position: "absolute", bottom: 0, left: 0, fontSize: 8 }}
              component="label"
              variant="contained"
              startIcon={<UploadFileTwoToneIcon />}
            >
              Subir imagen*
              <VisuallyHiddenInput
                type="file"
                onChange={(e) => handleReadImage(e, setProductImage)}
                accept="image/*"
              />
            </Button>
          </Box>
          <FormControl fullWidth required variant="outlined">
            <TextField
              size="small"
              required
              fullWidth
              label="Nombre Producto"
              name="name"
              onChange={(e) =>
                handleError(e, setProductName, setProductNameError, regexProd)
              }
              value={productName}
              error={productNameError}
              color={productNameError ? "" : "success"}
              helperText={productNameError ? "Nombre de producto inválido" : ""}
            />
          </FormControl>
          <FormControl fullWidth required variant="outlined" sx={{ mt: 2 }}>
            <TextField
              size="small"
              required
              fullWidth
              label="Descripción"
              value={productDescription}
              error={productDescriptionError}
              color={productDescriptionError ? "" : "success"}
              helperText={
                productDescriptionError ? "Descripción no válida" : ""
              }
              onChange={(e) =>
                handleError(
                  e,
                  setProductDescription,
                  setProductDescriptionError,
                  regexDesc
                )
              }
            />
          </FormControl>
          <FormControl fullWidth required variant="outlined" sx={{ mt: 2 }}>
            <TextField
              size="small"
              type="number"
              label="Precio*"
              value={productPrice}
              error={productPriceError}
              color={productPriceError ? "" : "success"}
              helperText={productPriceError ? "Precio no válido" : ""}
              onChange={(e) =>
                handleError(
                  e,
                  setProductPrice,
                  setProductPriceError,
                  regexPrice
                )
              }
            />
          </FormControl>
          <FormControl size="small" fullWidth sx={{ mt: 2 }}>
            <InputLabel>Categoria*</InputLabel>
            <Select
              value={productCategory}
              label="Categoria*"
              onChange={(e) => setProductCategory(e.target.value)}
            >
              <MenuItem value="Tradicional">Tradicional</MenuItem>
              <MenuItem value="Bebidas">Bebidas</MenuItem>
              <MenuItem value="Postres">Postres</MenuItem>
            </Select>
          </FormControl>
          <Box>
            <Button
              onClick={
                isCreatingProduct ? handleCreateProduct : handleEditProduct
              }
              size="small"
              variant="contained"
              sx={{ width: "100%", my: 1 }}
            >
              {isCreatingProduct ? "Crear producto" : "Guardar cambios"}
            </Button>
            <Button
              size="small"
              onClick={isCreatingProduct ? closeModal : handleDeleteProduct}
              variant="contained"
              color="error"
              sx={{ width: "100%" }}
            >
              {isCreatingProduct ? "Cancelar" : "Eliminar"}
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default ModalProduct;