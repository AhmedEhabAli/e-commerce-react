// MUI
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

// Icon
import PlaceOutlinedIcon from "@mui/icons-material/PlaceOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import SendIcon from "@mui/icons-material/Send";

// i18n
import { useTranslation } from "react-i18next";

const contactInfo = [
  {
    icon: <PlaceOutlinedIcon fontSize="large" color="primary" />,
    text: "Address",
    subtext: "123 Main St, Anytown, USA",
  },
  {
    icon: <LocalPhoneOutlinedIcon fontSize="large" color="primary" />,
    text: "Call Us",
    subtext: "123-456-7890",
  },
  {
    icon: <EmailOutlinedIcon fontSize="large" color="primary" />,
    text: "Email Us",
    subtext: "info@estore.com",
  },
];

export default function Contact() {
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";
  const isLargeScreen = useMediaQuery("(min-width:900px)");

  return (
    <Container sx={{ py: 2, direction: isArabic ? "rtl" : "ltr" }}>
      <Typography
        variant="h5"
        sx={{
          mb: 4,
          fontWeight: "bold",
          textAlign: isArabic ? "right" : "left",
        }}
      >
        {t("Contact")}
      </Typography>

      <Box
        sx={{
          mb: 6,
          display: "flex",
          flexDirection: isLargeScreen ? "row" : "column",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 4,
        }}
      >
        {contactInfo.map((item) => (
          <Card
            key={item.text}
            sx={{
              width: "100%",
              textAlign: "center",
              boxShadow: 3,
              borderRadius: 2,
              p: 2,
            }}
          >
            <CardContent>
              <Box sx={{ mb: 1 }}>{item.icon}</Box>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
                color="text.primary"
              >
                {t(item.text)}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {item.subtext}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: isLargeScreen
            ? isArabic
              ? "row-reverse"
              : "row-reverse"
            : "column",
          justifyContent: "center",
          alignItems: "stretch",
          gap: 4,
        }}
      >
        {/* Form */}
        <Box
          component="form"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: isLargeScreen ? "row" : "column",
              gap: 2,
            }}
          >
            <TextField label={t("Your Name")} variant="outlined" fullWidth />
            <TextField label={t("Your Email")} variant="outlined" fullWidth />
          </Box>
          <TextField label={t("Subject")} variant="outlined" fullWidth />
          <TextField
            label={t("Message")}
            variant="outlined"
            multiline
            rows={8}
            fullWidth
          />
          <Button
            variant="contained"
            startIcon={isArabic ? <SendIcon /> : undefined}
            endIcon={!isArabic ? <SendIcon /> : undefined}
            sx={{
              textTransform: "capitalize",
              alignSelf: isArabic ? "flex-end" : "flex-start",
              gap: 1,
              alignItems: isArabic ? "flex-end" : "flex-start",
            }}
          >
            {t("Send Message")}
          </Button>
        </Box>

        {/* Map */}
        <Box
          sx={{
            flex: 1,
            width: "100%",
            maxWidth: 600,
            height: isLargeScreen ? 400 : 300,
            borderRadius: 2,
            overflow: "hidden",
            boxShadow: 3,
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4132.412263006227!2d31.24130792391533!3d30.053504618140447!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145840eaa7478eef%3A0x14cf89da08401de9!2z2KzZhdin2YQg2LnYqNivINin2YTZhtin2LXYsQ!5e1!3m2!1sar!2seg&hl=en"
            width="660px"
            height="400px"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          ></iframe>
        </Box>
      </Box>
    </Container>
  );
}
