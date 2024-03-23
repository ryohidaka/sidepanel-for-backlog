import { ChakraProvider, Stack } from "@chakra-ui/react"

import IssueList from "~components/IssueList"

function IndexPopup() {
  return (
    <ChakraProvider>
      <Stack w="xs">
        <IssueList />
      </Stack>
    </ChakraProvider>
  )
}

export default IndexPopup
