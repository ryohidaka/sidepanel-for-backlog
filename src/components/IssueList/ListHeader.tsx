import { Heading, HStack, Link } from "@chakra-ui/react"

import Header from "../Header"

type Props = {
  title: string // ヘッダーのタイトル
}

/**
 * Headerコンポーネント
 * ページのヘッダー部分を表示するコンポーネント
 * @param {Props} props - ヘッダーのタイトル
 * @returns {JSX.Element} レンダリング結果
 */
function ListHeader({ title }: Props): JSX.Element {
  return (
    <Header>
      <HStack justifyContent="space-between">
        <Heading as="h1" size="sm">
          {title}
        </Heading>
        <Link href="options.html" mr={2} isExternal>
          設定
        </Link>
      </HStack>
    </Header>
  )
}

export default ListHeader
