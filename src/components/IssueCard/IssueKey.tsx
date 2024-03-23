import { Link } from "@chakra-ui/react"

import { useIssueURL } from "~hooks/issue"

type Props = {
  issueKey: string // バックログの課題キー
}

/**
 * IssueKeyコンポーネント
 * バックログの課題キーを表示するコンポーネント
 * @param {Props} props - バックログの課題キー
 * @returns {JSX.Element}
 */
function IssueKey({ issueKey }: Props): JSX.Element {
  // 課題キーからURLを取得
  const url = useIssueURL(issueKey)

  return (
    <Link href={url} color="#4caf93" mr={2} isExternal>
      {issueKey}
    </Link>
  )
}

export default IssueKey
