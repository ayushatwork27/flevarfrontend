import React from "react";
import SimpleSlider from "../ProductSlider/SimpleSlider";
import CakesItems from "../CakeItemCard/CakesItems";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import Typography from "@material-ui/core/Typography";
import OocassionButton from "./OocassionButton";
import FeaturesPrducts from "./FeaturesPrducts";
function Home() {
  return (
    <div>
      <SimpleSlider />
      <Box p={2}>
        <Box className="title_with_btn">
          <Typography variant="h5">POPULAR CAKES</Typography>
          <Button
            variant="contained"
            color="default"
            className="cmn_titlebtn"
            endIcon={<ChevronRightIcon></ChevronRightIcon>}
          >
            View All
          </Button>
        </Box>

        <Grid container spacing={3}>
          <CakesItems />
        </Grid>
      </Box>

      <Box>
        <Box className="title_with_btn">
          <Typography variant="h5">SHOP BY CATEGORY</Typography>
          <Button
            variant="contained"
            color="default"
            className="cmn_titlebtn"
            endIcon={<ChevronRightIcon></ChevronRightIcon>}
          >
            View All
          </Button>
        </Box>

        <Typography variant="bosy">card gallery component hear</Typography>
      </Box>
      <Box>
        <Box className="title_with_btn">
          <Typography variant="h5">SHOP BY CATEGORY</Typography>
        </Box>
      </Box>
      <Box>
        <OocassionButton />
      </Box>
      <Box>
        <FeaturesPrducts />
      </Box>
    </div>
  );
}

export default Home;
