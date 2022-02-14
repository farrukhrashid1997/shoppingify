import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Main from "./components/Main/Main";

function App() {
  return (
    <ChakraProvider>
      <Main />
    </ChakraProvider>
  );
}

export default App;
