import { ChakraProvider, Stack } from "@chakra-ui/react"

import IssueList from "~components/IssueList"
import ListHeader from "~components/IssueList/ListHeader"
import Splash from "~components/Splash"
import { useBacklogAuth } from "~hooks/auth"
import { useProject } from "~hooks/project"
import { customTheme } from "~utils"

function IndexPopup() {
  const { isLoggedIn } = useBacklogAuth()

  // プロジェクト情報を取得
  const projects = useProject()
  return (
    <ChakraProvider theme={customTheme}>
      <Stack w="xs">
        {isLoggedIn ? (
          <Stack>
            <ListHeader title="課題一覧" />
            <IssueList params={{ projectId: projects }} />
          </Stack>
        ) : (
          <Splash />
        )}
      </Stack>
    </ChakraProvider>
  )
}

export default IndexPopup
