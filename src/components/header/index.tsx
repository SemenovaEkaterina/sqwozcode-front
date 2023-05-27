import React, { FC } from "react";
import { useClassname } from "../../libs/css";

import "./styles.scss";
import { Link } from "react-router-dom";
import { Routes } from "../../libs/application-routes";
import { HomeOutlined } from "@ant-design/icons";
import MainSearchContainer from "../../containers/main-search-container";

const Header: FC = () => {
    const className = useClassname("header");

    return (
        <div className={className()}>
            <Link to={Routes.Main}>
                <HomeOutlined className={className("home")} />
            </Link>

            <MainSearchContainer />
        </div>
    );
};

export default Header;
