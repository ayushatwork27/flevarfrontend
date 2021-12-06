import { useSelector, useDispatch } from 'react-redux';
import Box from "@material-ui/core/Box";
import { useEffect } from "react";
import { Typography } from "@material-ui/core";
import ShopByCategory from "../Home/ShopByCategory";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";
import { getCategoriesAction } from '../../shared/store/actions/product.actions';

function Categories() {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCategoriesAction());
    }, [dispatch]);
    const { categories } = useSelector(state => state.product);
    return (
        <CustomeContainer>
            <Typography variant="h5" className="cmn-pages-title-only">
                CATEGORIES
            </Typography>
            <Box>
                <ShopByCategory categories={categories} />
            </Box>
        </CustomeContainer>
    );
}

export default Categories;
