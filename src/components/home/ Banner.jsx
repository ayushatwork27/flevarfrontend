import { makeStyles } from '@material-ui/core';
import Carousel from "react-material-ui-carousel";
import { bannerData } from '../../constants/data';

const usestyle = makeStyles({
    image: {
        width: '100%',
        height: 280,
    },
    carousel: {
        marginTop: 10
    }
})

const Banner = () => {
    const classes = usestyle();
    return (
        <Carousel
            autoplay={true}
            animation="slide"
            indicators={false}
            navButtonsAlwaysVisible={true}
            cycleNavigation={true}
            navButtonsProps={{
                style: {
                    background: '#FFFFFF',
                    color: '#494949',
                    borderRadius: 0,
                    margin: 0
                }
            }} 
            className={classes.carousel}
        >
            {
                bannerData.map(ban => (
                    <img src={ban.url} key={ban.id} alt={ban.id} className={classes.image}/>
                ))
            }
        </Carousel>
    )
}

export default Banner;