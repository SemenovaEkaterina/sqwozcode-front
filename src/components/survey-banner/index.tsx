import React, { FC } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import SurveyModalContainer from "../../containers/survey-modal-container";
import { useClassname } from "../../libs/css";
import { getUser, toggleAuthModal } from "../../store/user-slice";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import img from "./img.svg";

import "./styles.scss";

const SurveyBanner: FC = () => {
    const className = useClassname("survey-banner");

    const [isOpened, setOpened] = useState(false);

    const user = useSelector(getUser);
    const dispath = useDispatch();

    return (
        <>
            <div className={className()}>
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
            </div>
            <SurveyModalContainer
                isOpened={user ? isOpened : false}
                onClose={() => setOpened(false)}
            />
        </>
    );
};

export default SurveyBanner;
