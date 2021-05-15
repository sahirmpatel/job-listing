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
  font-size: 30px;
  color: #5495ff;
  margin-right: 5px;
`;

const HeaderBand = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => (props.darkmode ? "#13131A" : "#FAFAFB")};
  padding-top:5px;
  padding-bottom:5px;
  align-items: flex-end;
`;

const HeaderBand_2nddiv=styled.div`
a{
  margin:0px 20px;
}
`

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

      <div className="">
      <Link to="/" >
      <LogoParent>
        <Logo />
        DevHire
      </LogoParent>
      </Link>
    
             
      </div>
     
        
              
    
      <HeaderBand_2nddiv>
      <Link to="/joblistings">Jobs</Link>
      <Link to="/login">Login</Link>
        <ThemeButton theme={dark} onClick={() => toggle()}>
          {dark ? (
            <BiMoon style={{ color: "#E9E9EA" }} />
          ) : (
            <BiSun style={{ color: "#3A3A46" }} />
          )}
        </ThemeButton>
      </HeaderBand_2nddiv>
    </HeaderBand>
    
  );
}
