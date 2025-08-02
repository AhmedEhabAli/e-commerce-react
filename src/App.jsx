import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import "./i18n";

// Component
import TopHeader from "./components/header/TopHeader";
import MiddleHeader from "./components/header/MiddleHeader";
import BottomHeader from "./components/header/BottomHeader";
import Hero from "./components/hero/Hero";
import Card from "./components/hero/Card";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import About from "./components/about/About";
import NotFound from "./components/eror404/NotFound";
import ScrollToTop from "./components/scroll/ScrollToTop";

import "./index.css";

function App() {
  const [themeBase, colorMode] = useMode();

  const mergedTheme = createTheme({
    ...themeBase,
    typography: {
      ...themeBase.typography,
      fontFamily: "IBM",
    },
  });

  function Content() {
    const location = useLocation();
    const allowedPaths = ["/", "/contact", "/about"];
    const hideHeaderFooter = !allowedPaths.includes(location.pathname);

    return (
      <>
        {!hideHeaderFooter && (
          <>
            <TopHeader />
            <MiddleHeader />
            <BottomHeader />
          </>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Card />
                <Main />
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {!hideHeaderFooter && <Footer />}
      </>
    );
  }

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={mergedTheme}>
        <CssBaseline />
        <Router>
          <Content />
          <ScrollToTop />
        </Router>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
