type ButtonDisabledProps = {
  firstAnswer: string;
  secondAnswer: string;
};

/** 回答ボタンの活性制御ロジック */
export const buttonDisabled = (props: ButtonDisabledProps): boolean => {
  const { firstAnswer, secondAnswer } = props;
  return (
    firstAnswer === "" || secondAnswer === "" || firstAnswer === secondAnswer
  );
};
