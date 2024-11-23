import { MouseEventHandler, ReactElement } from "react";
import css from "./module.css/modal.module.css";
type ModalProps = {
  judgement: string;
  lie1: string;
  lie2: string;
  showFlg: boolean;
  onClick: MouseEventHandler<HTMLElement>;
};

export const Modal = (props: ModalProps): ReactElement => {
  const { judgement, lie1, lie2, showFlg, onClick } = props;
  if (showFlg === true) {
    return (
      <div className={css.modal}>
        <div className={css.body}>
          {judgement === "正解！" ? (
            <h1 className={css.correct}>{judgement}</h1>
          ) : (
            <h1 className={css.incorrect}>{judgement}</h1>
          )}
          <p className={css.p}>{`嘘つきは${lie1}と${lie2}でした！`}</p>
          <button className={css.button} onClick={onClick}>
            次の問題へ
          </button>
        </div>
      </div>
    );
  }
  return <></>;
};
