import { MouseEventHandler } from "react";

type AnswerOnClickProps = {
  setModalFlg: React.Dispatch<React.SetStateAction<boolean>>;
};

/** 回答ボタンクリック時のロジック */
export const answerOnClick = (
  props: AnswerOnClickProps
): MouseEventHandler<HTMLElement> => {
  const { setModalFlg } = props;
  return (event) => {
    setModalFlg(true);
  };
};
