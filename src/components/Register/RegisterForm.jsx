import {
  Avatar,
  CssBaseline,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  FormControl,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import { handleError } from "../../utils/handleInputError";
import clientAxios from "../../utils/clientAxios";
import { autoCloseAlert } from "../../utils/alerts";
import Loader from "../Loader/Loader";

import backgroundImage from "../../assets/images/login.jpg";
import DefaultButton from "../DefaultButton/DefaultButton";

const strongPasswordRegex =
  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
const strongEmailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const firstnameRegex = /^[a-zA-Z]{3,15}$/;
const lastnameRegex = /^[a-zA-Z ]{2,30}$/;

const confIcon = {
  position: "absolute",
  right: 10,
  top: 15,
  cursor: "pointer",
};

const colorsLabel={
  "& .MuiInputBase-root": {
    color: "gray",
  },
  "& .MuiInputLabel-root": {
    color: "gray",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#0000ff",
    },
    "&:hover fieldset": {
      borderColor: "#0000ff",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff0000",
    },
  },
}
const RegisterForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [firstnameError, setFirstnameError] = useState(false);
  const [lastnameError, setLastnameError] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleClickShowConfirmPassword = () =>
    setShowConfirmPassword((show) => !show);

  const handleErrorConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);

    if (password !== e.target.value) {
      return setConfirmPasswordError(true);
    } else {
      setConfirmPasswordError(false);
    }
  };

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();

    
    if (
      firstnameError || !firstname ||
      lastnameError || !lastname ||
      emailError || !email ||
      passwordError || !password ||
      confirmPasswordError
    ) {
      setLoading(false);
      return autoCloseAlert("Por favor, rellena bien el formulario", "error");
    }
    
    if (password !== confirmPassword) setLoading(false);
    setConfirmPasswordError(true);

    try {
      await clientAxios
        .post(`/users/create`, { firstname, lastname, email, password })
        .then((res) => alert(res.data.message));
      setFirstname("");
      setLastname("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      const errorMsg = error.errors?.[0]?.msg;
      autoCloseAlert(errorMsg || "Ups, ocurrió un error", "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {loading && <Loader />}
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: '100dvh',
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(5px)",
            zIndex: -1,
          },
        }}
      >
        <Box
          maxWidth="sm"
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#f2f2f2",
            borderRadius: 2,
            color: "gray",
            my: 2
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "#0050f0" }}>
            <PersonAddIcon sx={{ color: "#fff" }} />
          </Avatar>
          <Typography sx={{color:"#333333"}} variant="h5">Registrarse</Typography>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="nombre"
                  label="Nombre"
                  autoComplete="name"
                  name="nombre"
                  onChange={(e) =>
                    handleError(
                      e,
                      setFirstname,
                      setFirstnameError,
                      firstnameRegex
                    )
                  }
                  value={firstname}
                  error={firstnameError}
                  color={firstnameError ? "" : "success"}
                  helperText={firstnameError ? "Nombre inválido" : ""}
                  sx={colorsLabel}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastname"
                  label="Apellido"
                  name="lastname"
                  onChange={(e) =>
                    handleError(e, setLastname, setLastnameError, lastnameRegex)
                  }
                  value={lastname}
                  error={lastnameError}
                  color={lastnameError ? "" : "success"}
                  helperText={lastnameError ? "Apellido inválido" : ""}
                  sx={colorsLabel}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  autoComplete="email"
                  name="email"
                  onChange={(e) =>
                    handleError(e, setEmail, setEmailError, strongEmailRegex)
                  }
                  value={email}
                  error={emailError}
                  color={emailError ? "" : "success"}
                  helperText={emailError ? "Email inválido" : ""}
                  sx={colorsLabel}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required variant="outlined">
                  <TextField
                    id="password"
                    type={showPassword ? "text" : "password"}
                    label="Contraseña*"
                    autoComplete="current-password"
                    value={password}
                    error={passwordError}
                    color={passwordError ? "" : "success"}
                    helperText={
                      passwordError
                        ? "La contraseña debe tener al menos 8 carácteres y contener al menos una letra mayúscula, una letra minúscula y un número"
                        : ""
                    }
                    onChange={(e) =>
                      handleError(
                        e,
                        setPassword,
                        setPasswordError,
                        strongPasswordRegex
                      )
                    }
                    sx={colorsLabel}
                  />
                  {showPassword ? (
                    <VisibilityOff
                      sx={confIcon}
                      onClick={handleClickShowPassword}
                    />
                  ) : (
                    <Visibility
                      sx={confIcon}
                      onClick={handleClickShowPassword}
                    />
                  )}
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth required variant="outlined">
                  <TextField
                    id="password2"
                    type={showConfirmPassword ? "text" : "password"}
                    autoComplete="current-password"
                    label="Repetir Contraseña*"
                    value={confirmPassword}
                    error={confirmPasswordError}
                    color={confirmPasswordError ? "" : "success"}
                    helperText={
                      confirmPasswordError ? "Las contraseñas no coinciden" : ""
                    }
                    onChange={(e) => handleErrorConfirmPassword(e)}
                    sx={colorsLabel}
                  />
                  {showConfirmPassword ? (
                    <VisibilityOff
                      sx={confIcon}
                      onClick={handleClickShowConfirmPassword}
                      
                    />
                  ) : (
                    <Visibility
                      sx={confIcon}
                      onClick={handleClickShowConfirmPassword}
                    />
                  )}
                </FormControl>
              </Grid>
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DefaultButton
                buttonText="Registrarse"
                onclick={handleSubmit}
                styles={{ margin: "1rem 0" }}
              />
            </Box>
            <Box display="flex" justifyContent="flex-end">
              <Typography>
                Ya tienes una cuenta?
                <Link
                  to="/login"
                  style={{
                    textDecoration: "none",
                    color: "#0050f0",
                    fontWeight: "bolder !important",
                    marginLeft: 10,
                  }}
                >
                  Inicia sesión
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default RegisterForm;