import React from 'react'
import { Link } from "react-router-dom"
import Box from "@material-ui/core/Box";
import CmnButton from "../CmnButton/CmnButton"
function LogoutButton() {
    return (
        <>
            <Box component={Link} to="/">
                <CmnButton btntitle="Log Out" />
            </Box>
        </>
    )
}

export default LogoutButton
