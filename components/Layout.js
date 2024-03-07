import Link from "next/link";
import styled from "styled-components";

const NavButton = styled(Link)`
  background: blue;
  border: none;
  color: white;
  width: 120px;
  padding: 10px 9px;
  text-decoration: none;

  &:hover {
    background: lightblue;
  }
`;

const FooterButton = styled(Link)`
  background: blue;
  border: none;
  color: white;
  width: 120px;
  padding: 10px 9px;
  text-decoration: none;

  &:hover {
    background: lightblue;
  }
`;

const ContainBox = styled.div`
  height: 80vh;
  width: 60%;
`;
export default function Layout({ children }) {
  return (
    <>
      <header>
        <NavButton href="/">Home</NavButton>
        <NavButton href="/test">Test</NavButton>
        <NavButton href="/">Home</NavButton>
      </header>
      <ContainBox>{children}</ContainBox>
      <footer>
        <FooterButton href="/impressum">Impressum</FooterButton>
      </footer>
    </>
  );
}
