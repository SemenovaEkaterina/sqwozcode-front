import React from "react";

import ReactDOM from "react-dom/client";
import { ConfigProvider } from "antd";

import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";

import { Provider } from "react-redux";

import ListPage from "./pages/list";
import MainPage from "./pages/main";
import { Routes } from "./libs/application-routes";
import store from "./store";

import "moment/locale/ru";

import "./index.css";
import moment from "moment";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<MainPage />} path={Routes.Main} />
            <Route element={<ListPage />} path={Routes.List} />
        </>
    )
);

moment.locale("ru");

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <ConfigProvider
                theme={{
                    token: {
                        colorPrimary: "#2C323D",
                    },
                }}
            >
                <RouterProvider router={router} />
            </ConfigProvider>
        </Provider>
    </React.StrictMode>
);
