import React, { FC } from "react";
import { useClassname } from "../../libs/css";
import { Modal, Radio } from "antd";
import {
    ArrowLeftOutlined,
    ArrowRightOutlined,
    CloseOutlined,
} from "@ant-design/icons";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import img from "./img.svg";

import "./styles.scss";
import { useState } from "react";
import Button from "../button";

interface SurveyQuestion {
    text: string;
    answers: Array<{
        id: string;
        text: string;
        nextQuestion?: string;
        result?: string;
    }>;
}

interface SurveyProps {
    isOpened: boolean;
    data: Record<string, SurveyQuestion>;
    onClose: () => void;
}

const SurveyModal: FC<SurveyProps> = ({ isOpened, data, onClose }) => {
    const className = useClassname("survey-modal");
    const [activeQuestionId, setActiveQuestionId] = useState("0");
    const activeQuestion = data[activeQuestionId];

    const [anserId, setAnswerId] = useState<string>(
        activeQuestion.answers[0].id
    );

    const [answersHistory, setAnswersHistory] = useState<
        Array<{ qId: string; aId: string }>
    >([]);

    return (
        <Modal
            open={isOpened}
            centered
            width={700}
            modalRender={() => (
                <div className={className("modal")}>
                    <div className={className("close")}>
                        <Button mode="icon" onClick={onClose}>
                            <CloseOutlined />
                        </Button>
                    </div>
                    <img className={className("image")} src={img} />
                    <div className={className("title")}>
                        {activeQuestion.text}
                    </div>
                    <div className={className("answers")}>
                        {activeQuestion.answers.map((answer) => (
                            <Radio
                                checked={anserId === answer.id}
                                className={className("answer")}
                                onChange={() => {
                                    setAnswerId(answer.id);
                                }}
                            >
                                {answer.text}
                            </Radio>
                        ))}
                    </div>
                    <div className={className("footer")}>
                        <div className={className("step")}>
                            {answersHistory.length + 1}/6
                        </div>
                        <div className={className("buttons")}>
                            {Boolean(answersHistory.length) && (
                                <Button
                                    size="m"
                                    mode="plain"
                                    onClick={() => {
                                        const changedHistory = [
                                            ...answersHistory,
                                        ];
                                        const prev = changedHistory.pop();

                                        if (prev) {
                                            setActiveQuestionId(prev.qId);
                                            setAnswerId(prev.aId);
                                            setAnswersHistory(changedHistory);
                                        }
                                    }}
                                >
                                    <ArrowLeftOutlined /> Назад
                                </Button>
                            )}
                            <Button
                                size="m"
                                mode="plain"
                                onClick={() => {
                                    const currentAnswer =
                                        activeQuestion.answers.find(
                                            (a) => a.id === anserId
                                        );

                                    if (currentAnswer?.nextQuestion) {
                                        setAnswersHistory([
                                            ...answersHistory,
                                            {
                                                qId: activeQuestionId,
                                                aId: anserId,
                                            },
                                        ]);
                                        setActiveQuestionId(
                                            currentAnswer?.nextQuestion
                                        );
                                        setAnswerId(
                                            data[currentAnswer?.nextQuestion]
                                                .answers[0].id
                                        );
                                    }

                                    if (currentAnswer?.result) {
                                        // handleSubmit
                                        alert(currentAnswer?.result);
                                    }
                                }}
                            >
                                Вперед <ArrowRightOutlined />
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        />
    );
};

export default SurveyModal;
