import { ChakraProvider } from "@chakra-ui/react"

import ListHeader from "~components/IssueList/ListHeader"
import MyIssueList from "~components/MyIssueList"
import Splash from "~components/Splash"
import { useBacklogAuth } from "~hooks/auth"
import { customTheme } from "~utils"

// IndexSidePanelコンポーネントの定義
function IndexSidePanel() {
  // ログイン状態を取得
  const { isLoggedIn } = useBacklogAuth()

  // コンポーネントのレンダリング
  return (
    <ChakraProvider theme={customTheme}>
      {isLoggedIn ? (
        <>
          <ListHeader title="課題一覧" />
          <MyIssueList />
        </>
      ) : (
        <Splash />
      )}
    </ChakraProvider>
  )
}

// IndexSidePanelコンポーネントをエクスポート
export default IndexSidePanel
