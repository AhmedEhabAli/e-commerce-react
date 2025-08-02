// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./Slide.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

// MUI
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

// Images
import Slide1 from "../../assets/images/Swiper-1en.jpg";
import Slide2 from "../../assets/images/Swiper-2en.jpg";
import Slidear1 from "../../assets/images/Swiper-1ar.jpg";
import Slidear2 from "../../assets/images/Swiper-2ar.jpg";

// i18n
import { useTranslation } from "react-i18next";

export default function Slide() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const slider = isArabic
    ? [
        { text: t("MEN"), img: Slidear1 },
        { text: t("WOMEN"), img: Slidear2 },
      ]
    : [
        { text: t("MEN"), img: Slide1 },
        { text: t("WOMEN"), img: Slide2 },
      ];

  return (
    <Swiper
      pagination={{
        dynamicBullets: true,
      }}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
    >
      {slider.map((item) => (
        <SwiperSlide key={item.img} className="Hide">
          <img src={item.img} alt="Slide" />
          <Box
            sx={{
              [theme.breakpoints.up("sm")]: {
                position: "absolute",
                left: isArabic ? "auto" : "10%",
                right: isArabic ? "10%" : "auto",
                textAlign: isArabic ? "right" : "left",
              },
              [theme.breakpoints.down("sm")]: {
                pt: 4,
                padding: 6,
                textAlign: isArabic ? "right" : "left",
              },
            }}
          >
            <Typography variant="h6" color={"#222"}>
              {t("LIFESTYLE COLLECTION")}
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: "#222", fontWeight: 600, my: 1 }}
            >
              {item.text}
            </Typography>

            <Stack
              sx={{
                justifyContent: {
                  xs: "center",
                  sm: isArabic ? "flex-end" : "flex-start",
                },
              }}
              direction={"row"}
              alignItems={"center"}
            >
              <Typography variant="h5" mr={0.5} color={"#333"}>
                {t("SALE UP TO")}
              </Typography>
              <Typography variant="h5" color={"#D23F57"}>
                20% {t("OFF")}
              </Typography>
            </Stack>

            <Typography
              variant="body1"
              sx={{ color: "#000", fontWeight: 400, my: 1 }}
            >
              {t("Get Free Shipping on orders over $100")}
            </Typography>

            <Button
              sx={{
                px: 5,
                py: 1,
                mt: 2,
                backgroundColor: "#222",
                boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                color: "#fff",
                borderRadius: "1px",
                "&:hover": {
                  bgcolor: "#151515",
                  boxShadow: "0px 4px 16px rgba(43, 52, 69, 0.1)",
                },
              }}
              variant="contained"
            >
              {t("shop now")}
            </Button>
          </Box>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
