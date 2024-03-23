import { Text } from "@chakra-ui/react"

import { formatDate, isTimeOver } from "~utils"

type Props = {
  dueDate?: string
}

/**
 * DueLabelコンポーネント
 * @param {Props} props - Propsのオブジェクト
 * @param {string} props.dueDate - 期日の文字列（オプション）
 * @returns {JSX.Element} Textコンポーネントまたは空のフラグメント
 */
function DueLabel({ dueDate }: Props): JSX.Element {
  // 期日をフォーマット
  const dateString = formatDate(dueDate)

  // 期日が過ぎているかどうかを判定
  const isOver = isTimeOver(dueDate)

  // ラベルの色を設定（期日が過ぎている場合は赤、それ以外は黒）
  const labelColor = isOver ? "red" : "black"

  // 期日が設定されている場合はTextコンポーネントを返し、それ以外は空のフラグメントを返す
  return dueDate ? <Text color={labelColor}>{dateString}</Text> : <></>
}

export default DueLabel
