import React, { FC } from "react";
import { useClassname } from "../../libs/css";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import stub from "./stub.png";
import "./styles.scss";

interface ActivityCardProps {
    title: string;
    description: string;
    info: string;
}

const ActivityCard: FC<ActivityCardProps> = (props) => {
    const className = useClassname("activity-card");

    return (
        <div className={className()}>
            <div className={className("image-container")}>
                <img className={className("image")} src={stub} />
            </div>
            <div className={className("content")}>
                <div className={className("title")}>{props.title}</div>
                <div className={className("description")}>
                    {props.description}
                </div>
                <div className={className("info")}>{props.info}</div>
            </div>
        </div>
    );
};

export default ActivityCard;
