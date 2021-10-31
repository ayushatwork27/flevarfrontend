import React from "react";
import { Grid, Button, Typography, Box } from "@material-ui/core";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

function SingleSlider(props) {
  return (
    <>
      <Grid container>
        <Grid item xs={12} md={12} lg={6}>
          <Box>
            <Typography variant="body1">{props.smallTitle}</Typography>
            <Typography variant="h2">{props.mailTitle}</Typography>
            <Button variant="contained" className="cmn-btncolor">
              Shop Now
            </Button>
            <Button variant="outlined">
              <PlayCircleOutlineIcon />
              Watch Video
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
