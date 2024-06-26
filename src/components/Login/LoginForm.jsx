import {
  Avatar,
  CssBaseline,
  TextField,
  Box,
  Typography,
  Container,
  FormControl,
} from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleError } from "../../utils/handleInputError.js";
import { useDispatch } from "react-redux";
import { getUser, loginUser } from "../../redux/actions/userActions.js";
import { autoCloseAlert } from "../../utils/alerts.js";

import backgroundImage from "../../assets/images/login.jpg";
import DefaultButton from "../DefaultButton/DefaultButton.jsx";

const confIcon = {
  position: "absolute",
  right: 10,
  top: 30,
  cursor: "pointer",
};

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
      return autoCloseAlert(
        "Por favor, rellena el formulario correctamente",
        "error"
      );

    dispatch(loginUser({ email, password }))
      .unwrap()
      .then(() => {
        autoCloseAlert("BIENVENIDO", "success");
        navigate("/");
        dispatch(getUser());
      })
      .catch((error) => {
        autoCloseAlert(error.message, "error");
      });
  };

  return (
    <>
      <CssBaseline />
      <Container
        maxWidth={false}
        sx={{
          position: 'relative',
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: 'blur(5px)',
            zIndex: -1,
          }
        }}
      >
        <Box  
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#f2f2f2",
            borderRadius: 2,
            color: "gray",
          }}
        >
          <Avatar sx={{ m: 2, bgcolor: "#0050f0" }}>
            <LoginIcon sx={{ color: "#fff" }} />
          </Avatar>
          <Typography sx={{color:"#333"}} variant="h5">
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
              onChange={(e) =>
                handleError(e, setEmail, setEmailError, strongEmailRegex)
              }
              value={email}
              error={emailError}
              color={emailError ? "" : "primary"}
              helperText={emailError ? "Email inválido" : ""}
              sx={{
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
                sx={{
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
                }}
              />
              {showPassword ? (
                <VisibilityOff
                  sx={confIcon}
                  onClick={handleClickShowPassword}
                />
              ) : (
                <Visibility sx={confIcon} onClick={handleClickShowPassword} />
              )}
            </FormControl>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <DefaultButton
                buttonText="Iniciar Sesion"
                onclick={handleSubmit}
                styles={{ margin: "1rem 0" }}
              />
            </Box>
            <Box>
              <Typography>
                No tienes una cuenta?
                <Link
                  to="/register"
                  style={{
                    textDecoration: "none",
                    color: "#0050f0",
                    fontWeight: "bolder",
                    marginLeft: 10,
                  }}
                >
                  Regístrate aquí
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default LoginForm;