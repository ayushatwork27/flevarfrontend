import { useSelector } from 'react-redux';
import Box from "@material-ui/core/Box";
import ShopByCategory from "../Home/ShopByCategory";
import { Typography } from "@material-ui/core";
import CustomeContainer from "../../components/CustomeContainer/CustomeContainer";

function Categories() {
    const { categoryList } = useSelector(state => state.product);
    return (
        <CustomeContainer>
            <Typography variant="h5" className="cmn-pages-title-only">
                CATEGORIES
            </Typography>
            <Box>
                <ShopByCategory categories={categoryList}/>
            </Box>
        </CustomeContainer>
    );
}

export default Categories;
