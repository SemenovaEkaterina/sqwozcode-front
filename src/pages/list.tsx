import React from "react";
import {Link} from "react-router-dom";
import CounterContainer from "../containers/counter";
import {Routes} from "../libs/application-routes";

const ListPage = () => <>
    <CounterContainer />
    <Link to={Routes.Main}>main</Link>
</>;


export default ListPage;
