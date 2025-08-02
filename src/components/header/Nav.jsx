// React
import { useState } from "react";
import { Link } from "react-router-dom";

// MUI
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";

// Icons
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Nav({ title, subLink = [] }) {
  const [open, setOpen] = useState(false);
  const hasSubLinks = subLink.length > 0;

  return (
    <Box
      sx={{ position: "relative", display: "inline-block", cursor: "pointer" }}
      onMouseEnter={() => hasSubLinks && setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 0.5,
          px: 1,
          py: 0.5,
          userSelect: "none",
        }}
      >
        <Typography variant="body1">{title}</Typography>
        {hasSubLinks && (
          <ExpandMoreIcon
            fontSize="small"
            sx={{
              transition: "transform 0.3s",
              transform: open ? "rotate(180deg)" : "rotate(0deg)",
            }}
          />
        )}
      </Box>

      {hasSubLinks && open && (
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            top: "100%",
            left: 0,
            bgcolor: "background.paper",
            zIndex: 10,
            minWidth: 140,
          }}
        >
          <List dense>
            {subLink.map((sub) => (
              <ListItem key={sub} disablePadding>
                <ListItemButton>
                  <ListItemText primary={sub} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
}
