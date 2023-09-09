import React, { useState, useContext } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles, createTheme, ThemeProvider } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { AuthContext } from "../../context/Auth/AuthContext";
import logo from "../../assets/logo.png"; // Seu logo
import background from "../../assets/fundo.jpg"; // Sua imagem de fundo

const theme = createTheme({
  palette: {
    type: "dark", // Tema escuro
    primary: {
      main: "#2196F3", // Cor primária (azul)
    },
  },
});

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    background: `url(${background}) no-repeat center`,
    backgroundSize: "cover",
  },
  paper: {
    width: "40%", // Largura da caixa de login
    padding: theme.spacing(4), // Aumentando o espaçamento interno
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    backgroundColor: "rgba(0, 0, 0, 0.7)", // Fundo da caixa de login
  },
  logo: {
    maxWidth: "100%", // Ajuste automático da largura do logo
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
    color: "#fff",
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
      <div className={classes.root}>
        <Container component="main" maxWidth="xs" className={classes.paper}>
          <div>
            <img className={classes.logo} src={logo} alt="Logo" />
          </div>
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
          <Typography variant="body2" className={classes.copyright}>
            &copy; {currentYear} Felsen Gestão e Tecnologia - Todos os direitos reservados
          </Typography>
        </Container>
      </div>
    </ThemeProvider>
  );
};

export default Login;
