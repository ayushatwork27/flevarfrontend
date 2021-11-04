import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  popolarcakepricing: {
    display: "flex",
    alignItems: "center",
  },
  sellingprice: {
    marginRight: "5px",
    color: "#e8656b ",
    fontWeight: 600,
  },
  originalprice: {
    textDecoration: "line-through",
    color: "#C6C6C6",
  },
});

function SingleCakeItem(props) {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6} md={3} lg={2}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt="Contemplative Reptile"
            image={props.imageurl}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h6">
              {props.productname}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              {props.category}
            </Typography>
            <Box className={classes.popolarcakepricing}>
              <Typography
                variant="h5"
                color="textSecondary"
                component="p"
                className={classes.sellingprice}
              >
                Rs.{props.sellingprice}
              </Typography>
              <Typography
                variant="body1"
                color="textSecondary"
                component="p"
                className={classes.originalprice}
              >
                Rs.{props.originalprice}
              </Typography>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
export default SingleCakeItem;
