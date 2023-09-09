import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { AuthContext } from "../../context/Auth/AuthContext";
import logo from "../../assets/zapsimples.png";

const theme = createTheme({
  palette: {
    type: "dark", // Tema escuro
    primary: {
      main: "#2196F3", // Cor primária (azul)
    },
  },
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(4), // Aumentando o espaçamento interno
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
  logo: {
    maxWidth: "150px", // Limite de tamanho para o logo
    marginBottom: "20px", // Espaçamento entre o logo e o texto
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  loginText: {
    fontSize: "18px", // Redução do tamanho do texto "Faça login"
  },
  copyright: {
    marginTop: "20px", // Espaçamento entre o texto de login e o copyright
    textAlign: "center",
  },
}));

const Login = () => {
  const classes = useStyles();

  const [user, setUser] = useState({ email: "", password: "" });

  const { handleLogin } = useContext(AuthContext);

  const handleChangeInput = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(user);
  };

  const currentYear = new Date().getFullYear(); // Obtém o ano corrente

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <img
            className={classes.logo}
            src={logo}
            alt="Whats"
          />
          <Typography component="h1" variant="h5" className={classes.loginText}>
            Faça login
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email"
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
              label="Senha"
              type="password"
              id="password"
              value={user.password}
              onChange={handleChangeInput}
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Entrar
            </Button>
          </form>
          <Typography variant="body2" color="textSecondary" className={classes.copyright}>
            &copy; {currentYear} Felsen Gestão e Tecnologia - Todos os direitos reservados
          </Typography>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Login;