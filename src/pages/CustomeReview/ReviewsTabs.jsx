import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Typography, Grid } from "@material-ui/core";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
const useStyles = makeStyles((theme) => ({
  //   mycart_wrapper: {
  //     marginTop: "3%",
  //   },
  cart_main_title: {
    fontSize: "26px",
    letterSpacing: "0px",
    color: "#222",
    fontWeight: 600,
    lineHeight: "47px",
    marginBottom: "20px",
  },
  addressSingeBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    border: "1px solid  #D8D8D8",
    padding: "10px 25px",
    marginBottom: "15px",
    [theme.breakpoints.down("md")]: {
      padding: "10px 10px",
    },
  },
  notselected_text: {
    color: "#D8D8D8",
  },
  selected_text: {
    color: "#90EE90",
  },
  address: {
    "& h5": {
      color: "#222",
      fontWeight: "600",
    },

    "& p": {
      color: "rgba(34, 34, 34, 0.5)",
      marginTop: "5px",
      fontWeight: 500,
    },
  },
  addnewBtn: {
    color: "#525050",
  },
  checkoutBtn: {
    textAlign: "right",
    marginTop: "15px",
    marginLeft: "auto",
    display: "inherit",
  },
  response: {
    color: "#ec8287",
  },
  close: {
    color: "rgba(34, 34, 34, 0.34)",
  },
}));

function ReviewsTabs() {
  const [value, setValue] = React.useState('Controlled');

  const reviewChange = (event) => {
    setValue(event.target.value);
  };
  const [rating, setRating] = React.useState('female');
  const handleChange = (event) => {
    setRating(event.target.value);
  };
  return (
    <>
      <Box>
        <FormControl component="fieldset">
          <RadioGroup aria-label="gender" name="gender1" value={rating} onChange={handleChange} className="product_Order_rating">
            <FormControlLabel value="female" control={<Radio />} label="Product Review" />
            <FormControlLabel value="male" control={<Radio />} label="Order Review" />
          </RadioGroup>
        </FormControl>
        <Grid container>
          <Grid item xs={2} >
            <img src="https://flevar-product-images.s3.ap-south-1.amazonaws.com/defaultimages/cake.png" className="img-fluid" alt="cake" />
          </Grid>
          <Grid item xs={10} >
            <Box className="product-reviw-enter">
              <TextField
                id="standard-multiline-flexible"
                label="Right Product Review"
                multiline
                maxRows={4}
                rows={4}
                value={value}
                onChange={reviewChange}

              />
            </Box>

          </Grid>
        </Grid>
      </Box>
    </>
  );
}

export default ReviewsTabs;
