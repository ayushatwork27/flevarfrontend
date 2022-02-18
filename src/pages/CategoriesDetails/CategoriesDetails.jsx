import { useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import Box from "@material-ui/core/Box";
import CakesItems from "../../components/CakeItemCard/CakesItems";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import { useParams } from "react-router-dom";
import { getProductsAction } from '../../shared/store/actions/product.actions';
import { LOCATION_ID } from "../../shared/constants/app.constants";

const useStyles = makeStyles((theme) => ({
    categorydetails_header_btn_wrapper: {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    },
    sortby: {
        width: "100%",
        "& .MuiFormControl-root": {
            minWidth: "200px",
            maxWidth: "150px",
        },
        "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline ": {
            borderColor: "#222",
            border: "1px solid ",
        },
        "& .MuiFormLabel-root.Mui-focused": {
            color: "#222",
        },
        "& .MuiOutlinedInput-input": {
            padding: "10px 14px",
        },
        "& .MuiInputLabel-outlined ": {
            transform: "translate(15px, 12px) scale(1)",
        },
        "& .MuiInputLabel-shrink": {
            transform: " translate(11px, -4px) scale(0.75)",
        }
    },
}));

function CategoriesDetails() {
    const { id } = useParams();
    const classes = useStyles();
    const [sortby, setSortBy] = useState("");
    const defaultLocatioId = localStorage.getItem(LOCATION_ID);
    const handleChange = (event) => {
        setSortBy(event.target.value);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsAction({
            "filterkey": "",
            "location_id": defaultLocatioId,
            "category_id": id
        }));
    }, [dispatch]);
    const { products } = useSelector(state => state.product);
    const { productList } = useSelector(state => state.product);
    const categoryName = products && products.length && products[0]['product_category'] && products[0]['product_category']['name'];

    return (
        <CustomeContainer>
            <Grid container>
                <Grid item sm={12} md={10}>
                    <Typography variant="h5" className="cmn-pages-title-only">
                        Showing 1 – 24 of 424 results for category
                        <Typography variant="p"> {categoryName}</Typography>
                    </Typography>
                </Grid>
                <Grid item sm={12} md={2}>
                    <Box className={classes.sortby}>
                        <FormControl variant="outlined">
                            <InputLabel id="demo-simple-select-outlined-label">
                                SORT
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={sortby}
                                onChange={handleChange}
                                label="Age"
                                IconComponent={ExpandMoreIcon}
                            >
                                <MenuItem value={10}>By Relevance</MenuItem>
                                <MenuItem value={20}>By Value</MenuItem>
                                <MenuItem value={30}>By Date</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Box>
                <Grid container spacing={3}>
                    <CakesItems products={products} />
                </Grid>
            </Box>
            <Box>
                <Typography variant="body" className="seperator">
                    End of Mango Cakes
                </Typography>
            </Box>
            <Grid container>
                <Grid item sm={12} md={7}>
                    <Typography variant="h5" className="cmn-pages-title-only">
                        You might also like these other
                        <Typography variant="p"> Popular Cakes</Typography>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <CakesItems products={productList} />
            </Grid>
        </CustomeContainer>
    );
}

export default CategoriesDetails;
