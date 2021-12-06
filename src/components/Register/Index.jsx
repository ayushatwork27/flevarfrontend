import React from "react";
import Layout from "../../Layout";
import Register from "./Register";
import Box from "@material-ui/core/Box";
function Index() {
    return (
        <Layout>
            <Box className="cmn-profile-box-wrapper">
                <Register />
            </Box>
        </Layout>
    );
}

export default Index;
