import { Box, Typography, Button } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function NotFound() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const handleBackHome = () => {
    window.location.href = "/";
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      minHeight="80vh"
      textAlign="center"
      px={2}
      sx={{
        direction: isArabic ? "rtl" : "ltr",
        textAlign: isArabic ? "right" : "center",
      }}
    >
      <Typography variant="h2" color="primary" gutterBottom>
        {t("404 Not Found")}
      </Typography>
      <Typography variant="h5" gutterBottom>
        {t("Sorry, the page you are looking for does not exist.")}
      </Typography>
      <Button
        variant="contained"
        color="primary"
        onClick={handleBackHome}
        sx={{ mt: 4 }}
      >
        {t("Back to Home")}
      </Button>
    </Box>
  );
}
