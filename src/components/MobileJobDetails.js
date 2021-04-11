import React, { useState } from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

// styles

const MobileJobDetailsDiv = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: block;
    padding: 10px 0px;
  }
`;

const Button = styled.button`
  background: #0062ff;
  width: 100%;
  padding: 15px 0px;
  border-radius: 5px;
  color: white;
  font-size: 20px;
  border: 0px;
  margin-top: 5px;
`;

const ScrollContent = styled.div`
  height: 45vh;
  overflow-y: scroll;
  padding: 10px;
  overflow-wrap: break-word;

  -webkit-box-shadow: inset 0px 0px 20px -13px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 0px 0px 20px -13px rgba(0, 0, 0, 0.75);
  box-shadow: inset 0px 0px 20px -13px rgba(0, 0, 0, 0.75);

  h1,
  h2,
  h3 {
    font-size: 20px;
  }

  /* width */
  ::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: rgba(192, 192, 192, 0.493);
    border-radius: 2px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #c0bebe;
  }
`;

const HowtoApply = styled.h2`
  font-size: 22px;
`;
// styles

const MobileJobDetails = ({ jobdetails }) => {
  const [showDetails, setShowDetails] = useState(false);
  const clickhandle = () => {
    setShowDetails((state) => !state);
  };
  return (
    <MobileJobDetailsDiv>
      {showDetails && (
        <ScrollContent>
          <ReactMarkdown source={jobdetails.description} />
          <HowtoApply>How to apply</HowtoApply>
          <ReactMarkdown source={jobdetails.how_to_apply} />
        </ScrollContent>
      )}

      <Button onClick={clickhandle}>
        {" "}
        {showDetails ? "Hide" : "Details"}{" "}
      </Button>
    </MobileJobDetailsDiv>
  );
};

export default MobileJobDetails;
