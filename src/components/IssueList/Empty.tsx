import { Alert, AlertIcon } from "@chakra-ui/react"

/**
 * 課題一覧が空の場合の表示
 * @returns
 */
function Empty(): JSX.Element {
  return (
    <Alert status="info">
      <AlertIcon />
      課題が見つかりません
    </Alert>
  )
}

export default Empty
