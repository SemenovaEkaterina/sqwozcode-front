import React from "react";
import BannersHeader from "../components/banners-header";
import Layout from "../components/layout";
import ActivitiesPresetContainer from "../containers/activities-preset-container";
import AuthModalContainer from "../containers/auth-modal-container";
import { useSelector } from "react-redux";
import { getUser } from "../store/user-slice";
import OfflineBanner from "../components/offline-banner";
import Header from "../components/header";
import Map from "../components/map";

const notAuthorizedPresets = [
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

const authorizedPresets = [
    {
        title: "Подходит всем",
        preset: "popular",
    },
    {
        title: "Рекомендации для вас",
        // todo: api
        preset: "health",
    },
    {
        title: "Выбор ваших соседей",
        // todo: api
        preset: "mind",
    },
];

const MainPage = () => {
    const user = useSelector(getUser);
    const presets = user ? authorizedPresets : notAuthorizedPresets;

    return (
        <>
            <Layout>
                <Header />
                <BannersHeader />
                {presets.map((preset, i) => (
                    <>
                        <ActivitiesPresetContainer {...preset} />
                        {i === 1 && <OfflineBanner />}
                    </>
                ))}
                <Map />
            </Layout>
            <AuthModalContainer />
        </>
    );
};

export default MainPage;
