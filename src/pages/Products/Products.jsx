import { useSelector, useDispatch } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import { useEffect } from "react";
import { Typography } from "@material-ui/core";
import CakesItems from "../../components/CakeItemCard/CakesItems";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";
import { getProductsAction } from '../../shared/store/actions/product.actions';

function Products() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getProductsAction({
            filterkey: '',
            location_id: 2
        }));
    }, [dispatch]);
    const { products } = useSelector(state => state.product);
    return (
        <CustomeContainer>
            <Typography variant="h5" className="cmn-pages-title-only">
                PRODUCTS
            </Typography>
            <Grid container spacing={3}>
                <CakesItems products={products} />
            </Grid>
        </CustomeContainer>
    );
}

export default Products;
