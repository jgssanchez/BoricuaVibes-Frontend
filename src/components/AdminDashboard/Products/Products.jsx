import {
  Box,
  Button,
  Chip,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";

import { useSelector } from "react-redux";
import { useState } from "react";
import Loader from "../../Loader/Loader";
import ModalProduct from "./ModalProduct";

function createData(_id, name, description, price, category, image) {
  return { _id, name, description, price, category, image };
}

const Products = () => {
  const [openModal, setOpenModal] = useState("");
  const [isCreatingProduct, setIsCreatingProduct] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const { products, loading } = useSelector((state) => state.product);

  const rows =
    products &&
    products.map((product) =>
      createData(
        product._id,
        product.name,
        product.description,
        product.price,
        product.category,
        product.image
      )
    );

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(+e.target.value);
    setPage(0);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button
              onClick={() => {
                setIsCreatingProduct(true);
                setOpenModal(true);
              }}
              variant="contained"
              sx={{
                backgroundColor: "#0050f0",
                my: 2,
                color: "#ffff",
              }}
            >
              CREAR PRODUCTO
              <AddBoxOutlinedIcon sx={{ ml: 1 }} />
            </Button>
          </Box>
          <TableContainer component={Paper} sx={{ overflowX: "auto", my: 2 }}>
            <Table aria-label="collapsible table" size="small">
              <TableHead sx={{ backgroundColor: "#ffff" }}>
                <TableRow>
                  <TableCell sx={{ color: "#0050f0" }}>Nombre</TableCell>
                  <TableCell align="center" sx={{ color: "#0050f0" }}>
                    Descripción
                  </TableCell>
                  <TableCell align="left" sx={{ color: "#0050f0" }}>
                    Precio
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#0050f0" }}>
                    Categoría
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#0050f0" }}>
                    Imagen
                  </TableCell>
                  <TableCell align="center" sx={{ color: "#0050f0" }}>
                    Editar
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, rowIndex) => (
                    <TableRow
                      key={rowIndex}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="left" sx={{ minWidth: 210 }}>
                        {row.description}
                      </TableCell>
                      <TableCell align="left">
                        <Chip label={`$ ${row.price}`} color="success" />
                      </TableCell>
                      <TableCell align="center">{row.category}</TableCell>
                      <TableCell align="center">
                        <img
                          src={row.image}
                          alt={row.name}
                          style={{
                            width: "100px",
                            height: "100px",
                            objectFit: "cover",
                          }}
                        />
                      </TableCell>
                      <TableCell align="center">
                        <Button
                          onClick={() => {
                            setSelectedProduct(row);
                            setIsCreatingProduct(false);
                            setOpenModal(true);
                          }}
                          variant="contained"
                          size="small"
                          sx={{
                            mr: { xs: 0, sm: 1 },
                            backgroundColor: "#ed0000",
                          }}
                        >
                          <ModeEditOutlineOutlinedIcon
                            sx={{ color: "#ffff" }}
                          />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            labelRowsPerPage="Filas"
            rowsPerPageOptions={[5, 10, 20]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
          {openModal && (
            <ModalProduct
              openModal={openModal}
              closeModal={() => setOpenModal(false)}
              isCreatingProduct={isCreatingProduct}
              selectedProduct={selectedProduct}
            />
          )}
        </Container>
      )}
    </>
  );
};

export default Products;