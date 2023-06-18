import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import styled from "styled-components";

const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  flex-direction: column;
`;

export default function App() {
  return (
    <MainContainer>
      <Header />
      <Outlet />
    </MainContainer>
  );
}
