import { isAfter, subHours } from "date-fns";

/**
 * 期日が24時間以内に過ぎているかどうかを判定する関数
 * @param {string} dueDate - 期日の文字列
 * @returns {boolean} 期日が24時間以内に過ぎている場合はtrue、それ以外はfalse
 */
export const isTimeOver = (dueDate: string): boolean => {
  // 期日と現在の日時をDateオブジェクトとして生成
  const date = new Date(dueDate);
  const now = new Date();

  // 期日が現在の日時の24時間後にあるかどうかを判定
  return isAfter(date, subHours(now, 24));
};

/**
 * 日付文字列をフォーマットする関数
 * @param {string} dateString - 日付の文字列
 * @returns {string} フォーマットされた日付文字列（年/月/日）
 */
export const formatDate = (dateString: string): string => {
  // 日付文字列をDateオブジェクトに変換し、日本の日付形式（年/月/日）にフォーマット
  return new Date(dateString).toLocaleDateString("ja-JP", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
