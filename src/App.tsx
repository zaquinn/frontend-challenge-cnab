import React from "react";
import { HomePage } from "./pages/HomePage";
import GlobalStyle from "./styles/global";

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <HomePage />
    </>
  );
};
