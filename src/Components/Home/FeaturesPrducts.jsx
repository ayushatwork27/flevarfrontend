import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Box, Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));
function FeaturesPrducts() {
  const classes = useStyles();
  return (
    <div>
      <Grid container>
        <Grid item xs={12} md={8}>
          <Box>
            <img src="/assets/images/featured-product.png" alt="featured" />
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box>
            <Typography variant="body1">ORIGINAL CAKES BY FLEV</Typography>
            <Typography variant="body1">Korean Spread</Typography>
            <Box>
              <Box>
                <Typography variant="body2">STARTING AT</Typography>
                <Typography variant="h5">RS. 1,299</Typography>
              </Box>
              <Box>
                <Typography variant="body2">UPTO</Typography>
                <Typography variant="h5">35% OFF</Typography>
              </Box>
            </Box>
            <Typography variant="body1">
              LOREM IPSUM DOLOR APPLY HERE OKAY
            </Typography>
            <Button variant="contained">Order Now</Button>
          </Box>
        </Grid>
      </Grid>
      <Box>
        <Grid container>
          <Grid item sm={12} md={4}>
            <Box>
              <Button variant="contained">Order Now</Button>
              <Typography variant="body1">
                LOREM IPSUM DOLOR APPLY HERE OKAY
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box>
              <Typography variant="h5">travelxp</Typography>
              <Typography variant="body1">
                LOREM IPSUM DOLOR APPLY HERE OKAY
              </Typography>
            </Box>
          </Grid>
          <Grid item sm={12} md={4}>
            <Box>
              <Typography variant="body1">The celegraph</Typography>
              <Typography variant="body1">
                LOREM IPSUM DOLOR APPLY HERE OKAY
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default FeaturesPrducts;
