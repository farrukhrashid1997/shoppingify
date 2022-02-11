import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div></div>
    </ChakraProvider>
  );
}

export default App;
