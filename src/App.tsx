import React from "react";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./components/MainContainer/MainContainer";
import "./assets/font/index.css";

function App() {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  );
}

export default App;
