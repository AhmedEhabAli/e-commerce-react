import { useState } from "react";

// Component
import Register from "../registration/Register";

// MUI
import { Container, IconButton, Stack, Typography } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

// Icons
import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";

// i18n
import { useTranslation } from "react-i18next";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  border: "1px solid #777",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  "&:focus-within": {
    border: "1px solid #103472",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  flexGrow: 0.6,
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#777",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingInlineStart: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
      "&:focus": {
        width: "35ch",
      },
    },
  },
}));

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

export default function MiddleHeader() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openLogin, setOpenLogin] = useState(false);

  const { t, i18n } = useTranslation();
  const currentLang = i18n.language;
  const dir = currentLang === "ar" ? "rtl" : "ltr";

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleOpenLogin = () => {
    handleClose();
    setOpenLogin(true);
  };

  const handleCloseLogin = () => {
    setOpenLogin(false);
  };

  return (
    <Container
      sx={{ my: 1.5, display: "flex", justifyContent: "space-between" }}
      maxWidth="lg"
      dir={dir}
    >
      <Typography variant="h5" sx={{ mr: 2 }}>
        {t("eStore")}
      </Typography>

      <Search sx={{ borderRadius: 15 }}>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={t("Search…")}
          inputProps={{ "aria-label": "search" }}
        />
      </Search>

      <Stack direction={"row"} alignItems={"center"}>
        <IconButton onClick={handleMenu}>
          <PersonIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          sx={{
            marginTop: { sm: "30px", xs: "42px" },
            marginRight: "30px",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleOpenLogin}>{t("Login")}</MenuItem>
        </Menu>
        <Modal
          BackdropProps={{
            style: {
              backdropFilter: "blur(5px)",
              backgroundColor: "rgba(0,0,0,0.3)",
            },
          }}
          open={openLogin}
          onClose={handleCloseLogin}
        >
          <Box sx={{ width: { sm: "50%", xs: "100%" } }} className="modalStyle">
            <Register onClose={handleCloseLogin} />
          </Box>
        </Modal>

        <IconButton aria-label="favorit" sx={{ paddingRight: 1.5 }}>
          <StyledBadge badgeContent={2} color="secondary">
            <FavoriteIcon />
          </StyledBadge>
        </IconButton>

        <IconButton aria-label="cart">
          <StyledBadge badgeContent={3} color="secondary">
            <ShoppingCartIcon />
          </StyledBadge>
        </IconButton>
      </Stack>
    </Container>
  );
}
