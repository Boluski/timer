import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddButton from "./AddButton";

function Body() {
  return (
    <Container>
      <Typography variant="h4" color={"#cd452b"}>
        Your Timers
      </Typography>
      <Grid container spacing={1}>
        <AddButton />
      </Grid>
    </Container>
  );
}

export default Body;
