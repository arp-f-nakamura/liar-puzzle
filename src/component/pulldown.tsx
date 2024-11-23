import { ChangeEvent, ChangeEventHandler, ReactElement } from "react";
import css from "./module.css/pulldown.module.css";

type PulldownProps = {
  options: string[];
  firstHandle: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  secondHandle: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Pulldown = (props: PulldownProps): ReactElement => {
  const { options, firstHandle, secondHandle } = props;
  return (
    <>
      <div className={css.div}>
        <p className={css.p}>嘘つきは</p>
        <select className={css.select} onChange={firstHandle}>
          {options.map((option) => {
            return <option key={option}>{option}</option>;
          })}
        </select>
        <p className={css.p}>と</p>
        <select className={css.select} onChange={secondHandle}>
          {options.map((option) => {
            return <option key={option}>{option}</option>;
          })}
        </select>
      </div>
    </>
  );
};
