import icon from "../img/icon_dammy.png";
import portraitA from "../img/portraitA.png";
import portraitB from "../img/portraitA.png";
import portraitC from "../img/portraitA.png";
import portraitD from "../img/portraitA.png";
import portraitE from "../img/portraitA.png";
import portraitF from "../img/portraitA.png";

/** 証言者6人の名前 */
export const nameFlg: string[] = ["A", "B", "C", "D", "E", "F"];
/** 嘘つきフラグ */
export const liarFlg: number[] = [1, 1, 0, 0, 0, 0];
/** 誰に関する発言をするかフラグ */
export const specifyFlg: number[] = [0, 1, 2, 3, 4, 5];
/** プルダウンの選択肢 */
export const options: string[] = ["", "A", "B", "C", "D", "E", "F"];
/** 証言者6人の顔 */
export const portraits: string[] = [
  portraitA,
  portraitB,
  portraitC,
  portraitD,
  portraitE,
  portraitF,
];
