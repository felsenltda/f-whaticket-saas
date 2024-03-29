import React, { useState, useContext } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Link,
  useTheme,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import { Visibility, VisibilityOff } from "@material-ui/icons";

import { i18n } from "../../translate/i18n";

import { AuthContext } from "../../context/Auth/AuthContext";
import chatImageDark from "../../assets/logologindark.png";
import chatImageLight from "../../assets/logologinwhite.png";

const useStyles = makeStyles((theme) => {
  const logoStyle = {
    width: theme.palette.type === "dark" ? "45%" : "55%", // Manter 45% independente do tema
  };

  return {
    root: {
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
    },
    paper: {
      marginTop: theme.spacing(8),
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      textAlign: "center",
      padding: theme.spacing(2),
      borderRadius: theme.spacing(2),
      backgroundColor: theme.palette.background.paper,
      boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.16)",
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: "100%",
      marginTop: theme.spacing(1),
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    logo: {
      ...logoStyle,
    },
  };
});

const Login = () => {
  const theme = useTheme();
  const classes = useStyles();

  const [user, setUser] = useState({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);

  const { handleLogin } = useContext(AuthContext);

  const handleChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  const chatImage = theme.palette.type === "dark" ? chatImageDark : chatImageLight;

  return (
    <div className={classes.root}>
      <Container component="main" maxWidth="md">
        <CssBaseline />
        <div className={classes.containerWrapper}>
          <Container
            component="div"
            maxWidth="xs"
            className={classes.mobileContainer}
          >
            <div className={classes.paper}>
              <div>
                <img
                  src={chatImage}
                  className={classes.logo}
                  alt={process.env.REACT_APP_TITLE}
                />
              </div>
              <form className={classes.form} noValidate onSubmit={handleSubmit}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label={i18n.t("login.form.email")}
                  name="email"
                  value={user.email}
                  onChange={handleChangeInput}
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label={i18n.t("login.form.password")}
                  id="password"
                  value={user.password}
                  onChange={handleChangeInput}
                  autoComplete="current-password"
                  type={showPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => setShowPassword((e) => !e)}
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  {i18n.t("login.buttons.submit")}
                </Button>
                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link
                      variant="body2"
                      component={RouterLink}
                      to="/signup"
                    >
                      {i18n.t("login.buttons.register")}
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </div>
          </Container>
        </div>
      </Container>
    </div>
  );
};

export default Login;
