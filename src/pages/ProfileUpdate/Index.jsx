import React from "react";
import Layout from "../../Layout";
import { useSelector } from "react-redux";
import ProfileUpdate from "./ProfileUpdate";
import PageNotFound from "../PageNotFound/Index";

function Index() {
    const { user } = useSelector(state => state.app);
    return (
        <Layout>
            {user && user.id ? <ProfileUpdate flevarUser={user} /> : <PageNotFound />}
        </Layout>
    );
}

export default Index;
