import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderContainer = styled.div`
  display: flex;
  width: 500px;
  justify-content: space-between;
  padding: 10px;
`;

function Header() {
  return (
    <HeaderContainer>
      <Link to="/">Popular</Link>
      <Link to="/coming-soon">Coming-Soon</Link>
      <Link to="/now-playing">Now-Playing</Link>
    </HeaderContainer>
  );
}

export default Header;
