// import React from 'react'
// import Location from '../../pages/Contact/Location'
// import Grid from "@material-ui/core/Grid"
// import { Box } from '@material-ui/core'
// import CmnButton from '../../components/CmnButton/CmnButton'
// import { makeStyles } from "@material-ui/core/styles";
// import { Typography } from '@material-ui/core'
// const useStyles = makeStyles((theme) => ({
//     location_single_box: {
//         display: "inline-flex",
//         justifyContent: "center",
//         alignItems: "center",
//         "& button": {
//             position: "absolute",
//             zIndex: "55",
//             backgroundColor: "#fff",
//             color: "#222",
//             "&:hover": {
//                 backgroundColor: "#fff",
//             }
//         }
//     },
//     content_box: {
//         display: "flex",
//         flexFlow: "column",
//         justifyContent: "center",
//         height: "100%",
//         "& p:nth-of-type(1)": {
//             marginBottom: "20px"
//         },
//         "& p:nth-of-type(2)": {
//             color: "#222",
//             maxWidth: "353px",
//             fontWeight: "600",
//             fontSize: "30px"
//         }
//     }
// }));
// const locationData = [
//     {
//         imgsrc: "assets/images/cityimage4.jpg",
//         btnlable: "Calcutta"
//     },
//     {
//         imgsrc: "assets/images/cityimage4.jpg",
//         btnlable: "JAMSHEDPUR"
//     },
//     {
//         imgsrc: "assets/images/cityimage4.jpg",
//         btnlable: "RANCHI"
//     },
// ]
// function OnHoverLocation() {
//     const classes = useStyles();
//     return (

//         <div className="hover-wrapper">
//             <Grid container >
//                 <Grid sm={12} md={6} lg={6} item >
//                     <Box className={classes.content_box}>
//                         <Typography
//                             variant="body1"
//                             className="onhover-small-title">
//                             SERVING NOW
//                         </Typography>
//                         <Typography
//                             variant="body2"
//                             className="onhover-header">
//                             Cities where we are Delivering right now!
//                         </Typography>
//                     </Box>
//                 </Grid>
//                 <Grid sm={12} md={6} lg={6} item>
//                     <Box className="location-wrapperbox">
//                         <Grid container className="home-onhover-location-right-wrapper" >
//                             {
//                                 locationData.map((val, i) => {
//                                     return (
//                                         <Grid item sm={6} md={4} className={` home-onhover-location-singlebox ${classes.location_single_box}`} key={i}>
//                                             <img src={val.imgsrc} alt="cityimage" />
//                                             <CmnButton btntitle={val.btnlable} />
//                                         </Grid>
//                                     )
//                                 })
//                             }
//                         </Grid>
//                     </Box>
//                 </Grid>
//             </Grid>
//         </div>
//     )
// }

// export default OnHoverLocation
