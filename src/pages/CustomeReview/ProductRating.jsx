import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import Box from "@material-ui/core/Box";
import { Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import { Link } from "react-router-dom";

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';


const useStyles = makeStyles((theme) => ({
  d_flex: {
    display: "flex",
    alignItems: "center",
  },
  sellingprice: {
    marginRight: "5px",
    color: "#222",
    fontWeight: 600,
    fontSize: "27px",
    marginRight: "18px",
  },
  originalprice: {
    textDecoration: "line-through",
    color: "#C6C6C6",
    fontSize: "16px",
  },
  ratinbox: {
    display: "flex",
    alignItems: "center",
    margin: "10px 0px 5px 0px",
    "& p": {
      marginLeft: "5px",
      color: "#8D8D8D",
    },
  },
  order_item_image: {
    maxWidth: "161px",
  },
  between: {
    justifyContent: "space-between",
  },
  order_discription: {
    width: "100%",
    marginLeft: "20px",
    "& h5": {
      paddingLeft: "4px",

      [theme.breakpoints.down("xs")]: {
        marginBottom: "10px",
        marginTop: "10px",
        paddingLeft: "0px",
      },
    },
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0px",
    },
  },
  mr_2: {
    marginRight: "10px",
  },
  fw_bold: {
    fontWeight: 600,
    color: "#222",
    "& a": {
      color: '#222'
    }
  },
  order_single_box: {
    borderBottom: "1px solid #F4F4F4",
    padding: "10px 0px",
    width: "100%",
  },
}));

function ProductOrderRating() {

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const [rating, setRating] = React.useState('female');

  const handleChange = (event) => {
    setRating(event.target.value);
  };
  return (
    <>
      <Box>
        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1" value={rating} onChange={handleChange} className="product_Order_rating">
            <FormControlLabel value="female" control={<Radio />} label="Product Rating" />
            <FormControlLabel value="male" control={<Radio />} label="Order Rating" />
          </RadioGroup>
        </FormControl>
        <Box
          className={` ${classes.d_flex} ${classes.order_single_box} xs-wrape`}
        >
          <Box className={classes.order_item_image}>
            <Link >
              <img src="https://flevar-product-images.s3.ap-south-1.amazonaws.com/defaultimages/cake.png" alt="" />
            </Link>
          </Box>
          <Box className={classes.order_discription}>
            <Box
              className={`flex-wraper ${classes.d_flex} ${classes.between} `}
            >
              <Box className={`flex-wraper ${classes.d_flex}`}>
                <Typography
                  variant="h5"
                  color="textSecondary"
                  component="p"
                  className={classes.sellingprice}
                > Mango Delight Cake</Typography>
              </Box>
            </Box>
            <Box
              component="fieldset"
              borderColor="transparent"
              className={classes.ratinbox}
            >

              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProductOrderRating;