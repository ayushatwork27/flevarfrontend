import { useSelector } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import CakesItems from "../../components/CakeItemCard/CakesItems";
import { Typography } from "@material-ui/core";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";

function Products() {
    const { productList } = useSelector(state => state.product);
    return (
        <CustomeContainer>
            <Typography variant="h5" className="cmn-pages-title-only">
                PRODUCTS
            </Typography>
            <Grid container spacing={3}>
                <CakesItems products={productList} />
            </Grid>
        </CustomeContainer>
    );
}

export default Products;
