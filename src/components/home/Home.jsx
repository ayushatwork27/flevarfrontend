import { Box, makeStyles } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { adURL } from '../../constants/data';
import { getProducts as listProducts } from '../../redux/actions/productActions';

// components
import NavBar from './NavBar';
import Banner from './ Banner';
import Slide from './Slide';

const usestyle = makeStyles({
    component: {
        padding: 10,
        background: '#F2F2F2'
    },
    rightWrapper: {
        backgroundColor: "#FFFFFFF",
        margin: '12px 0 0 10px',
        width: '17%'
    }
})

const Home = () => {
    const classes = usestyle();
    const getProducts = useSelector(state => state.getProducts);
    const { products } = getProducts;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])
    return (
        <div>
            <NavBar />
            <Box className={classes.component}>
                <Banner />
                <Box style={{display: 'flex'}}>
                    <Box style={{width: "85%"}}>
                        <Slide timer={true} title="Deal og the Day" products={products}/>
                    </Box>
                    <Box className={classes.rightWrapper}>
                        <img src={adURL} style={{width: 230, height: 'auto'}} />
                    </Box>
                </Box>
                <Slide timer={false} title="Discount for You" products={products} />
                <Slide timer={false} title="Suggested Items" products={products} />
                <Slide timer={false} title="Top Selection" products={products} />
                <Slide timer={false} title="Recomended Items" products={products} />
                <Slide timer={false} title="Bestsellers" products={products} />
            </Box>
        </div>
    )
}

export default Home;