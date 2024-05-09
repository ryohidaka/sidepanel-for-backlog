import { useBacklog } from "use-backlog";
import { useMemo } from "react";

/**
 * IssueのURLを取得するカスタムフック
 * @param {string} issueKey - Issueのキー
 * @return {string} - IssueのURL
 */
export const useIssueURL = (issueKey: string): string => {
  // Backlogのホスト情報を取得
  const { backlog } = useBacklog();
  const baseURL = backlog?.webAppBaseURL;

  // IssueのURLを生成し
  const url = useMemo(() => {
    if (!baseURL) return "";

    return `${baseURL}/view/${issueKey}`;
  }, []);

  // IssueのURLを生成して返す
  return url;
};
