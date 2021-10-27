import React from "react";
import { Container, Typography } from "@material-ui/core";
function SingleSlider(props) {
  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item lg={6} md={12}>
          <Typography variant="body1" mb={2}>
            {props.slidersmlltitle}
          </Typography>
          <Typography variant="h2" mb={2}>
            {props.slidermaintittle}
          </Typography>
          <Box>
            <Button variant="contained" color="primary">
              Shop Now
            </Button>
            <Button color="primary">Watch Video</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default SingleSlider;
