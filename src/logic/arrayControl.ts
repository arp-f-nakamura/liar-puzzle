import { liarFlg, nameFlg, portraits, specifyFlg } from "../constant/constant";
import { Question } from "../type/type";

/** 嘘つきパズルを作るロジック */
export const arrayControl = (): Question[] => {
  const shuffleArray = (array: any[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      // 0 <= j < iでランダムな整数を設定
      const j = Math.floor(Math.random() * (i + 1));
      // i番目の要素の中身をとっておく
      const element = array[i];
      // i番目をj番目に移動
      array[i] = array[j];
      // j番目に要素の中身を入れる
      array[j] = element;
    }
    return array;
  };
  shuffleArray(liarFlg);
  shuffleArray(specifyFlg);
  /** 嘘つきパズルの中身 */
  const question: Question[] = [];

  for (let i = 0; i < nameFlg.length; i++) {
    let comment = "";
    /** i番目の証言対象者 */
    const specify = specifyFlg[i];
    /** 証言内容 */
    const commentContent = (flg: boolean, specify: number): string => {
      if (flg === true) {
        return `${nameFlg[specify]}は正直者だよ`;
      } else if (flg === false) {
        return `${nameFlg[specify]}は嘘つきだよ`;
      }
      return "error";
    };

    if (liarFlg[i] === 1) {
      /** i番目が嘘つきだった場合、嘘の発言をする */
      if (specify === i) {
        // 0<= j < 6
        const j = Math.floor(Math.random() * (6 + 1));
        if (j === i) {
          comment = "僕は正直者だよ";
        } else {
          comment = commentContent(liarFlg[j] === 1, j);
        }
      } else if (specify !== i) {
        comment = commentContent(liarFlg[specify] === 1, specify);
      }
    } else if (liarFlg[i] === 0) {
      /** i番目がほんとつきだった場合、本当の発言をする */
      if (specify === i) {
        // 0<= j < 6
        const j = Math.floor(Math.random() * (6 + 1));
        if (j === i) {
          comment = "僕は正直者だよ";
        } else {
          comment = commentContent(liarFlg[j] === 0, j);
        }
      } else if (specify !== i) {
        comment = commentContent(liarFlg[specify] === 0, specify);
      }
    } else {
      comment = "error";
    }

    const element: Question = {
      img: portraits[i],
      name: nameFlg[i],
      lie: liarFlg[i],
      comment: comment,
    };

    question.push(element);
  }

  console.log(question);

  return question;
};
