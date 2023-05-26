import React, { FC } from "react";
import { useClassname } from "../../libs/css";
import { UrlParams } from "../../libs/url-params";
import { Checkbox } from "antd";
import moment from "moment";

import "./styles.scss";
import { firstLetterToUpperCase } from "../../libs/string";

export interface FiltersData {
    online: string[];
    dayOfWeek: string[];
}

export interface FiltersProps {
    data: FiltersData;
    onChangeFilter: (key: keyof UrlParams, value: string[]) => void;
}

type CheckboxGroupConfig = Array<{
    value: string;
    title: string;
}>;

const onlineConfig: CheckboxGroupConfig = [
    {
        value: "false",
        title: "Очно",
    },
    {
        value: "true",
        title: "Онлайн",
    },
];

const dayOfWeekConfig: CheckboxGroupConfig = [...new Array(7)].map((_, i) => {
    const name = moment(i)
        .startOf("week")
        .isoWeekday(i + 1)
        .format("dddd");

    return {
        value: i.toString(),
        title: firstLetterToUpperCase(name),
    };
});

const CheckboxGroup: FC<{
    config: CheckboxGroupConfig;
    value: string[];
    onChange: (value: string[]) => void;
}> = ({ value, onChange, config }) => {
    const className = useClassname("filters");

    return (
        <div className={className("checkbox-group")}>
            {config.map((item) => (
                <div className={className("checkbox")}>
                    <Checkbox
                        onChange={(e) => {
                            if (e.target.checked) {
                                onChange([...value, item.value]);
                            } else {
                                onChange(value.filter((i) => i !== item.value));
                            }
                        }}
                        checked={value.includes(item.value)}
                    >
                        {item.title}
                    </Checkbox>
                </div>
            ))}
        </div>
    );
};

const Filters: FC<FiltersProps> = ({ data, onChangeFilter }) => {
    const className = useClassname("filters");

    return (
        <div>
            <div className={className("filter")}>
                <div className={className("title")}>Формат</div>
                <CheckboxGroup
                    config={onlineConfig}
                    value={data.online}
                    onChange={(value) => {
                        onChangeFilter("online", value);
                    }}
                />
            </div>
            <div className={className("filter")}>
                <div className={className("title")}>День недели</div>
                <CheckboxGroup
                    config={dayOfWeekConfig}
                    value={data.dayOfWeek}
                    onChange={(value) => {
                        onChangeFilter("dayOfWeek", value);
                    }}
                />
            </div>
        </div>
    );
};

export default Filters;
