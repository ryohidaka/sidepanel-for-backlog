import { ChakraProvider } from "@chakra-ui/react"

import IssueList from "~components/IssueList"
import Splash from "~components/Splash"
import { useBacklogAuth } from "~hooks/auth"

function IndexSidePanel() {
  const { isLoggedIn } = useBacklogAuth()
  return (
    <ChakraProvider>{isLoggedIn ? <IssueList /> : <Splash />}</ChakraProvider>
  )
}

export default IndexSidePanel
