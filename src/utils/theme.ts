import { extendTheme } from "@chakra-ui/react";

import { BRAND_COLOR } from "~constants";

// ブランドカラーのオブジェクトをArray.fromとObject.fromEntriesで生成
const brandColors = Object.fromEntries(
  Array.from({ length: 9 }, (_, i) => [`${(i + 1) * 100}`, BRAND_COLOR]),
);

/**
 * カスタムテーマを定義
 * ブランドカラーはすべて同じ色で設定
 */
export const customTheme = extendTheme({
  colors: {
    brand: brandColors,
  },
});
