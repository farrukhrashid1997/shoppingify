import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./components/MainContainer/MainContainer";

function App() {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  );
}

export default App;
