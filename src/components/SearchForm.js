import React, { useEffect } from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

let isDarkTheme;

const DarkThemeColors = {
  inputcolor: "white",
  svgiconcolor: "white",
};

const LightThemColors = {
  inputcolor: "black",
  svgiconcolor: "black",
};

let CurrentThemeColors = isDarkTheme
  ? { ...DarkThemeColors }
  : { ...LightThemColors };

// styles
const SearchParent = styled.div`
  display: flex;
  background: #e6e6e6;
  border-radius: 5px;
  height: 48px;
`;

const SearchChildren = styled.div`
  border: 1px solid black;
  flex: 2;
  input {
    overflow: visible;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    width: 85%;
    color: ${CurrentThemeColors.inputcolor};
  }
`;
const CheckBoxParent = styled.div`
  border: 1px solid black;
  flex: 1;
`;

const StyledFiSearch = styled(FiSearch)`
  margin: 0px 10px 0px 10px;
  color: ${CurrentThemeColors.svgiconcolor};
`;
const StyledHiOutlineLocationMarker = styled(HiOutlineLocationMarker)`
  margin: 0px 10px 0px 10px;
`;

// styles

export default function SearchForm({ params, onParamChange }) {
  const { dark } = useContext(ThemeContext);
  isDarkTheme = dark;
  console.log("isDarkTheme:", isDarkTheme);
  useEffect(() => {
    isDarkTheme = dark ? true : false;
  }, []);
  useEffect(() => {
    CurrentThemeColors = isDarkTheme
      ? { ...DarkThemeColors }
      : { ...LightThemColors };
  }, [isDarkTheme]);
  return (
    // <form action="">
    //   <input
    //     value={params.description}
    //     name="description"
    //     onChange={onParamChange}
    //     placeholder="description"
    //     type="text"
    //   />
    //   <input
    //     value={params.location}
    //     name="location"
    //     onChange={onParamChange}
    //     placeholder="location"
    //     type="text"
    //   />
    //   <input
    //     onChange={onParamChange}
    //     value={params.full_time}
    //     name="full_time"
    //     id="full-time"
    //     label="Only Full Time"
    //     type="checkbox"
    //   />
    // </form>
    <SearchParent>
      <SearchChildren>
        <StyledFiSearch />
        <input
          value={params.description}
          name="description"
          onChange={onParamChange}
          placeholder="Search by description / role ..."
          type="text"
        />
      </SearchChildren>
      <SearchChildren>
        <StyledHiOutlineLocationMarker />
        <input
          value={params.location}
          name="location"
          onChange={onParamChange}
          placeholder="Preffered Location..."
          type="text"
        />
      </SearchChildren>
      <CheckBoxParent>
        <input
          onChange={onParamChange}
          value={params.full_time}
          name="full_time"
          id="full-time"
          label="Only Full Time"
          type="checkbox"
        />
      </CheckBoxParent>
    </SearchParent>
  );
}
