// MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

// Icon
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import IconButton from "@mui/material/IconButton";

// i18
import { useTranslation } from "react-i18next";

const shopLinks = ["home", "men", "women"];

const contactInfo = [
  {
    icon: <PlaceOutlinedIcon />,
    text: "123 Main St, Anytown, USA",
  },
  {
    icon: <LocalPhoneOutlinedIcon />,
    text: "123-456-7890",
  },
  {
    icon: <EmailOutlinedIcon />,
    text: "info@estore.com",
  },
];

const socialLinks = [
  {
    icon: <FacebookIcon />,
    name: "Facebook",
    url: "https://facebook.com/estore",
  },
  {
    icon: <InstagramIcon />,
    name: "Instagram",
    url: "https://instagram.com/estore",
  },
  {
    icon: <TwitterIcon />,
    name: "Twitter",
    url: "https://twitter.com/estore",
  },
];

export default function Footer() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <Container
      sx={{
        mt: 8,
        mb: 4,
        direction: isArabic ? "rtl" : "ltr",
        textAlign: isArabic ? "right" : "left",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "flex-start", md: "flex-start" }}
        spacing={4}
      >
        {/* Company Info */}
        <Box sx={{ maxWidth: { xs: "100%", md: 300 } }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            {t("eStore")}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ lineHeight: 1.6 }}
          >
            {t(
              "eStore is a leading e-commerce platform that provides a wide range of products and services to its customers."
            )}
          </Typography>
        </Box>

        {/* Shop Links */}
        <Box sx={{ minWidth: 120 }}>
          <Typography
            variant="h6"
            sx={{ mb: 2, fontWeight: "bold", textTransform: "capitalize" }}
          >
            {t("Shop")}
          </Typography>
          <Stack spacing={1}>
            {shopLinks.map((item) => (
              <Typography
                key={item}
                variant="body2"
                color="text.secondary"
                sx={{
                  textTransform: "capitalize",
                  cursor: "pointer",
                  "&:hover": { color: "primary.main" },
                }}
              >
                {t(item)}
              </Typography>
            ))}
          </Stack>
        </Box>

        {/* Contact Info */}
        <Box sx={{ minWidth: 200 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            {t("Contact Us")}
          </Typography>
          <Stack spacing={1.5}>
            {contactInfo.map((item) => (
              <Stack
                key={item.text}
                direction="row"
                spacing={1.5}
                alignItems="center"
              >
                <Box
                  sx={{
                    color: "primary.main",
                    width: 24,
                    height: 24,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </Box>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    lineHeight: 1.5,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {t(item.text)}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>

        {/* Social Media */}
        <Box sx={{ minWidth: 150 }}>
          <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
            {t("Follow Us")}
          </Typography>
          <Stack direction="row" spacing={1}>
            {socialLinks.map(({ icon, name, url }) => (
              <IconButton
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t(name)}
                sx={{
                  color: "text.secondary",
                  "&:hover": {
                    color: "primary.main",
                    transform: "translateY(-2px)",
                    transition: "all 0.3s ease",
                  },
                }}
              >
                {icon}
              </IconButton>
            ))}
          </Stack>
        </Box>
      </Stack>

      {/* Divider and Copyright */}
      <Box
        sx={{
          mt: 4,
          pt: 3,
          borderTop: 1,
          borderColor: "divider",
          textAlign: "center",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          {t("© 2025 eStore. All rights reserved.")}
        </Typography>
      </Box>
    </Container>
  );
}
