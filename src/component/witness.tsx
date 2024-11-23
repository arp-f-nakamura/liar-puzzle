import { ReactElement } from "react";
import css from "./module.css/witness.module.css";

type WitnessProps = {
  img: string;
  human: string;
  comment: string;
};

export const Witness = (props: WitnessProps): ReactElement => {
  const { img, human, comment } = props;
  return (
    <div className={css.container}>
      <img src={img} className={css.img} />
      <div className={css.div}>
        <h3 className={css.h}>{human}</h3>
        <p className={css.p}>{comment}</p>
      </div>
    </div>
  );
};
