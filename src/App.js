import "./App.css";
import "./styles/AppBar.css";
import "./styles/TextBox.css";
import "./styles/Background.css";
import "./styles/AboutUs.css";
import "./styles/Footer.css";
import "./styles/Arrows.css";
import "./styles/Carousel.css";
import ButtonAppBar from "./components/AppBar";
import Background from "./components/Background";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#f5a142",
      main: "#008000",
      mainGradient: "linear-gradient(to right, tomato, cyan)",
    },
    secondary: {
      main: "#ff4081",
    },
    divider: "#ffffff",
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Background></Background>
        <ButtonAppBar></ButtonAppBar>
        <AboutUs></AboutUs>
        <Footer></Footer>
      </ThemeProvider>
    </>
  );
}

export default App;
