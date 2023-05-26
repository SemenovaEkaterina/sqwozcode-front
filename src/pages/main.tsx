import React from "react";
import BannersHeader from "../components/banners-header";
import Layout from "../components/layout";
import ActivitiesPresetContainer from "../containers/activities-preset-container";
import AuthModalContainer from "../containers/auth-modal-container";
import Search from "../components/search";

const presets = [
    {
        title: "Подходит всем",
        preset: "popular",
    },
    {
        title: "В здоровом теле — здоровый дух",
        preset: "health",
    },
    {
        title: "Век живи — век учись",
        preset: "mind",
    },
];

const MainPage = () => (
    <>
        <Layout>
            <Search />
            <BannersHeader />
            {presets.map((preset) => (
                <ActivitiesPresetContainer {...preset} />
            ))}
        </Layout>
        <AuthModalContainer />
    </>
);

export default MainPage;
