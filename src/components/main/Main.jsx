// React
import { useState } from "react";
import ProductDetails from "./ProductDetails";

// MUI
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useTheme } from "@emotion/react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Button from "@mui/material/Button";
import Rating from "@mui/material/Rating";

// Icon
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

// Images
import women from "../../assets/images/women.webp";
import womenH from "../../assets/images/womenH.webp";

// i18n
import { useTranslation } from "react-i18next";

export default function Main() {
  const theme = useTheme();
  const { t, i18n } = useTranslation();
  const isArabic = i18n.language === "ar";

  const [alignment, setAlignment] = useState("All");
  const [favorites, setFavorites] = useState({});
  const [hoveredItem, setHoveredItem] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  const handleClickOpen = () => {
    setOpenDialog(true);
  };

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const handleToggle = (item) => {
    setFavorites((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <Container sx={{ mt: 8, direction: isArabic ? "rtl" : "ltr" }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        flexWrap="wrap"
        gap={3}
      >
        <Box>
          <Typography variant="h6">{t("Selected Products")}</Typography>
          <Typography variant="body1" fontWeight={400}>
            {t("All our new arrivals in an exclusive brand selection")}
          </Typography>
        </Box>

        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{
            justifyContent: { xs: "center", sm: "flex-start" },
            "& .MuiToggleButton-sizeMedium": {
              fontSize: {
                xs: "13px !important",
                lg: "18px !important",
              },
            },
          }}
        >
          <ToggleButton
            className="My-btn"
            value="All"
            sx={{ color: theme.palette.text.primary }}
          >
            {t("all products")}
          </ToggleButton>
          <ToggleButton
            className="My-btn"
            value="Men"
            sx={{ mx: "10px !important ", color: theme.palette.text.primary }}
          >
            {t("men category")}
          </ToggleButton>
          <ToggleButton
            className="My-btn"
            value="Women"
            sx={{ color: theme.palette.text.primary }}
          >
            {t("women category")}
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>

      <Stack
        direction="row"
        sx={{ justifyContent: { xs: "center", sm: "flex-start" } }}
        flexWrap="wrap"
        gap={2}
        mt={1.8}
      >
        {["aaa", "ASdasda", "ASdssadasdkj", "asdkjhjkhjk"].map((item) => {
          return (
            <Card
              className="Card"
              key={item}
              onMouseEnter={() => setHoveredItem(item)}
              onMouseLeave={() => setHoveredItem(null)}
              sx={{
                maxWidth: "276px",
              }}
              id="item"
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: 261,
                  perspective: "1000px",
                }}
              >
                {/* Original image */}
                <Box
                  component="img"
                  src={women}
                  alt={t("default")}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: hoveredItem === item ? 0 : 1,
                    transition: "opacity 0.4s ease-in-out",
                  }}
                />

                {/* Hover image */}
                <Box
                  component="img"
                  src={womenH}
                  alt={t("hover")}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    opacity: hoveredItem === item ? 1 : 0,
                    transform:
                      hoveredItem === item
                        ? "rotateY(5deg) rotateX(5deg) translateZ(50px)"
                        : "none",
                    transition: "opacity 0.4s ease-in-out, transform 0.6s ease",
                    transformStyle: "preserve-3d",
                    willChange: "transform",
                  }}
                />
                <IconButton
                  onClick={() => handleToggle(item)}
                  color="error"
                  aria-label={t("favorite")}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                  }}
                >
                  {favorites[item] ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </IconButton>
              </Box>
              <CardContent>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Typography gutterBottom variant="h6" component="div">
                    {t("T-shirt")}
                  </Typography>
                  <Typography variant="subtitle2" component="p">
                    $119
                  </Typography>
                </Stack>
                <Typography variant="body2" color="text.secondary">
                  {t(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, tempore nisi? Ullam, aliquid tenetur?"
                  )}
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: "space-between" }}>
                <Button
                  onClick={handleClickOpen}
                  size="medium"
                  sx={{ textTransform: "capitalize" }}
                >
                  <AddShoppingCartIcon fontSize="small" sx={{ mr: 1 }} />
                  {t("add to cart")}
                </Button>
                <Rating
                  precision={0.5}
                  name="read-only"
                  value={5}
                  readOnly
                  size="small"
                />
              </CardActions>
            </Card>
          );
        })}
      </Stack>
      <ProductDetails open={openDialog} setOpen={setOpenDialog} />
    </Container>
  );
}
