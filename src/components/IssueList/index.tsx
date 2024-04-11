import { Stack } from "@chakra-ui/react"
import type { Option } from "backlog-js"
import { useInView } from "react-intersection-observer"

import { useIssue } from "~hooks/issue"

import IssueCard from "../IssueCard"
import Loader from "../Loader"
import Empty from "./Empty"

type Props = {
  params: Option.Issue.GetIssuesParams
}

/**
 * IssueListコンポーネント
 * バックログの課題一覧を表示するコンポーネント
 * @param {Props} params - 課題取得のためのパラメータ
 * @returns {JSX.Element} レンダリング結果
 */
function IssueList({ params }: Props): JSX.Element {
  const {
    data: issues, // 課題データ
    isValidating, // データ取得中かどうか
    isReachingEnd, // ページが最後に到達したかどうか
    fetchMore // 次のページを取得する関数
  } = useIssue(params)

  // 画面下の要素にrefを渡し、refが画面に表示されたらisScrollEndがtrueになる
  const { ref, inView: isScrollEnd } = useInView()

  // 画面が一番下 かつ データを取得中でない かつ ページが最後に到達していない時に、次のページを取得
  if (isScrollEnd && !isValidating && !isReachingEnd) {
    fetchMore()
  }

  return (
    <Stack p={2} spacing={2} overflowY="scroll" position="relative">
      {/* 課題が存在する場合、それぞれの課題をIssueCardコンポーネントで表示 */}
      {issues && issues.length > 0 ? (
        issues.map((issue) => <IssueCard key={issue.id} issue={issue} />)
      ) : (
        <Empty />
      )}

      {/* データ取得中でない場合、検知の要素を表示 */}
      {!isValidating && <div ref={ref} aria-hidden="true" />}

      {/* データ取得中の場合、ローダーを表示 */}
      {isValidating && <Loader />}
    </Stack>
  )
}

export default IssueList
