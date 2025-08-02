// React
import { useState } from "react";

// MUI
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

// Icon
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";

// i18n
import { useTranslation } from "react-i18next";

export default function Register({ onClose }) {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [alignment, setAlignment] = useState("login");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const toggleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const toggleShowConfirmPassword = () => {
    setShowConfirmPassword((show) => !show);
  };

  return (
    <Container maxWidth="sm">
      <Stack
        justifyContent="center"
        alignItems="center"
        width="100%"
        sx={{
          direction: isArabic ? "rtl" : "ltr",
          textAlign: isArabic ? "right" : "left",
        }}
      >
        <Card
          sx={{
            width: "100%",
            textAlign: "center",
            boxShadow: 10,
            borderRadius: 5,
            p: 4,
            position: "relative",
          }}
        >
          <ToggleButtonGroup
            color="primary"
            value={alignment}
            exclusive
            onChange={handleChange}
            aria-label={t("Authentication type")}
            sx={{
              mb: 3,
              "& .MuiToggleButtonGroup-groupedHorizontal": {
                border: 0,
              },
            }}
          >
            <ToggleButton value="login">{t("Login")}</ToggleButton>
            <ToggleButton value="register">{t("Register")}</ToggleButton>
          </ToggleButtonGroup>

          <CardContent>
            <Stack spacing={3}>
              <TextField label={t("Username")} variant="standard" fullWidth />

              <IconButton
                onClick={onClose}
                sx={{
                  position: "absolute",
                  top: -15,
                  right: 10,
                  ":hover": {
                    rotate: "360deg",
                    transition: "0.6s",
                    color: "red",
                  },
                }}
                aria-label={t("Close")}
              >
                <CloseIcon />
              </IconButton>

              {alignment === "register" && (
                <>
                  <TextField
                    label={t("Email")}
                    type="email"
                    variant="standard"
                    fullWidth
                  />
                  <TextField
                    label={t("Phone Number")}
                    type="tel"
                    variant="standard"
                    fullWidth
                  />
                </>
              )}

              <TextField
                label={t("Password")}
                variant="standard"
                fullWidth
                type={showPassword ? "text" : "password"}
                InputProps={{
                  endAdornment: !isArabic && (
                    <InputAdornment position="end">
                      <IconButton
                        onClick={toggleShowPassword}
                        aria-label={
                          showPassword ? t("Hide password") : t("Show password")
                        }
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />

              {alignment === "register" && (
                <TextField
                  label={t("Confirm Password")}
                  variant="standard"
                  fullWidth
                  type={showConfirmPassword ? "text" : "password"}
                  InputProps={{
                    endAdornment: !isArabic && (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={toggleShowConfirmPassword}
                          aria-label={
                            showConfirmPassword
                              ? t("Hide password")
                              : t("Show password")
                          }
                          edge="end"
                        >
                          {showConfirmPassword ? (
                            <VisibilityOff />
                          ) : (
                            <Visibility />
                          )}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
              )}

              <Button
                sx={{
                  textTransform: "capitalize",
                  "&:hover": {
                    background:
                      theme.palette.mode === "light" ? "#5396d96e" : "",
                  },
                }}
                size="medium"
              >
                {alignment === "register" ? t("Register") : t("Login")}
              </Button>
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Container>
  );
}
