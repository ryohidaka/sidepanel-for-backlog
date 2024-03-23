import { Card, CardBody, Heading, HStack, Stack } from "@chakra-ui/react"
import type { Issue } from "backlog-js/dist/types/entity"

import DueLabel from "./DueLabel"
import IssueKey from "./IssueKey"
import StatusBadge from "./StatusBadge"

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
        <Stack spacing={2}>
          <Heading as="h1" size="xs" noOfLines={2}>
            {/* 課題キー */}
            <IssueKey issueKey={issue.issueKey} />
            {/* 課題タイトル */}
            {issue.summary}
          </Heading>

          <HStack justifyContent="end">
            {/* 期限日 */}
            <DueLabel dueDate={issue.dueDate} />
            {/* 状態 */}
            <StatusBadge status={issue.status} />
          </HStack>
        </Stack>
      </CardBody>
    </Card>
  )
}

export default IssueCard
