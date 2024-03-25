import { ChakraProvider, Container, Heading } from "@chakra-ui/react"

import Header from "~components/Header"
import { APP_NAME, APP_VERSION_WITH_PREFIX } from "~constants"
import SettingForm from "~options/SettingForm"

function IndexOptions() {
  return (
    <ChakraProvider>
      <Header>
        <Heading as="h1" size="lg">
          {APP_NAME} ({APP_VERSION_WITH_PREFIX})
        </Heading>
      </Header>
      <Container as="main" mt={2}>
        <SettingForm />
      </Container>
    </ChakraProvider>
  )
}

export default IndexOptions
