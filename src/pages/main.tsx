import React from "react";
import {Link} from "react-router-dom";
import CounterContainer from "../containers/counter";
import {Routes} from "../libs/application-routes";

const MainPage = () => <>
    <CounterContainer />
    <Link to={Routes.List}>list</Link>
</>;


export default MainPage;
