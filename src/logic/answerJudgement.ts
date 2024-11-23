import { MouseEventHandler } from "react";
import { AnswerJudgement, Question } from "../type/type";

export type AnswerJudgementProps = {
  array: Question[];
  firstAnswer: string;
  secondAnswer: string;
  setModalFlg: React.Dispatch<React.SetStateAction<boolean>>;
};

/** 正誤判定ロジック */
export const answerJudgement = (
  props: AnswerJudgementProps
): AnswerJudgement => {
  const { array, firstAnswer, secondAnswer } = props;
  const liarArray = array.filter((human) => human.lie === 1);
  const liar = liarArray.map((item) => item.name);
  let judgement = "";
  if (liar.includes(firstAnswer) && liar.includes(secondAnswer)) {
    judgement = "正解！";
  } else {
    judgement = "不正解！";
  }

  return {
    judgement: judgement,
    liar1: liar[0],
    liar2: liar[1],
  };
};
