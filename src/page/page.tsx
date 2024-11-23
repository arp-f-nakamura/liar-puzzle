import { ChangeEvent, ReactElement, useEffect, useState } from "react";
import { Modal } from "../component/modal";
import { Pulldown } from "../component/pulldown";
import { Witness } from "../component/witness";
import { options } from "../constant/constant";
import icon_dammy from "../img/icon_dammy.png";
import {
  answerJudgement,
  AnswerJudgementProps,
} from "../logic/answerJudgement";
import { answerOnClick } from "../logic/answerOnClick";
import { arrayControl } from "../logic/arrayControl";
import { buttonDisabled } from "../logic/buttonDisabled";
import { modalOnClick } from "../logic/modalOnClick";
import { reset } from "../logic/reset";
import { Question } from "../type/type";
import css from "./page.module.css";

export const Page = (): ReactElement => {
  // 嘘つきパズルの情報
  const [array, setArray] = useState<Question[]>([]);
  // 回答プルダウン1人目の値
  const [firstAnswer, setFirstAnswer] = useState("");
  // 回答プルダウン2人目の値
  const [secondAnswer, setSecondAnswer] = useState("");
  // モーダル開閉フラグ
  const [modalFlg, setModalFlg] = useState(false);

  /** 正誤判定のためのプロップス */
  const answerJudgementProps: AnswerJudgementProps = {
    array: array,
    firstAnswer: firstAnswer,
    secondAnswer: secondAnswer,
    setModalFlg: setModalFlg,
  };
  /** 回答プルダウン1人目の変更 */
  const firstHandle = (e: ChangeEvent<HTMLSelectElement>) => {
    setFirstAnswer(e.target.value);
  };
  /** 回答プルダウン2人目の変更 */
  const secondHandle = (e: ChangeEvent<HTMLSelectElement>) => {
    setSecondAnswer(e.target.value);
  };

  // 初回レンダリング時のみ実行
  useEffect(() => {
    const initialArray = arrayControl();
    setArray(initialArray);
  }, []);

  return (
    <>
      <div className={css.container}>
        <Modal
          judgement={answerJudgement(answerJudgementProps).judgement}
          lie1={answerJudgement(answerJudgementProps).liar1}
          lie2={answerJudgement(answerJudgementProps).liar2}
          showFlg={modalFlg}
          onClick={modalOnClick}
        />
        <h1 className={css.h1}>嘘つきパズル</h1>
        <p className={css.p}>この中に嘘つきは2人います</p>
        {array.map((item) => (
          <Witness
            key={item.name}
            img={item.img}
            human={item.name}
            comment={item.comment || ""}
          />
        ))}
        <div className={css.kaito}>
          <Pulldown
            options={options}
            firstHandle={firstHandle}
            secondHandle={secondHandle}
          />
          <div className={css.sosa}>
            <button
              className={css.answerButton}
              disabled={buttonDisabled({
                firstAnswer: firstAnswer,
                secondAnswer: secondAnswer,
              })}
              onClick={answerOnClick({ setModalFlg: setModalFlg })}
            >
              回答する
            </button>
            <button onClick={reset} className={css.resetButton}>
              問題リセット
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
