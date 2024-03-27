import { ChakraProvider } from "@chakra-ui/react"

import IssueList from "~components/IssueList"
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
        <IssueList
          params={{
            projectId: projects
          }}
        />
      ) : (
        <Splash />
      )}
    </ChakraProvider>
  )
}

export default IndexSidePanel
