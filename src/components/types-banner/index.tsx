import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../libs/application-routes";
import { useClassname } from "../../libs/css";
import { Type, useUrlParams } from "../../libs/url-params";
import Button from "../button";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import img from "./img.png";

import "./styles.scss";

const linksConfig = [
    {
        title: "Для тела",
        type: Type.Health,
    },
    {
        title: "Для ума",
        type: Type.Mind,
    },
    {
        title: "Для души",
        type: Type.Soul,
    },
];

const TypesBanner: FC = () => {
    const className = useClassname("types-banner");

    const [urlParams] = useUrlParams();

    return (
        <div className={className()}>
            <div className={className("title")}>
                Занятия под любой образ жизни
            </div>
            {linksConfig.map(({ title, type }) => {
                const isActive = type === urlParams.type;
                if (isActive) {
                    return (
                        <div className={className("link")}>
                            <Button mode={"active"} size="m" isDisabled>
                                {title}
                            </Button>
                        </div>
                    );
                }

                return (
                    <Link
                        to={`${Routes.List}?type=${type}`}
                        className={className("link")}
                        key={title}
                    >
                        <Button mode={"plain"} size="m">
                            {title}
                        </Button>
                    </Link>
                );
            })}
            <img src={img} className={className("image")} />
        </div>
    );
};

export default TypesBanner;
