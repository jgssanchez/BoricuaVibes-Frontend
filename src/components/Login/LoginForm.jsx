import React, { useState } from "react";
import {
  Avatar,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUser } from "../../redux/actions/userActions";
import wallpaper2 from "../../assets/wallpaper2.jpg";
import "./LoginForm.css";
import clientAxios from "../../utils/clientAxios";

const strongEmailRegex =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password || emailError)
      return alert("Por favor, rellena el formulario correctamente");

    await clientAxios
      .post(`/users/login-user`, { email, password })
      .then(() => {
        navigate("/");
        dispatch(getUser());
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setEmailError(!strongEmailRegex.test(value));
  };

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth="lg"
        className="login-container"
      >
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <img
                src={wallpaper2}
                alt="Login Illustration"
                className="login-illustration"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              className="login-box"
              sx={{
                padding: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                backgroundColor: "#1d3557", // Azul oscuro
                borderRadius: 2,
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: "#e63946" }}> {/* Rojo */}
                <LoginIcon />
              </Avatar>
              <Typography variant="h5" className="login-title">
                Iniciar Sesión
              </Typography>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                sx={{ mt: 1 }}
              >
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  onChange={handleEmailChange}
                  value={email}
                  error={emailError}
                  helperText={emailError ? "Email inválido" : ""}
                  InputProps={{
                    style: { color: "white" },
                  }}
                  InputLabelProps={{
                    style: { color: "#f1faee" }, // Blanco
                  }}
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderColor: "#e63946", // Rojo
                      },
                      "&:hover fieldset": {
                        borderColor: "#457b9d", // Azul claro
                      },
                      "&.Mui-focused fieldset": {
                        borderColor: "#e63946", // Rojo
                      },
                    },
                  }}
                />
                <FormControl fullWidth required variant="outlined">
                  <TextField
                    id="password"
                    margin="normal"
                    required
                    fullWidth
                    value={password}
                    type={showPassword ? "text" : "password"}
                    label="Contraseña"
                    name="password"
                    autoComplete="current-password"
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                      style: { color: "white" },
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            edge="end"
                            sx={{ color: "#e63946" }} // Rojo
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    InputLabelProps={{
                      style: { color: "#f1faee" }, // Blanco
                    }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "& fieldset": {
                          borderColor: "#e63946", // Rojo
                        },
                        "&:hover fieldset": {
                          borderColor: "#457b9d", // Azul claro
                        },
                        "&.Mui-focused fieldset": {
                          borderColor: "#e63946", // Rojo
                        },
                      },
                    }}
                  />
                </FormControl>
                <Box sx={{ display: "flex", justifyContent: "center" }}>
                  <button className="login-button" type="submit">
                    Ingresar
                  </button>
                </Box>
                <Box sx={{ mt: 2 }}>
                  <Typography className="link-to">
                    No tienes una cuenta?
                    <Link
                      to="/register"
                      style={{
                        textDecoration: "none",
                        color: "#e63946", // Rojo
                        fontWeight: "bolder",
                        marginLeft: 10,
                      }}
                    >
                      Regístrate
                    </Link>
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default LoginForm;
