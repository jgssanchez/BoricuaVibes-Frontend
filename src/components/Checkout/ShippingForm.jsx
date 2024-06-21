import {
    Box,
    FilledInput,
    FormControl,
    Grid,
    InputAdornment,
    InputLabel,
    TextField,
    Typography,
  } from "@mui/material";
  import { useDispatch, useSelector } from "react-redux";
  import MarkunreadMailboxOutlinedIcon from "@mui/icons-material/MarkunreadMailboxOutlined";
  import LocationCityOutlinedIcon from "@mui/icons-material/LocationCityOutlined";
  import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
  import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
  import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
  import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
  import PasswordOutlinedIcon from "@mui/icons-material/PasswordOutlined";
  import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
  import CreditScoreOutlinedIcon from "@mui/icons-material/CreditScoreOutlined";
  
  import DefaultButton from "../DefaultButton/DefaultButton";
  import { useState } from "react";
  import { handleError } from "../../utils/handleInputError";
  import { autoCloseAlert } from "../../utils/alerts";
  import { createOrder } from "../../redux/actions/orderActions";
  import { clearUserCart } from "../../redux/actions/cartActions";
  import Loader from "../Loader/Loader";
  
  const regexAddress = /^(?=.*[a-zA-Z#-])(?!(.*\s{2,}))[a-zA-Z0-9\s#-]{5,}$/;
  const regexZipCode = /^[0-9]{4}$/;
  const regexCardNumber = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/;
  const regexExpirationDate = /^(0[1-9]|1[0-2])\/(2[4-9])$/;
  const regexCvc = /^[0-9]{3}$/;
  
  const ShippingForm = ({ total }) => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.user);
    const { userCart } = useSelector((state) => state.cart);
    const { loading } = useSelector((state) => state.order);
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState(false);
    const [city, setCity] = useState("");
    const [cityError, setCityError] = useState(false);
    const [zipCode, setZipCode] = useState("");
    const [zipCodeError, setZipCodeError] = useState(false);
    const [cardNumber, setCardNumber] = useState("");
    const [cardNumberError, setCardNumberError] = useState(false);
    const [expirationDate, setExpirationDate] = useState("");
    const [expirationDateError, setExpirationDateError] = useState(false);
    const [cvc, setCvc] = useState("");
    const [cvcError, setCvcError] = useState(false);
  
    const handleSubmit = () => {
      if (
        !address ||
        !city ||
        !zipCode ||
        !cardNumber ||
        !expirationDate ||
        !cvc
      ) {
        return autoCloseAlert(
          "Por favor, rellena el formulario correctamente",
          "error"
        );
      }
  
      const order = {
        userAddress: { address, city, zipCode },
        creditCard: { cardNumber, expirationDate, cvc },
        total,
        products: userCart,
      };
  
      dispatch(createOrder(order))
        .unwrap()
        .then(() => {
          autoCloseAlert("¡Gracias por tu compra!", "success");
          dispatch(clearUserCart());
        })
        .catch((err) => {
          autoCloseAlert(err.message, "error");
        });
    };
  
    return (
      <>
        {loading && <Loader />}
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            sx={{
              mb: 2,
              fontWeight: "bolder !important",
              color: "#333333",
            }}
          >
            Información de envío
          </Typography>
          <FormControl fullWidth sx={{ m: 1 }} variant="filled" size="small">
            <InputLabel htmlFor="userName">Nombre cliente</InputLabel>
            <FilledInput
              id="userName"
              disabled
              value={user?.firstname + " " + user?.lastname}
              endAdornment={
                <InputAdornment position="end">
                  <PersonOutlineOutlinedIcon />
                </InputAdornment>
              }
            />
          </FormControl>
  
          <FormControl fullWidth sx={{ m: 1 }} variant="filled" size="small">
            <InputLabel htmlFor="userEmail">Email cliente</InputLabel>
            <FilledInput
              id="userEmail"
              disabled
              value={user?.email}
              endAdornment={
                <InputAdornment position="end">
                  <EmailOutlinedIcon />
                </InputAdornment>
              }
            />
          </FormControl>
  
          <Typography
            variant="h5"
            sx={{
              mt: 2,
              mb: 1,
              color: "#333333",
              fontWeight: "bolder !important",
              alignSelf: "start",
            }}
          >
            Dirección :
          </Typography>
          <TextField
            size="small"
            fullWidth
            label="Calle/Piso/Dpto*"
            variant="outlined"
            onChange={(e) =>
              handleError(e, setAddress, setAddressError, regexAddress)
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <HomeOutlinedIcon />
                </InputAdornment>
              ),
              inputProps: { maxLength: 40 },
            }}
            value={address}
            error={addressError}
            color={addressError ? "" : "success"}
            helperText={addressError ? "Dirección inválida" : ""}
          />
          <TextField
            size="small"
            fullWidth
            label="Ciudad*"
            variant="outlined"
            onChange={(e) => handleError(e, setCity, setCityError, regexAddress)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <LocationCityOutlinedIcon />
                </InputAdornment>
              ),
              inputProps: { maxLength: 40 },
            }}
            sx={{ my: 3 }}
            value={city}
            error={cityError}
            color={cityError ? "" : "success"}
            helperText={cityError ? "Nombre de ciudad inválida" : ""}
          />
          <TextField
            size="small"
            fullWidth
            label="CP*"
            variant="outlined"
            onChange={(e) =>
              handleError(e, setZipCode, setZipCodeError, regexZipCode)
            }
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <MarkunreadMailboxOutlinedIcon />
                </InputAdornment>
              ),
              inputProps: { maxLength: 4 },
            }}
            value={zipCode}
            error={zipCodeError}
            color={zipCodeError ? "" : "success"}
            helperText={zipCodeError ? "Código postal inválido" : ""}
          />
  
          <Typography
            variant="h5"
            sx={{
              mt: 2,
              mb: 1,
              color: "#333333",
              fontWeight: "bolder !important",
              alignSelf: "start",
            }}
          >
            Datos de tarjeta :
          </Typography>
  
          <FormControl fullWidth sx={{ m: 1 }} variant="filled" size="small">
            <InputLabel
              htmlFor="cardNumber"
              color={cardNumberError ? "error" : "success"}
            >
              {cardNumberError
                ? "Número de tarjeta inválido"
                : "Número de tarjeta"}
            </InputLabel>
            <FilledInput
              id="cardNumber"
              type="text"
              placeholder="XXXX XXXX XXXX XXXX"
              value={cardNumber}
              inputProps={{ maxLength: 16 }}
              color={cardNumberError ? "error" : "success"}
              onChange={(e) =>
                handleError(e, setCardNumber, setCardNumberError, regexCardNumber)
              }
              endAdornment={
                <InputAdornment position="end">
                  <CreditCardOutlinedIcon />
                </InputAdornment>
              }
            />
          </FormControl>
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <FormControl sx={{ width: "45%" }} variant="filled" size="small">
              <InputLabel
                htmlFor="expirationDate"
                color={expirationDateError ? "error" : "success"}
              >
                {expirationDateError
                  ? "Fecha de expiración inválida"
                  : "Fecha de expiración"}
              </InputLabel>
              <FilledInput
                id="expirationDate"
                type="text"
                placeholder="MM/AA"
                value={expirationDate}
                color={expirationDateError ? "error" : "success"}
                onChange={(e) =>
                  handleError(
                    e,
                    setExpirationDate,
                    setExpirationDateError,
                    regexExpirationDate
                  )
                }
                inputProps={{ maxLength: 5 }}
                endAdornment={
                  <InputAdornment position="end">
                    <CalendarMonthOutlinedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
  
            <FormControl sx={{ width: "45%" }} variant="filled" size="small">
              <InputLabel htmlFor="cvc" color={cvcError ? "error" : "success"}>
                {cvcError ? "CVC inválido" : "CVC"}
              </InputLabel>
              <FilledInput
                type="password"
                id="cvc"
                placeholder="XXX"
                value={cvc}
                color={cvcError ? "error" : "success"}
                onChange={(e) => handleError(e, setCvc, setCvcError, regexCvc)}
                inputProps={{ maxLength: 3 }}
                endAdornment={
                  <InputAdornment position="end">
                    <PasswordOutlinedIcon />
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
  
          <DefaultButton
            buttonText="Confirmar pedido"
            styles={{ marginTop: 16 }}
            onclick={handleSubmit}
            icon={<CreditScoreOutlinedIcon sx={{ mr: 1, fontSize: 18 }} />}
          />
        </Grid>
      </>
    );
  };
  
  export default ShippingForm;