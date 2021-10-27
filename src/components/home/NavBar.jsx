import { Box, Typography, makeStyles } from '@material-ui/core';
import { navData } from '../../constants/data';

const usestyle = makeStyles({
    component: {
        display: 'flex',
        margin: '55px 130px 0px 130px',
        justifyContent: 'space-between'
    },
    container: {
        textAlign: 'center',
        padding: '12px 8px'
    },
    image: {
        width: 64
    },
    text: {

    }
})

const NavBar = () => {
    const classes = usestyle();
    return (
        <Box className={classes.component}>
            {
                navData.map(data => (
                    <Box className={classes.container} key={data.id}>
                        <img src={data.url} key={data.id} alt={data.text} className={classes.image} />
                        <Typography className={classes.text}>{data.text}</Typography>
                    </Box>
                ))
            }
        </Box>
    )
}

export default NavBar;