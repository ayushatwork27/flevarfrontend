import React from "react";
import Box from "@material-ui/core/Box";
import ShopByCategory from "../Home/ShopByCategory";
import { Typography } from "@material-ui/core";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";

function Categories() {
  return (
    <CustomeContainer>
      <Typography variant="h5" className="cmn-pages-title-only">
        CATEGORIES
      </Typography>
      <Box>
        <ShopByCategory />
      </Box>
    </CustomeContainer>
  );
}

export default Categories;
