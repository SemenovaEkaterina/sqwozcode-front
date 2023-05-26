import React, { FC } from "react";
import { useClassname } from "../../libs/css";
import { Modal, Input, DatePicker } from "antd";
import { CloseOutlined } from "@ant-design/icons";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import img from "./img.svg";

import "./styles.scss";
import Button from "../button";
import { useState } from "react";
import { useCallback } from "react";

export interface AuthModalFormData {
    fName: string;
    mName: string;
    lName: string;
    birth: string;
}

interface AuthModalProps {
    isOpened: boolean;
    onSubmit: (data: AuthModalFormData) => void;
    onClose: () => void;
}

const AuthModal: FC<AuthModalProps> = (props) => {
    const className = useClassname("auth-modal");

    const [formState, setFormState] = useState<AuthModalFormData>({
        fName: "",
        mName: "",
        lName: "",
        birth: "",
    });

    const submit = useCallback(() => {
        props.onSubmit(formState);
    }, [formState, props.onSubmit]);

    return (
        <Modal
            open={props.isOpened}
            centered
            width={764}
            closable
            onCancel={props.onClose}
            modalRender={() => (
                <div className={className("modal")}>
                    <div className={className("close")}>
                        <Button mode="icon" onClick={props.onClose}>
                            <CloseOutlined />
                        </Button>
                    </div>
                    <div className={className("title")}>
                        Давайте познакомимся поближе
                    </div>
                    <div className={className("description")}>
                        Благодаря вашим данным, мы сможем более тщательно
                        подобрать подходящие занятия
                    </div>
                    <img className={className("image")} src={img} />
                    <Input
                        placeholder="Фамилия"
                        className={className("input")}
                        value={formState.lName}
                        onChange={(e) =>
                            setFormState((state) => ({
                                ...state,
                                lName: e.target.value,
                            }))
                        }
                    />
                    <Input
                        placeholder="Имя"
                        className={className("input")}
                        value={formState.fName}
                        onChange={(e) =>
                            setFormState((state) => ({
                                ...state,
                                fName: e.target.value,
                            }))
                        }
                    />
                    <Input
                        placeholder="Отчество"
                        className={className("input")}
                        value={formState.mName}
                        onChange={(e) =>
                            setFormState((state) => ({
                                ...state,
                                mName: e.target.value,
                            }))
                        }
                    />
                    <DatePicker
                        placeholder="Дата рождения"
                        className={className("input")}
                        onChange={(_value, dateString) =>
                            setFormState((state) => ({
                                ...state,
                                birth: dateString,
                            }))
                        }
                    />
                    <Button size="l" mode="active" onClick={submit}>
                        Отправить
                    </Button>
                </div>
            )}
        />
    );
};

export default AuthModal;
