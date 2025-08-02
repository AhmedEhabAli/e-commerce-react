// MUI
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import useScrollTrigger from "@mui/material/useScrollTrigger";

// Icon
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

export default function ScrollToTop() {
  return (
    <Zoom in={useScrollTrigger()}>
      <Fab
        onClick={() => {
          window.scrollTo(0, 0);
        }}
        sx={{
          position: "fixed",
          bottom: { md: 30, xs: 5 },
          right: { md: 30, xs: 5 },
        }}
        size="small"
        color="primary"
        aria-label="add"
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
}
