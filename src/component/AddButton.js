import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";

const theme = createTheme({
  palette: { pop: { main: "#cd452b", contrastText: "#fff" } },
});

function AddButton() {
  return (
    <Grid item xs={3}>
      <ThemeProvider theme={theme}>
        <Button
          color="pop"
          variant="outlined"
          sx={{
            width: "100%",
            height: "16rem",
          }}
        >
          <AddIcon sx={{ fontSize: "6rem" }}></AddIcon>
        </Button>
      </ThemeProvider>
    </Grid>
  );
}

export default AddButton;
