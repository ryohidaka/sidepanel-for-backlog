import { Button, Stack } from "@chakra-ui/react"

import { useIssue } from "~hooks/issue"
import { useProject } from "~hooks/project"

import IssueCard from "../IssueCard"
import Loader from "../Loader"
import ListHeader from "./ListHeader"

/**
 * IssueListコンポーネント
 * バックログの課題一覧を表示するコンポーネント
 * @returns {JSX.Element} レンダリング結果
 */
function IssueList(): JSX.Element {
  // プロジェクト情報を取得
  const projects = useProject()

  const {
    data: issues, // 課題データ
    isValidating, // データ取得中かどうか
    isReachingEnd, // ページが最後に到達したかどうか
    fetchMore // 次のページを取得する関数
  } = useIssue(projects)

  return (
    <Stack>
      <ListHeader title="課題一覧" />

      <Stack p={2} spacing={2} overflowY="scroll" position="relative">
        {/* 課題が存在する場合、それぞれの課題をIssueCardコンポーネントで表示 */}
        {issues &&
          issues.map((issue) => <IssueCard key={issue.id} issue={issue} />)}

        {!isReachingEnd && <Button onClick={fetchMore}>もっと読み込む</Button>}

        {/* データ取得中の場合、ローダーを表示 */}
        {isValidating && <Loader />}
      </Stack>
    </Stack>
  )
}

export default IssueList
