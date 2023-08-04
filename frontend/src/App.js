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
        '&::-webkit-scrollbar': {
          width: '8px',
          height: '8px',
        },
        '&::-webkit-scrollbar-thumb': {
          boxShadow: 'inset 0 0 6px rgba(170, 0, 126, 126)',
          backgroundColor: '#2B5A80',
        },
      },
      palette: {
        primary: { main: "#110142" },
        third: { main: "#E75A4D" }
      },

      barraSuperior: {
        primary: { main: "linear-gradient(to right, #E75A4D 100%, #E75A4D 26%, #E75A4D 100%)" },
        secondary: { main: "#ffffff" },
      },

      barraLateral: {
        primary: { main: "#F7F6F5" },
      },

      icons: {
        primary: { main: "#E75A4D" }
      },
      textColorMenu: {
        primary: { main: "#FFFFFF" },
        secondary: { main: "#FFFFFF" }
      
      },    },
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
