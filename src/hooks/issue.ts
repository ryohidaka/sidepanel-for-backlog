import type { Option } from "backlog-js";
import type { Issue } from "backlog-js/dist/types/entity";
import { useCallback, useEffect, useState } from "react";
import useSWRInfinite from "swr/infinite";

import { useBacklogAuth } from "./auth";
import { useBacklog } from "./backlog";

/**
 * BacklogのIssueを取得するカスタムフック
 * @param {Option.Issue.GetIssuesParams} params - Issue取得のためのパラメータ
 * @return {object} - 取得したIssueの配列とその他の情報を含むオブジェクト
 */
export const useIssue = (params?: Option.Issue.GetIssuesParams) => {
  // Backlog APIのクライアントを取得
  const backlog = useBacklog();

  const [key, setKey] = useState(JSON.stringify(params));

  // 一度に取得するIssueの上限数
  const limit = 20;

  useEffect(() => {
    setKey(JSON.stringify(params));
  }, [backlog, params]);

  /**
   * ページキーを元にIssueを取得する関数
   * @param {string} pageKey - ページキー
   * @return {Promise<Issue.Issue[]>} - 取得したIssueの配列
   */
  const fetcher = async (pageKey: string) => {
    if (!backlog) return [];
    const pageIndex = parseInt(pageKey.split("-")[1]);
    const issues = await backlog.getIssues({
      ...{ count: limit, offset: pageIndex * limit },
      ...params,
    });

    return issues;
  };

  // useSWRInfiniteの返り値を全て使いたいので定義
  const SWRInfiniteResponse = useSWRInfinite<Issue.Issue[]>(
    (index) => `page-${index}-${key}`,
    fetcher,
    {
      revalidateIfStale: false, // キャッシュがあっても再検証
      revalidateOnFocus: true, // windowをフォーカスすると再検証
      revalidateFirstPage: true, // ページを読み込むとき毎回1ページ目を再検証
    },
  );

  // isReachingEndを出すために一度、分割代入で取り出す
  const { data, size, setSize } = SWRInfiniteResponse;

  // 最後に到達した
  const isEmpty = data?.[0].length === 0;
  const isReachingEnd =
    isEmpty || (data && data?.[data?.length - 1]?.length < limit);

  /**
   * もっと読み込む関数
   */
  const fetchMore = useCallback(() => {
    setSize(size + 1);
  }, [setSize, size]);

  return {
    ...SWRInfiniteResponse, // useSWRInfiniteの返り値を全部返す
    data: data?.flat(), // dataの型がData[][]となっているので、flatでData[]に変換する
    isReachingEnd,
    fetchMore,
  };
};

/**
 * IssueのURLを取得するカスタムフック
 * @param {string} issueKey - Issueのキー
 * @return {string} - IssueのURL
 */
export const useIssueURL = (issueKey: string): string => {
  // Backlogのホスト情報を取得
  const { host } = useBacklogAuth();

  // IssueのURLを生成して返す
  return `https://${host}/view/${issueKey}`;
};
