import { ChakraProvider, Stack } from "@chakra-ui/react"

import ListHeader from "~components/IssueList/ListHeader"
import MyIssueList from "~components/MyIssueList"
import Splash from "~components/Splash"
import { useBacklogAuth } from "~hooks"
import { customTheme } from "~utils"

function IndexPopup() {
  // ログイン状態を取得
  const { isLoggedIn } = useBacklogAuth()

  return (
    <ChakraProvider theme={customTheme}>
      <Stack w="xs">
        {isLoggedIn ? (
          <>
            <ListHeader title="課題一覧" />
            <MyIssueList />
          </>
        ) : (
          <Splash />
        )}
      </Stack>
    </ChakraProvider>
  )
}

export default IndexPopup
