import React from "react";
import { FiSearch } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

// styles
const SearchParent = styled.div`
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 55px;
  background-color: ${(props) => (props.darkmode ? "#1c1c24" : "#FFFFFF")};
  color: ${(props) => (props.darkmode ? "#FFFFFF" : "#000")};

  border: 0;
  box-shadow: 0 2px 6px 0 hsl(0deg 0% 0% / 8%);

  /* searchbar quick fix */
  margin-top: 20px;
  margin-bottom: 30px;
`;

const SearchChildren = styled.div`
  /* border: 1px solid black; */
  flex: 3;
  padding-left: 10px;

  input {
    overflow: visible;
    height: 100%;
    border: none;
    outline: none;
    background-color: transparent;
    width: 85%;
    color: inherit;
  }
`;
const CheckBoxParent = styled.div`
  /* border: 1px solid black; */
  flex: 2;
  span {
    opacity: 0.8;
    margin-left: 12px;
  }
`;

const StyledFiSearch = styled(FiSearch)`
  margin: 0px 10px 0px 10px;
  font-size: 20px;
`;
const StyledHiOutlineLocationMarker = styled(HiOutlineLocationMarker)`
  margin: 0px 10px 0px 10px;
  font-size: 20px;
`;

const ResetButton = styled.button`
  border: none;
  background-color: #0062ff;
  color: white;
  height: 100%;
  padding: 10px 30px;
  border-radius: 0px 5px 5px 0px;
  -moz-border-radius: 0px 5px 5px 0px;
  -webkit-border-radius: 0px 5px 5px 0px;
  border: 0px solid #000000;
  &:hover {
    background-color: #0257e0;
  }
`;

// styles

export default function SearchForm({ params, onParamChange }) {
  const { dark } = useContext(ThemeContext);

  return (
    <SearchParent darkmode={dark}>
      <SearchChildren>
        <StyledFiSearch />
        <input
          value={params.description}
          name="description"
          onChange={onParamChange}
          placeholder="Search by description / role ..."
          type="text"
          autocomplete="off"
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
          autocomplete="off"
        />
      </SearchChildren>
      {/* <CheckBoxParent>
        <input
          onChange={onParamChange}
          value={params.full_time}
          name="full_time"
          id="full-time"
          label="Only Full Time"
          type="checkbox"
        />
        <span>Full-Time Jobs only</span>
      </CheckBoxParent> */}

      <ResetButton type="reset">Reset</ResetButton>
    </SearchParent>
  );
}
