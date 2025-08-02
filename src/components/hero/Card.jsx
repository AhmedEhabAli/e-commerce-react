// MUI
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";

// Icon
import BoltIcon from "@mui/icons-material/Bolt";
import CreditCardOutlinedIcon from "@mui/icons-material/CreditCardOutlined";
import WorkspacePremiumOutlinedIcon from "@mui/icons-material/WorkspacePremiumOutlined";
import HeadsetMicOutlinedIcon from "@mui/icons-material/HeadsetMicOutlined";

// i18n
import { useTranslation } from "react-i18next";

const card = [
  {
    icon: BoltIcon,
    text: "Fast Delivery",
    subTitle: "Quick and reliable delivery.",
  },
  {
    icon: WorkspacePremiumOutlinedIcon,
    text: "Premium Quality",
    subTitle: "Top-notch products guaranteed.",
  },
  {
    icon: HeadsetMicOutlinedIcon,
    text: "24/7 Support",
    subTitle: "Always here to help you.",
  },
  {
    icon: CreditCardOutlinedIcon,
    text: "Secure Payments",
    subTitle: "Safe and easy transactions.",
  },
];

export default function Card() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery("(min-width:600px)");
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Container>
      <Stack
        direction={isLargeScreen ? "row" : "column"}
        mt={2}
        sx={{
          flexWrap: "wrap",
          gap: 3,
          background: theme.palette.mode === "light" ? "white" : "#2d2d2d",
          direction: isArabic ? "rtl" : "ltr",
        }}
        divider={
          isLargeScreen ? <Divider orientation="vertical" flexItem /> : null
        }
      >
        {card.map((item) => (
          <Box
            key={item.text}
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: isArabic ? "flex-start" : "flex-start",
              width: isLargeScreen ? "250px" : "100%",
              py: 1.6,
              gap: 2,
              flexGrow: 1,
              borderBottom: {
                xs: "1px solid rgba(73, 73, 73, 0.39)",
                sm: "none",
              },
              px: { xs: 1.6, sm: 0, lg: 0 },
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "translateY(-5px)",
              },
            }}
          >
            <item.icon sx={{ fontSize: 32 }} />

            <Box sx={{ textAlign: isArabic ? "right" : "left" }}>
              <Typography variant="h6">{t(item.text)}</Typography>
              <Typography
                variant="body2"
                sx={{ color: theme.palette.text.secondary }}
              >
                {t(item.subTitle)}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Container>
  );
}
