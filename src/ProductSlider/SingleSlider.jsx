import React from "react";
import { Grid, Button, Typography } from "@material-ui/core";
import { Typography } from "@material-ui/core";
function SingleSlider(props) {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12} lg={6}>
          <Box>
            <Typography variant="body1">{props.smallTitle}</Typography>
            <Typography variant="h2">{props.mailTitle}</Typography>
            <Button variant="contained" color="secondary">
              Shop Now
            </Button>
          </Box>
        </Grid>
        <Grid item xs={12} md={12} lg={6}>
          <img src={props.imagesrc} alt="sliderpicture" />
        </Grid>
      </Grid>
    </>
  );
}

export default SingleSlider;
