import {
  Box,
  Container,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { useSelector } from "react-redux";
import ItemOrder from "./ItemOrder";

const UserOrders = () => {
  const { userOrders } = useSelector((state) => state.order);

  return (
    <Container maxWidth="xl" sx={{ minHeight: "500px" }}>
      <Typography variant="h3" sx={{ textAlign: "center", color: "#333333", mt: 2 }}>
        Pedidos
      </Typography>
      {userOrders.length === 0 ? (
        <Box sx={{ mt: 10 }}>
          <Typography
            variant="h4"
            sx={{ textAlign: "center", color: "gray", fontStyle: "italic" }}
          >
            No tienes pedidos aún
          </Typography>
        </Box>
      ) : (
        <TableContainer component={Paper} sx={{ overflowX: "auto", my: 2 }}>
          <Table aria-label="collapsible table" size="small">
            <TableHead sx={{ backgroundColor: "#333333" }}>
              <TableRow>
                <TableCell align="left" sx={{ color: "#ffc139" }}>
                  N° Pedido
                </TableCell>
                <TableCell align="center" sx={{ color: "#ffc139" }}>
                  Fecha
                </TableCell>
                <TableCell align="center" sx={{ color: "#ffc139" }}>
                  Estado
                </TableCell>
                <TableCell align="center" sx={{ color: "#ffc139" }}>
                  Total
                </TableCell>
                <TableCell align="center" sx={{ color: "#ffc139" }}>
                  Detalles
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {userOrders.map((order) => (
                <ItemOrder key={order._id} userOrder={order} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </Container>
  );
};

export default UserOrders;