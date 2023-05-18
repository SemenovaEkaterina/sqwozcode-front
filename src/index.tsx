

import React from "react";

import ReactDOM from "react-dom/client";

import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements
} from "react-router-dom";

import {Provider} from "react-redux";

import ListPage from "./pages/list";
import MainPage from "./pages/main";
import {Routes} from "./libs/application-routes";
import store from "./store";

import "./index.css";

const router = createBrowserRouter(createRoutesFromElements(<>
    <Route element={<MainPage />} path={Routes.Main} />
    <Route element={<ListPage />} path={Routes.List} />
</>));

ReactDOM.createRoot(document.getElementById("root") as HTMLElement)
    .render(<React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
    </React.StrictMode>);

