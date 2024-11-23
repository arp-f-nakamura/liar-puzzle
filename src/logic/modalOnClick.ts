import { MouseEventHandler } from "react";

/** モーダル内のボタンクリック時のロジック */
export const modalOnClick: MouseEventHandler<HTMLElement> = () => {
  window.location.reload();
};
