import React from "react";
import BannersHeader from "../components/banners-header";
import Layout from "../components/layout";
import ActivitiesPresetContainer from "../containers/activities-preset-container";
import AuthModalContainer from "../containers/auth-modal-container";
import { useSelector } from "react-redux";
import { getUser } from "../store/user-slice";
import OfflineBanner from "../components/offline-banner";
import MainSearchContainer from "../containers/main-search-container";

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
        title: "Выбор людей похожих на вас",
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
                <MainSearchContainer />
                <BannersHeader />
                {presets.map((preset, i) => (
                    <>
                        <ActivitiesPresetContainer {...preset} />
                        {i === 1 && <OfflineBanner />}
                    </>
                ))}
            </Layout>
            <AuthModalContainer />
        </>
    );
};

export default MainPage;
