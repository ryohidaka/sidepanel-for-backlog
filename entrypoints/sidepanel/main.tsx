import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import { ChakraProvider } from "@chakra-ui/react";
import { customTheme } from "~utils/theme.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={customTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
