// MUI
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

// Icon
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

// Images
import MenShoes from "../../assets/images/Men's-shoesen.png";
import WomenShoes from "../../assets/images/Women's-shoesen.jpg";
import MenShoesar from "../../assets/images/Men's-shoesar.png";
import WomenShoesar from "../../assets/images/Women's-shoesar.png";

// Components
import Slide from "./Slide";

// i18n
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const shoes = isArabic
    ? [{ img: MenShoesar }, { img: WomenShoesar }]
    : [{ img: MenShoes }, { img: WomenShoes }];

  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        mt: 3,
        flexDirection: isArabic ? "row-reverse" : "row",
      }}
    >
      <Slide />

      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
            minWidth: "26.5%",
          },
        }}
      >
        {shoes.map((item) => (
          <Box sx={{ position: "relative" }} key={item.img}>
            <img width={"100%"} src={item.img} alt="shoes" />
            <Stack
              sx={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                left: isArabic ? "auto" : "15px",
                right: isArabic ? "15px" : "auto",
                textAlign: isArabic ? "right" : "left",
              }}
            >
              <Typography
                variant="caption"
                sx={{ color: "#2B3445", fontSize: "18px" }}
              >
                {t("NEW ARRIVALS")}
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#2B3445", lineHeight: "12px", mt: 1 }}
              >
                {t("SUMMER")}
              </Typography>

              <Typography
                variant="h6"
                sx={{ color: "#2B3445", lineHeight: "12px", mt: 1, my: 2 }}
              >
                {t("SALE 20% OFF")}
              </Typography>

              <Link
                href="#"
                underline="none"
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: isArabic ? "flex-end" : "flex-start",
                  gap: "10px",
                  transition: "0.2s",
                  ":hover": { color: "#D23F57" },
                }}
              >
                {t("Shop Now")}
                {!isArabic && <ArrowForwardIcon sx={{ fontSize: "13px" }} />}
                {isArabic && (
                  <ArrowForwardIcon
                    sx={{
                      fontSize: "13px",
                      transform: "rotate(180deg)",
                    }}
                  />
                )}
              </Link>
            </Stack>
          </Box>
        ))}
      </Box>
    </Container>
  );
}
