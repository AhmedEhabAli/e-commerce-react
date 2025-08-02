// React
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

// MUI
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Drawer from "@mui/material/Drawer";
import Stack from "@mui/material/Stack";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";

// Icons
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

// i18n
import { useTranslation } from "react-i18next";

// Components
import Nav from "./Nav";

export default function BottomHeader() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery("(min-width:1000px)");
  const isSmallScreen = useMediaQuery("(max-width:1000px)");
  const location = useLocation();

  const { t, i18n } = useTranslation();
  const dir = i18n.language === "ar" ? "rtl" : "ltr";

  const [state, setState] = useState({ left: false });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };

  const links = [
    { mainLink: t("Home"), path: "/" },
    { mainLink: t("About us"), path: "/about" },
    {
      mainLink: t("Men"),
      subLink: [t("T-shirts"), t("Accessories"), t("Shoes")],
    },
    {
      mainLink: t("Women"),
      subLink: [t("Skirt"), t("Accessories"), t("Shoes")],
    },
    { mainLink: t("Contact Us"), path: "/contact" },
  ];

  return (
    <>
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: theme.palette.divider,
          my: { xs: 0.1, md: 2 },
        }}
      />
      <Container dir={dir}>
        {isLargeScreen && (
          <Stack
            gap={5}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {links.map(({ mainLink, subLink, path }) =>
              path ? (
                <Box
                  key={mainLink}
                  component={Link}
                  to={path}
                  sx={{
                    textDecoration: "none",
                    color:
                      location.pathname === path ? "primary.main" : "inherit",
                  }}
                >
                  <Nav title={mainLink} subLink={subLink || []} />
                </Box>
              ) : (
                <Nav key={mainLink} title={mainLink} subLink={subLink || []} />
              )
            )}
          </Stack>
        )}

        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          {isSmallScreen && (
            <IconButton onClick={toggleDrawer("left", true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        <Drawer
          anchor={"left"}
          open={state.left}
          onClose={toggleDrawer("left", false)}
        >
          <Box
            sx={{
              width: "300px",
              mt: 2,
              pt: 9,
              mx: "auto",
              position: "relative",
            }}
          >
            <IconButton
              sx={{
                position: "absolute",
                top: 0,
                right: 0,
                ":hover": {
                  rotate: "360deg",
                  transition: "0.6s",
                  color: "red",
                },
              }}
              onClick={toggleDrawer("left", false)}
            >
              <CloseIcon />
            </IconButton>

            {links.map((item) => {
              if (item.subLink) {
                return (
                  <Accordion
                    key={item.mainLink}
                    elevation={0}
                    sx={{
                      bgcolor: "inherit",
                      ...(item.mainLink === t("Women") ||
                      item.mainLink === t("Men")
                        ? {
                            borderBottom:
                              theme.palette.mode === "dark"
                                ? "1px solid rgba(255, 255, 255, 0.2)"
                                : "2px solid rgba(0, 0, 0, 0.12)",
                          }
                        : {}),
                    }}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel-content"
                      id="panel-header"
                    >
                      <Typography component="span">{item.mainLink}</Typography>
                    </AccordionSummary>

                    <List sx={{ py: 0, my: 0 }}>
                      {item.subLink.map((sub) => (
                        <ListItem
                          disablePadding
                          sx={{ py: 0, my: 0 }}
                          key={sub}
                        >
                          <ListItemButton>
                            <ListItemText primary={sub} />
                          </ListItemButton>
                        </ListItem>
                      ))}
                    </List>
                  </Accordion>
                );
              }

              return (
                <Box key={item.mainLink}>
                  <ListItemButton
                    sx={{ pl: 2, borderBottom: "1px solid rgba(0,0,0,0.12)" }}
                    component={Link}
                    to={item.path}
                  >
                    <ListItemText primary={item.mainLink} />
                  </ListItemButton>
                  <Divider />
                </Box>
              );
            })}
          </Box>
        </Drawer>
      </Container>
      <Box
        sx={{
          borderBottom: "1px solid",
          borderColor: theme.palette.divider,
          my: { xs: 0.1, md: 2 },
        }}
      />
    </>
  );
}
