import React, { useState } from "react";
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
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";

import Select from "@material-ui/core/Select";
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
    searchpage: {
        position: "relative",
        display: "inline-block",
        backgroundColor: "#00000008",
        maxWidth: "400px",
        width: "100%",
        padding: '0px 10px',
        marginBottom: "50px"
    },
    searchIcon: {
        position: "absolute",
        top: "5px",
        right: "5px"
    },
    inputRoot: {
        width: "90%"
    }
}));
function SearchPage() {
    const classes = useStyles();
    const [sortby, setSortBy] = useState("");

    const handleChange = (event) => {
        setSortBy(event.target.value);
    };
    return (
        <CustomeContainer>
            <Box className={classes.searchpage} >
                <Box className={classes.searchIcon} >
                    <SearchIcon className="search-icon-color" />
                </Box>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ "aria-label": "search" }}
                />
            </Box>
            <Grid container>
                <Grid item sm={12} md={10}>
                    <Typography variant="h5" className="cmn-pages-title-only">
                        Showing 1 – 24 of 424 similar matches
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
                                <MenuItem value={20}>Most Selling</MenuItem>
                            </Select>
                        </FormControl>
                    </Box>
                </Grid>
            </Grid>
            <Box>
                <Grid container spacing={3}>
                    <CakesItems />
                </Grid>
            </Box>
        </CustomeContainer>
    );
}

export default SearchPage;
