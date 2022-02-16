import React from "react";
import Box from "@material-ui/core/Box";
import Layout from "../../Layout";
import About from "./About";
function Index() {
    return (
        <Layout>
            <Box className="cmn-profile-box-wrapper">
                <About />
            </Box>
        </Layout>
    );
}

export default Index;
