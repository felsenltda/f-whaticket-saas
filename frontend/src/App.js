import React, { useState, useEffect } from "react";
import Routes from "./routes";
import "react-toastify/dist/ReactToastify.css";

import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { ptBR } from "@material-ui/core/locale";

const App = () => {
  const [locale, setLocale] = useState();

  const theme = createTheme(
    {
      scrollbarStyles: {
        "&::-webkit-scrollbar": {
          width: "8px",
          height: "8px",
        },
        "&::-webkit-scrollbar-thumb": {
          boxShadow: "inset 0 0 6px rgba(170, 0, 126, 126)",
          backgroundColor: "#2B5A80",
        },
      },
      palette: {
        type: "dark", // Definir o tipo de paleta como escuro (dark)
        primary: { main: "#444444" }, // Cor primária (vermelho)
        secondary: { main: "#333333" }, // Cor secundária (roxo)
      },
      barraSuperior: {
        primary: {
          main:
            "linear-gradient(to right, #444444 100%, #444444 26%, #444444 100%)",
        },
        secondary: { main: "#ffffff" }, // Cor da barra superior (branco)
      },
      barraLateral: {
        primary: { main: "#1A1A1A" }, // Cor da barra lateral (cinza escuro)
      },
      icons: {
        primary: { main: "#FFFFFF" }, // Cor dos ícones (branco)
      },
      textColorMenu: {
        primary: { main: "#FFFFFF" }, // Cor do texto do menu (branco)
        secondary: { main: "#FFFFFF" }, // Cor secundária do texto do menu (branco)
      },
    },
    locale
  );

  useEffect(() => {
    const i18nlocale = localStorage.getItem("i18nextLng");
    const browserLocale =
      i18nlocale.substring(0, 2) + i18nlocale.substring(3, 5);

    if (browserLocale === "ptBR") {
      setLocale(ptBR);
    }
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;