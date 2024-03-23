import { Card, CardBody, Heading } from "@chakra-ui/react"
import type { Issue } from "backlog-js/dist/types/entity"

import IssueKey from "./IssueKey"

type Props = {
  issue: Issue.Issue // バックログの課題情報
}

/**
 * IssueCardコンポーネント
 * バックログの課題情報を表示するカードコンポーネント
 * @param {Props} props - バックログの課題情報
 * @returns {JSX.Element}
 */
function IssueCard({ issue }: Props): JSX.Element {
  return (
    <Card as="article">
      <CardBody p={2} minH={12}>
        <Heading as="h2" size="xs" noOfLines={2}>
          {/* 課題キー */}
          <IssueKey issueKey={issue.issueKey} />
          {/* 課題タイトル */}
          {issue.summary}
        </Heading>
      </CardBody>
    </Card>
  )
}

export default IssueCard
