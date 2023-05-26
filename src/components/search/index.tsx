import React, { FC } from "react";
import { useClassname } from "../../libs/css";
import { Input } from "antd";

import "./styles.scss";
import Button from "../button";
import { Link } from "react-router-dom";
import { Routes } from "../../libs/application-routes";
import { useState } from "react";

const Search: FC = () => {
    const className = useClassname("search");
    const [value, setValue] = useState("");

    return (
        <div className={className()}>
            <Input
                value={value}
                className={className("input")}
                suffix={
                    <Link to={`${Routes.List}?search=${value}`}>
                        <Button mode="active" size="l">
                            Найти
                        </Button>
                    </Link>
                }
                placeholder="Введите название занятия"
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};

export default Search;
