import { ChakraProvider, Stack } from "@chakra-ui/react"

import IssueList from "~components/IssueList"
import ListHeader from "~components/IssueList/ListHeader"
import Splash from "~components/Splash"
import { useBacklogAuth } from "~hooks/auth"
import { useProject } from "~hooks/project"
import { customTheme } from "~utils"

function IndexSidePanel() {
  const { isLoggedIn } = useBacklogAuth()

  // プロジェクト情報を取得
  const projects = useProject()

  return (
    <ChakraProvider theme={customTheme}>
      {isLoggedIn ? (
        <Stack>
          <ListHeader title="課題一覧" />
          <IssueList
            params={{
              projectId: projects
            }}
          />
        </Stack>
      ) : (
        <Splash />
      )}
    </ChakraProvider>
  )
}

export default IndexSidePanel
