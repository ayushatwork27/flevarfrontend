import { useSelector, useDispatch } from 'react-redux';
import Grid from "@material-ui/core/Grid";
import { useEffect } from "react";
import { Typography } from "@material-ui/core";
import CakesItems from "../../components/CakeItemCard/CakesItems";
import { LOCATION_ID } from "../../shared/constants/app.constants";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";
import { getProductsAction } from '../../shared/store/actions/product.actions';

function Products() {
    const dispatch = useDispatch();
    const defaultLocatioId = localStorage.getItem(LOCATION_ID);
    useEffect(() => {
        dispatch(getProductsAction({
            filterkey: '',
            location_id: defaultLocatioId
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
