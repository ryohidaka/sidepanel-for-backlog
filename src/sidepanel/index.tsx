import { ChakraProvider } from "@chakra-ui/react"

import IssueList from "~components/IssueList"
import Splash from "~components/Splash"
import { useBacklogAuth } from "~hooks/auth"
import { customTheme } from "~utils"

function IndexSidePanel() {
  const { isLoggedIn } = useBacklogAuth()
  return (
    <ChakraProvider theme={customTheme}>
      {isLoggedIn ? <IssueList /> : <Splash />}
    </ChakraProvider>
  )
}

export default IndexSidePanel
