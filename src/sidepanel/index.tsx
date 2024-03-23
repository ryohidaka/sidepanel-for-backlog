import { ChakraProvider } from "@chakra-ui/react"

import IssueList from "~components/IssueList"

function IndexSidePanel() {
  return (
    <ChakraProvider>
      <IssueList />
    </ChakraProvider>
  )
}

export default IndexSidePanel
