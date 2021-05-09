import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { BiSun, BiMoon } from "react-icons/bi";
import { AiOutlineCode } from "react-icons/ai";
import styled from "styled-components";

import {
  Link
} from "react-router-dom";

// styles

const LogoParent = styled.div`
  font-size: 20px;
  color: #5495ff;
  display: flex;
  align-items: center;
  font-weight: 700;
  font-family: "Roboto Mono", monospace;
`;

const Logo = styled(AiOutlineCode)`
  font-size: 40px;
  color: #5495ff;
  margin-right: 5px;
`;

const HeaderBand = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.darkmode ? "#13131A" : "#FAFAFB")};
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
    
    <HeaderBand darkmode={dark}>
      <LogoParent>
        <Logo />
        DevHire
      </LogoParent>
      <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/joblistings">Jobs</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
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
