import { ChakraProvider, Stack } from "@chakra-ui/react"

import IssueList from "~components/IssueList"
import Splash from "~components/Splash"
import { useBacklogAuth } from "~hooks/auth"
import { customTheme } from "~utils"

function IndexPopup() {
  const { isLoggedIn } = useBacklogAuth()
  return (
    <ChakraProvider theme={customTheme}>
      <Stack w="xs">{isLoggedIn ? <IssueList /> : <Splash />}</Stack>
    </ChakraProvider>
  )
}

export default IndexPopup
