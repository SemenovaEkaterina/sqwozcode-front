import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../libs/application-routes";
import { useClassname } from "../../libs/css";
import ActivityImage from "../activity-image";
import "./styles.scss";

interface ActivityCardProps {
    id: string;
    title: string;
    description: string;
    info: string;
    clusterId: string;
}

const ActivityCard: FC<ActivityCardProps> = ({
    id,
    title,
    description,
    info,
    clusterId,
}) => {
    const className = useClassname("activity-card");

    return (
        <Link to={`${Routes.Activity}?id=${id}`} className={className()}>
            <div className={className("image-container")}>
                <ActivityImage
                    className={className("image")}
                    clusterId={clusterId}
                />
            </div>
            <div className={className("content")}>
                <div className={className("title")}>{title}</div>
                <div className={className("description")}>{description}</div>
                <div className={className("info")}>{info}</div>
            </div>
        </Link>
    );
};

export default ActivityCard;
