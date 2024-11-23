/** 噓つきパズルの型 */
export type Question = {
  img: string;
  name: string;
  lie: number;
  comment: string;
};

/** 正誤判定の型 */
export type AnswerJudgement = {
  judgement: string;
  liar1: string;
  liar2: string;
};
