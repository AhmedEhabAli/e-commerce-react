// MUI
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Link } from "react-router-dom";

// Images
import about from "../../assets/images/About.jpg";

// Icons
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import FavoriteIcon from "@mui/icons-material/Favorite";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";

// i18n
import { useTranslation } from "react-i18next";

export default function About() {
  const isLargeScreen = useMediaQuery("(min-width:900px)");
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const aboutInfo = [
    {
      icon: <ThumbUpIcon fontSize="large" color="primary" />,
      text: "Quality",
      subtext: "We offer only the best products, carefully curated and tested",
    },
    {
      icon: <FavoriteIcon fontSize="large" color="primary" />,
      text: "Customer Support",
      subtext: "We are dedicated to providing exceptional service and support",
    },
    {
      icon: <SwapHorizOutlinedIcon fontSize="large" color="primary" />,
      text: "Easy Returns",
      subtext: "Hassle-free returns and replacements within 14 days.",
    },
  ];

  return (
    <Container
      sx={{
        py: 3,
        direction: isArabic ? "rtl" : "ltr",
        textAlign: isArabic ? "right" : "left",
        fontFamily: isArabic
          ? "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif, 'Cairo', 'Almarai'"
          : "Roboto, Arial, sans-serif",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          fontWeight: "bold",
          fontSize: isArabic ? 28 : 24,
          letterSpacing: isArabic ? 1 : 0.5,
        }}
      >
        {t("Who We Are / About Us")}
      </Typography>
      <Stack spacing={5}>
        <Box sx={{ borderRadius: 2, overflow: "hidden", boxShadow: 3 }}>
          <img
            width="100%"
            src={about}
            alt={t("about")}
            style={{ display: "block", borderRadius: 8 }}
          />
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mt: 3,
              fontSize: isArabic ? 26 : 24,
              letterSpacing: isArabic ? 1 : 0.5,
            }}
          >
            {t("Our Story")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              mt: 1.5,
              lineHeight: 1.7,
              fontSize: isArabic ? 18 : 16,
              letterSpacing: isArabic ? 0.5 : 0,
            }}
          >
            {t(
              "We started this company with a simple idea to make online shopping better for everyone. Frustrated with the lack of qualify products and subpar customer service, we set out to create a store that puts the customer first."
            )}
          </Typography>
          <Button
            variant="contained"
            component={Link}
            to="/#item"
            sx={{
              mt: 4,
              py: 1.5,
              px: 5,
              borderRadius: 2,
              textTransform: "capitalize",
              fontSize: 16,
              alignSelf: isArabic ? "flex-end" : "flex-start",
            }}
          >
            {t("explore our products")}
          </Button>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mt: 5,
              fontSize: isArabic ? 26 : 24,
              letterSpacing: isArabic ? 1 : 0.5,
            }}
          >
            {t("Our Values")}
          </Typography>
          <Stack
            direction={isLargeScreen ? "row" : "column"}
            justifyContent="center"
            alignItems="center"
            spacing={5}
            mt={3}
            sx={{ textAlign: "center" }}
          >
            {aboutInfo.map((item) => (
              <Box
                key={item.text}
                sx={{
                  maxWidth: 280,
                  px: 2,
                }}
              >
                <Box sx={{ mb: 1 }}>{item.icon}</Box>
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="text.primary"
                  sx={{
                    fontSize: isArabic ? 20 : 18,
                    letterSpacing: isArabic ? 0.5 : 0,
                  }}
                >
                  {t(item.text)}
                </Typography>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    fontSize: isArabic ? 16 : 14,
                    letterSpacing: isArabic ? 0.3 : 0,
                    mt: 0.5,
                  }}
                >
                  {t(item.subtext)}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Box>

        <Box>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              mt: 5,
              fontSize: isArabic ? 26 : 24,
              letterSpacing: isArabic ? 1 : 0.5,
            }}
          >
            {t("Our Mission")}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: "bold",
              mt: 1.5,
              lineHeight: 1.7,
              fontSize: isArabic ? 18 : 16,
              letterSpacing: isArabic ? 0.5 : 0,
            }}
          >
            {t(
              "Our mission is to provide an exceptional online shopping experience by offering unique, high-quality products and outstanding customer service. We are always looking for ways to innovate."
            )}
          </Typography>
        </Box>
      </Stack>
    </Container>
  );
}
