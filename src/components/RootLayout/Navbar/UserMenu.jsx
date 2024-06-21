import { Badge, Box, Divider, Tooltip } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { useState } from "react";
import CartDrawer from "../../CartDrawer/CartDrawer";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../../redux/actions/userActions";
import { useNavigate } from "react-router-dom";
import { autoCloseAlert, customAlert } from "../../../utils/alerts";

const UserMenu = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { userCart } = useSelector((state) => state.cart);
  const { userOrders } = useSelector((state) => state.order);
  const [openCart, setOpenCart] = useState(false);

  const handleLogoutUser = () => {
    customAlert("¿Deseas cerrar sesión?", () => {
      dispatch(logoutUser()).then(() => {
        autoCloseAlert("SESION CERRADA", "success");
        navigate("/");
      });
    });
  };

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Badge
          badgeContent={userOrders.filter(order => order.status === "PENDIENTE").length}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#0050f0",
              color: "white",
              transition: "all ease-in-out .3s",
              cursor: "default",
            },
            ":hover": {
              "& .MuiBadge-badge": {
                backgroundColor: "#333333",
              },
            },
          }}
        >
          <Tooltip title="Pedidos">
            <ShoppingBagOutlinedIcon
              onClick={() => navigate("/user-orders")}
              sx={{
                color: "#333333",
                cursor: "pointer",
                transition: "all ease-in-out .3s",
                ":hover": {
                  color: "#0050f0",
                },
              }}
            />
          </Tooltip>
        </Badge>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Badge
          badgeContent={userCart.length}
          sx={{
            "& .MuiBadge-badge": {
              backgroundColor: "#0050f0",
              color: "white",
              transition: "all ease-in-out .3s",
              cursor: "default",
            },
            ":hover": {
              "& .MuiBadge-badge": {
                backgroundColor: "#ed0000",
              },
            },
          }}
        >
          <Tooltip title="Carrito">
            <ShoppingCartOutlinedIcon
              onClick={() => setOpenCart(true)}
              sx={{
                color: "#333333",
                cursor: "pointer",
                transition: "all ease-in-out .3s",
                ":hover": {
                  color: "#0050f0",
                },
              }}
            />
          </Tooltip>
        </Badge>
        <Divider orientation="vertical" flexItem sx={{ mx: 2 }} />
        <Tooltip title="Cerrar sesión">
          <LogoutOutlinedIcon
            onClick={handleLogoutUser}
            sx={{
              color: "#333333",
              cursor: "pointer",
              transition: "all ease-in-out .3s",
              ":hover": {
                color: "#ed0000",
              },
            }}
          />
        </Tooltip>
      </Box>
      {openCart && (
        <CartDrawer openCart={openCart} closeCart={() => setOpenCart(false)} />
      )}
    </>
  );
};

export default UserMenu;