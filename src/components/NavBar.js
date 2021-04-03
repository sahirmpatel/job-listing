import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { BiSun, BiMoon } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";
import styled from "styled-components";

// styles

const Logo = styled(AiOutlineCode)`
  font-size: 40px;
  color: #5495ff;
`;

const HeaderBand = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ThemeButton = styled.button`
  background-color: transparent;

  font-size: 30px;
  border-radius: 50%;
  padding: 0px 6px;
  border: 0px solid black;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  outline: none;
`;

// styles

export default function NavBar() {
  const { dark, toggle } = useContext(ThemeContext);
  return (
    <HeaderBand>
      <Logo />
      <div>
        <ThemeButton theme={dark} onClick={() => toggle()}>
          {dark ? (
            <BiMoon style={{ color: "#E9E9EA" }} />
          ) : (
            <BiSun style={{ color: "#3A3A46" }} />
          )}
        </ThemeButton>
      </div>
    </HeaderBand>
  );
}
