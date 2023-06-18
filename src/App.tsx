import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
  }
  button {
    border: 0;
    background: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0;
    }
`;

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
  color: white;
`;

export default function App() {
  return (
    <MainContainer>
      <GlobalStyle />
      <Header />
      <Outlet />
    </MainContainer>
  );
}
