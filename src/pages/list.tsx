import React from "react";
import BannersHeader from "../components/banners-header";
import Layout from "../components/layout";
import Search from "../components/search";
import ActivitiesListContainer from "../containers/activities-list-container";
import AuthModalContainer from "../containers/auth-modal-container";

const ListPage = () => (
    <>
        <Layout>
            <Search />
            <BannersHeader />
            <ActivitiesListContainer />
            <AuthModalContainer />
        </Layout>
    </>
);

export default ListPage;
