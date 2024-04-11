import { ChakraProvider, Stack } from "@chakra-ui/react"

import IssueList from "~components/IssueList"
import ListHeader from "~components/IssueList/ListHeader"
import Splash from "~components/Splash"
import { useBacklogAuth } from "~hooks/auth"
import { useIssue } from "~hooks/issue"
import { customTheme } from "~utils"

function IndexPopup() {
  const { isLoggedIn } = useBacklogAuth()

  // 課題一覧を取得
  const {
    data: issues, // 課題データ
    ...rest
  } = useIssue()

  return (
    <ChakraProvider theme={customTheme}>
      <Stack w="xs">
        {isLoggedIn ? (
          <Stack>
            <ListHeader title="課題一覧" />
            <IssueList issues={issues} {...rest} />
          </Stack>
        ) : (
          <Splash />
        )}
      </Stack>
    </ChakraProvider>
  )
}

export default IndexPopup
