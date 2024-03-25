import { ChakraProvider, Stack } from "@chakra-ui/react"

import IssueList from "~components/IssueList"
import Splash from "~components/Splash"
import { useBacklogAuth } from "~hooks/auth"

function IndexPopup() {
  const { isLoggedIn } = useBacklogAuth()
  return (
    <ChakraProvider>
      <Stack w="xs">{isLoggedIn ? <IssueList /> : <Splash />}</Stack>
    </ChakraProvider>
  )
}

export default IndexPopup
