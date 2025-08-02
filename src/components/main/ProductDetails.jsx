import { useState } from "react";

// MUI
import Dialog from "@mui/material/Dialog";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

// Icon
import CloseIcon from "@mui/icons-material/Close";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Images
import women from "../../assets/images/women.webp";

// i18n
import { useTranslation } from "react-i18next";

export default function ProductDetails({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [count, setCount] = useState(0);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {
          minWidth: { md: 800, xs: "100%" },
          padding: 3,
          borderRadius: 2,
          direction: isArabic ? "rtl" : "ltr",
          textAlign: isArabic ? "right" : "left",
        },
      }}
    >
      <IconButton
        onClick={handleClose}
        sx={{
          position: "absolute",
          top: 8,
          right: isArabic ? "auto" : 8,
          left: isArabic ? 8 : "auto",
          ":hover": {
            rotate: "360deg",
            transition: "0.6s",
            color: "red",
          },
        }}
        aria-label={t("close")}
      >
        <CloseIcon />
      </IconButton>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: 4,
          textAlign: isArabic ? "right" : "left",
        }}
      >
        <Box
          sx={{
            flexShrink: 0,
            backgroundColor: "#f9f9f9",
            borderRadius: 2,
            padding: 2,
          }}
        >
          <img
            src={women}
            alt={t("product image")}
            width="280"
            style={{ borderRadius: 10 }}
          />
        </Box>

        <Box
          sx={{
            flexGrow: 1,
            textAlign: { xs: "center", md: isArabic ? "right" : "left" },
          }}
        >
          <Typography variant="h5" fontWeight={600} gutterBottom>
            {t("Women Fashion")}
          </Typography>
          <Typography variant="h6" color="primary" gutterBottom>
            $119
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={2}>
            {t(
              "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, voluptate."
            )}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: {
                xs: "center",
                md: isArabic ? "flex-end" : "flex-start",
                gap: isArabic ? 10 : "",
              },
            }}
          >
            {["womenp", "womenph"].map((item) => (
              <IconButton
                key={item}
                sx={{
                  width: 28,
                  height: 28,
                  borderRadius: "50%",
                  backgroundColor: `#ad3ac2`,
                  border: "2px solid #fff",
                  "&:hover": {
                    backgroundColor: `#ad3ac2`,
                  },
                }}
              />
            ))}

            <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={() => setCount(count > 0 ? count - 1 : 0)}
                sx={{ minWidth: 30, height: 30, padding: 0 }}
                aria-label={t("decrease quantity")}
              >
                –
              </Button>

              <Typography variant="h6" sx={{ width: 30, textAlign: "center" }}>
                {count}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                onClick={() => setCount(count + 1)}
                sx={{ minWidth: 30, height: 30, padding: 0 }}
                aria-label={t("increase quantity")}
              >
                +
              </Button>
            </Stack>
          </Stack>

          <Button variant="contained" size="large" fullWidth sx={{ mt: 2 }}>
            <AddShoppingCartIcon
              fontSize="small"
              sx={{ mr: isArabic ? 0 : 1, ml: isArabic ? 1 : 0 }}
            />
            {t("add to cart")}
          </Button>
        </Box>
      </Box>
    </Dialog>
  );
}
