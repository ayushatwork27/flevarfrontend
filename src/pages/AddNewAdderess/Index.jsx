import React from "react";
import Layout from "../../Layout";
import AddNewAdderess from "./AddNewAdderess";
import PageNotFound from "../PageNotFound/Index";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getAddress } from "../../shared/store/actions/address.actions";

function Index() {
    let dispatch = useDispatch();
    const { user } = useSelector(state => state.app);
    const { id } = useParams();
    useEffect(() => {
        if (id) dispatch(getAddress(id))
    }, [id]);
    const { address } = useSelector(state => state.address);
    return (
        <Layout>
            {user && user.id ? <AddNewAdderess flevarUser={user} address={address ? address : {}} /> : <PageNotFound />}
        </Layout>
    );
}

export default Index;