// React
import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";

// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Fade from "@mui/material/Fade";

// Icons
import DarkModeOutlined from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlined from "@mui/icons-material/LightModeOutlined";

// Theme context
import { ColorModeContext } from "../../theme";

// External Libraries
import { useTranslation } from "react-i18next";

const announcements = [
  { text: "Free Shipping on orders over 100", emoji: "🚚" },
  { text: "30 Days Money Back guarantee", emoji: "💰" },
  { text: "20% off on your first order", emoji: "🔥" },
];

export default function TopHeader() {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();

  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeIn, setFadeIn] = useState(true);

  // Language & i18n
  const { t, i18n } = useTranslation();
  const [locale, setLocale] = useState(
    localStorage.getItem("language") || "en"
  );
  const dir = locale === "ar" ? "rtl" : "ltr";
  function handleLanguage() {
    const newLocale = locale === "ar" ? "en" : "ar";
    setLocale(newLocale);
  }
  useEffect(() => {
    i18n.changeLanguage(locale);
    localStorage.setItem("language", locale);
  }, [locale, i18n]);

  useEffect(() => {
    let timeoutId;

    const intervalId = setInterval(() => {
      setFadeIn(false);

      timeoutId = setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % announcements.length);
        setFadeIn(true);
      }, 500);
    }, 3000);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  const { text: announcement, emoji } = announcements[currentIndex];

  return (
    <Box
      sx={{
        bgcolor: "#3e3f42",
        py: "4px",
      }}
      dir={dir}
    >
      <Container>
        <Stack direction={"row"} alignItems={"center"}>
          <Box flexGrow={1} />

          <Fade in={fadeIn} timeout={500} key={announcement}>
            <Box display="flex" alignItems="center" sx={{ gap: 0.5 }}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: 300,
                  color: "#fff",
                  mb: 0.5,
                }}
                variant="body2"
              >
                {emoji}
              </Typography>
              <Typography
                sx={{
                  fontSize: "12px",
                  fontWeight: 300,
                  color: "#fff",
                }}
                variant="body2"
              >
                {t(announcement)}
              </Typography>
            </Box>
          </Fade>

          <Box flexGrow={1} />

          {/* Dark Mode Toggle */}
          <IconButton
            onClick={() => {
              localStorage.setItem(
                "mode",
                theme.palette.mode === "dark" ? "light" : "dark"
              );
              colorMode.toggleColorMode();
            }}
            color="inherit"
          >
            {theme.palette.mode === "light" ? (
              <LightModeOutlined sx={{ fontSize: "16px", color: "#fff" }} />
            ) : (
              <DarkModeOutlined sx={{ fontSize: "16px" }} />
            )}
          </IconButton>

          {/* Language Menu */}

          <IconButton
            onClick={handleLanguage}
            sx={{
              fontSize: "13px",
              color: theme.palette.mode === "dark" ? "light" : "white",
            }}
          >
            {locale === "en" ? "Arabic" : "انجليزي"}
          </IconButton>
        </Stack>
      </Container>
    </Box>
  );
}
