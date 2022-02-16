import React from 'react'
import { Link } from "react-router-dom"
import { useDispatch } from 'react-redux';
import Box from "@material-ui/core/Box";
import CmnButton from "../CmnButton/CmnButton"
import { authenticateLogOut } from "../../shared/store/actions/app.actions";

function LogoutButton() {
    const dispatch = useDispatch();
    const logOut = () => {
        const mobile = localStorage.getItem('mobile');
        dispatch(authenticateLogOut({ mobile }));
    }
    return (
        <>
            <Box component={Link} to="/">
                <CmnButton btntitle="Log Out" to="/" onClick={logOut}/>
            </Box>
        </>
    )
}

export default LogoutButton
