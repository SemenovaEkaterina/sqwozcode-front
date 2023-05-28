import React, { FC } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import SurveyModalContainer from "../../containers/survey-modal-container";
import { Routes } from "../../libs/application-routes";
import { useClassname } from "../../libs/css";
import {
    getSurveyResult,
    getUser,
    toggleAuthModal,
} from "../../store/user-slice";
import img from "./img.svg";

import "./styles.scss";

const resultData: Record<string, string> = {
    // "0": "Вы прирожденный <>!",
};

const SurveyBanner: FC = () => {
    const className = useClassname("survey-banner");

    const [isOpened, setOpened] = useState(false);

    const user = useSelector(getUser);
    const dispath = useDispatch();

    const surveyResult = useSelector(getSurveyResult);

    return (
        <>
            <div className={className()}>
                {surveyResult ? (
                    <>
                        <div className={className("content")}>
                            <div className={className("title")}>
                                {resultData[surveyResult] ||
                                    "Вы прирожденный хороший человек"}
                            </div>
                            <Link
                                to={`${Routes.List}?cluster=${surveyResult}#activities-list`}
                                className={className("button")}
                            >
                                Смотреть рекомендации по опросу
                            </Link>
                        </div>
                    </>
                ) : (
                    <>
                        <img src={img} className={className("image")} />
                        <div className={className("content")}>
                            <div className={className("title")}>
                                Пройдите тест и определите любимые занятия
                            </div>
                            <div
                                className={className("button")}
                                onClick={() => {
                                    if (!user) {
                                        dispath(toggleAuthModal(true));
                                    }
                                    setOpened(true);
                                }}
                            >
                                Пройти тест по подбору занятия
                            </div>
                        </div>
                    </>
                )}
            </div>
            <SurveyModalContainer
                isOpened={user ? isOpened : false}
                onClose={() => setOpened(false)}
            />
        </>
    );
};

export default SurveyBanner;
