import { ChakraProvider, Stack } from "@chakra-ui/react"

import IssueList from "~components/IssueList"
import ListHeader from "~components/IssueList/ListHeader"
import Splash from "~components/Splash"
import { useBacklogAuth } from "~hooks/auth"
import { useIssue } from "~hooks/issue"
import { customTheme } from "~utils"

function IndexSidePanel() {
  const { isLoggedIn } = useBacklogAuth()

  // 課題一覧を取得
  const {
    data: issues, // 課題データ
    ...rest
  } = useIssue()

  return (
    <ChakraProvider theme={customTheme}>
      {isLoggedIn ? (
        <Stack>
          <ListHeader title="課題一覧" />
          <IssueList issues={issues} {...rest} />
        </Stack>
      ) : (
        <Splash />
      )}
    </ChakraProvider>
  )
}

export default IndexSidePanel
