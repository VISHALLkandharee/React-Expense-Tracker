import React from "react";
import styled from "styled-components";
import GlobalStyles from "./GlobalStyles";
import Tracker from "./components/Tracker";

const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  padding: 27px;
  width: 100%;
  height: 100vh;
`;

const App = () => {
  return (
    <Main>
      <GlobalStyles />
      <Tracker />
    </Main>
  );
};

export default App;
