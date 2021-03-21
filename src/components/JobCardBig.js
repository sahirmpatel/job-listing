import React from "react";
import ThemeContext from "../context/ThemeContext";
import styled from "styled-components";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";

const JobCard = styled.div`
  background-color: #1c1c24;
  color: ${(props) => (props.darkmode ? "#e9e9ea" : "#40404C")};
  background-color: ${(props) => (props.darkmode ? "#1c1c24" : "#FFFFFF")};
  width: 45vw;
  border-radius: 8px;
  padding: 25px 30px;
  height: 90vh;
  overflow-y: scroll;
  /* margin: 22px 0px; */
  position: sticky;
  margin-left: 3%;
  top: 35px;
  align-self: flex-start;
  /* overflow-y: auto; */
`;

const JobCardBig = ({ jobdetails }) => {
  const { dark } = useContext(ThemeContext);

  return (
    <JobCard darkmode={dark}>
      <h1>{jobdetails.company}</h1>
      <p>{jobdetails.location}</p>
      <ReactMarkdown source={jobdetails.description} />
    </JobCard>
  );
};

export default JobCardBig;
