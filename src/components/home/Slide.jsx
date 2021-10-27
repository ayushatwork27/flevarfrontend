import { makeStyles, Box, Typography, Button, Divider } from '@material-ui/core';
import Carousel from 'react-multi-carousel';
import Countdown from 'react-countdown';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

import { timerURL } from '../../constants/data';

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 5
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const usestyle = makeStyles({
    component: {
        marginTop: 12,
        backgroundColor: '#FFFFFF'
    },
    image: {
        height: 150
    },
    dealText: {
        fontSize: 22,
        fontWeight: 600,
        lineHeight: '32px',
        marginRight: 25
    },
    timer: {
        color: '#7f7f7f7',
        marginLeft: 10,
        display: 'flex',
        alignItems: 'center'
    },
    deal: {
        display: 'flex',
        padding: '15px; 20px;'
    },
    button: {
        marginLeft: 'auto',
        backgroundColor: '#2874f0',
        borderRadius: 2,
        fontSize: 13
    },
    text: {
        fontSize: 14,
        marginTop: 5
    },
    wrapper: {
        padding: '28px 15px'
    }
})

const Slide = ({ timer, title, products }) => {
    const classes = usestyle();
    const renderer = ({ hours, minutes, seconds }) => {
        return <span className={classes.timer}>{hours}:{minutes}:{seconds} Left</span>;
    }
    return (
        <Box className={classes.component}>
            <Box className={classes.deal}>
                <Typography className={classes.dealText}>{title}</Typography>
                {timer &&
                    <>
                        <img src={timerURL} style={{ width: 24 }} />
                        <Countdown date={Date.now() + 5.04e+7} renderer={renderer} />
                        <Button variant="contained" color="primary" className={classes.button}>View All</Button>
                    </>
                }
            </Box>
            <Divider />
            <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={false}
                draggable={false}
                centerMode={true}
                autoPlay={true}
                autoPlaySpeed={1000}
                keyBoardControl={true}
                showDots={false}
                removeArrowOnDeviceType={["tablet", "mobile"]}
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                containerClass="carousel-container"
            >
                {
                    products.map(product => (
                        <Link to={`product/${product.id}`} style={{textDecoration: 'none'}}>
                            <Box textAlign="center" className={classes.wrapper}>
                                <img src={product.url} key={product.id} className={classes.image} />
                                <Typography className={classes.text} style={{ fontWeight: 600, color: '#212121' }}>{product.title.shortTitle}</Typography>
                                <Typography className={classes.text} style={{ color: 'green' }}>{product.discount}</Typography>
                                <Typography className={classes.text} style={{ color: '#212121', opacity: "0.6" }}>{product.tagline}</Typography>
                            </Box>
                        </Link>
                    ))
                }
            </Carousel>
        </Box>
    )
}

export default Slide;