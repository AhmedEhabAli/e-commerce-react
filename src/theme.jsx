import { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";
import { grey } from "@mui/material/colors";

const commonPalette = {
  neutral: { main: "#64748B" },
};

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...commonPalette,
    background: {
      default: mode === "light" ? "#F6F9FC" : "#202020",
    },
    favColor: {
      main: mode === "light" ? grey[300] : grey[800],
    },
    text: {
      primary: mode === "light" ? "#2B3445" : "#fff",
    },
  },
});

export const ColorModeContext = createContext({
  toggleColorMode: () => {},
});

export const useMode = () => {
  const storedMode = localStorage.getItem("mode") || "light";
  const [mode, setMode] = useState(storedMode);

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prev) => {
          const nextMode = prev === "light" ? "dark" : "light";
          localStorage.setItem("mode", nextMode);
          return nextMode;
        });
      },
    }),
    []
  );

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return [theme, colorMode];
};
