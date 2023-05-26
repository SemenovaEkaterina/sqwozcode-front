import React, { FC } from "react";
import SurveyModal from "../components/survey-modal";

const questionsConfig = {
    "0": {
        text: "Важна ли для вас регулярная физическая активность?",
        answers: [
            {
                id: "0",
                text: "Да",
                nextQuestion: "1",
            },
            {
                id: "1",
                text: "Нет",
                nextQuestion: "5",
            },
        ],
    },
    "1": {
        text: "Мечтали ли Вы в детстве стать спортсменом?",
        answers: [
            {
                id: "0",
                text: "Да",
                nextQuestion: "2",
            },
            {
                id: "1",
                text: "Нет",
                nextQuestion: "3",
            },
        ],
    },
    "2": {
        text: "Любите ли Вы соревноваться?",
        answers: [
            {
                id: "0",
                text: "Да",
                result: "СПОРТИВНЫЕ ИГРЫ",
            },
            {
                id: "1",
                text: "Нет",
                result: "СПОРТИВНЫЕ ЗАНЯТИЯ",
            },
        ],
    },
    "3": {
        text: "Согласны ли Вы с фразой «Движение — это жизнь»?",
        answers: [
            {
                id: "0",
                text: "Да",
                nextQuestion: "4",
            },
            {
                id: "1",
                text: "Нет",
                result: "КРАСОТА И ЗДОРОВЬЕ",
            },
        ],
    },
    "4": {
        text: "Вы любите танцевать?",
        answers: [
            {
                id: "0",
                text: "Да",
                result: "ТАНЦЫ",
            },
            {
                id: "1",
                text: "Нет",
                result: "ГИМНАСТИКА",
            },
        ],
    },
    "5": {
        text: "Увлекаетесь ли Вы искусством?",
        answers: [
            {
                id: "0",
                text: "Да",
                nextQuestion: "6",
            },
            {
                id: "1",
                text: "Нет",
                nextQuestion: "9",
            },
        ],
    },
    "6": {
        text: "Интересно ли вам узнавать исторические факты?",
        answers: [
            {
                id: "0",
                text: "Да",
                result: "ИСТОРИЯ, ЭКСКУРСИИ",
            },
            {
                id: "1",
                text: "Нет",
                nextQuestion: "7",
            },
        ],
    },
    "7": {
        text: "Любите ли Вы музыку?",
        answers: [
            {
                id: "0",
                text: "Да",
                result: "МУЗЫКА",
            },
            {
                id: "1",
                text: "Нет",
                nextQuestion: "8",
            },
        ],
    },
    "8": {
        text: "Любите ли Вы создавать что-то своми руками?",
        answers: [
            {
                id: "0",
                text: "Да",
                result: "ХУДОЖЕСТВЕННО-ПРИКЛАДНОЕ ТВОРЧЕСТВО",
            },
            {
                id: "1",
                text: "Нет",
                nextQuestion: "ТЕАТР, КИНО, ЛИТЕРАТУРА",
            },
        ],
    },
    "9": {
        text: "Любите ли Вы получать новые знания?",
        answers: [
            {
                id: "0",
                text: "Да",
                nextQuestion: "10",
            },
            {
                id: "1",
                text: "Нет",
                nextQuestion: "13",
            },
        ],
    },
    "10": {
        text: "Хотели бы Вы изучить иностранный язык?",
        answers: [
            {
                id: "0",
                text: "Да",
                result: "ИНОСТРАННЫЕ ЯЗЫКИ",
            },
            {
                id: "1",
                text: "Нет",
                nextQuestion: "11",
            },
        ],
    },
    "11": {
        text: "Интересно ли вам узнать больше о современных технологиях?",
        answers: [
            {
                id: "0",
                text: "Да",
                result: "ИНФОРМАЦИОННЫЕ ТЕХНОЛОГИИ",
            },
            {
                id: "1",
                text: "Нет",
                nextQuestion: "12",
            },
        ],
    },
    "12": {
        text: "Хотели бы Вы лучше разбираться в психологии людей?",
        answers: [
            {
                id: "0",
                text: "Да",
                result: "ПСИХОЛОГИЯ",
            },
            {
                id: "1",
                text: "Нет",
                result: "ОБРАЗОВАНИЕ",
            },
        ],
    },
    "13": {
        text: "Интересно ли вам заниматься созданием домашнего уюта?",
        answers: [
            {
                id: "0",
                text: "Да",
                result: "ДОМОВОДСТВО",
            },
            {
                id: "1",
                text: "Нет",
                result: "НАСТОЛЬНЫЕ ИГРЫ, ИНТЕЛЛЕКТУАЛЬНЫЙ ДОСУГ",
            },
        ],
    },
};

const SurveyModalContainer: FC<{
    isOpened: boolean;
    onClose: () => void;
}> = ({ isOpened, onClose }) => {
    // const apiClient = useApiClient();
    // const dispatch = useDispatch();

    // const handleSubmit = useCallback(async (data: any) => {
    //     // todo
    // }, []);

    return (
        <SurveyModal
            isOpened={isOpened}
            data={questionsConfig}
            onClose={onClose}
        />
    );
};

export default SurveyModalContainer;
