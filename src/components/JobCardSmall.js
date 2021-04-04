import React, { useState } from "react";
import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import placeholderlogo from "../assets/company-logo.jpg";
import ReactTimeAgo from "react-time-ago";

// styling

const JobCard = styled.div`
  position: relative;
  color: ${(props) => (props.darkmode ? "#e9e9ea" : "#40404C")};
  background-color: ${(props) => (props.darkmode ? "#1c1c24" : "#FFFFFF")};
  /* removing width from here and adding it to its parent div in App.js */
  /* width: 40vw; */
  /* background-color: ${(props) => props.isactive && "#2B2ECF"}; */
  /* color: ${(props) => props.isactive && "#e9e9ea"}; */
  border-radius: 8px;
  border: 0;
  box-shadow: 0 2px 6px 0 hsl(0deg 0% 0% / 8%);
  padding: 25px 30px;
  cursor: pointer;
  margin: 22px 0px;
  transition: transform 150ms ease-in, box-shadow 150ms ease-in;
  &:first-child {
    margin-top: 0px;
  }

  &:hover {
    /* background-color: ${(props) =>
      props.darkmode ? "#25252f" : "#f1f1f1"}; */
    -webkit-box-shadow: 12px 12px 36px -13px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 12px 12px 36px -13px rgba(0, 0, 0, 0.2);
    box-shadow: 12px 12px 36px -13px rgba(0, 0, 0, 0.2);
    transform: translate(0px, -2px);
  }

  .band {
    background-color: ${(props) => props.isactive && "#0062ff"};

    height: 100%;
    width: 10px;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px 0px 0px 8px;
    -moz-border-radius: 8px 0px 0px 8px;
    -webkit-border-radius: 8px 0px 0px 8px;
    border: 0px solid #000000;
  }
`;

const JobTitle = styled.h2`
  font-size: 20px;
  line-height: 28px;
  margin: 0;
  font-weight: 500;
`;
const CompanyName = styled.h3`
  font-size: 20px;
  font-weight: 400;
  opacity: 0.8;
  line-height: 28px;
  margin: 20px 0px;
`;

const Image = styled.img`
  height: 40px;
  border-radius: 7px;
  margin-left: 30px;
`;

const Jobflex2 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Jobflex1 = styled(Jobflex2)`
  display: flex;
  align-items: flex-start;
`;

const JobDetailsLabel = styled.span`
  background-color: ${(props) => (props.darkmode ? "#363642" : "#F0F0F0")};
  color: ${(props) => (props.darkmode ? "#e0e1e2" : "#FA7676")};
  font-weight: 500;
  padding: 4px 10px;
  font-size: 14px;
  border-radius: 5px;

  &:last-child {
    color: ${(props) => (props.darkmode ? "#e0e1e2" : "#6E6ED9")};
    margin-left: 8px;
  }
`;

const NewTag = styled.span`
  color: #0062ffff;
  font-size: 14px;
  margin-right: 10px;
`;

const ReactTimeAgoStyled = styled(ReactTimeAgo)`
  font-size: 14px;
  opacity: 0.8;
`;

// const JobDate = styled.p`
//   font-size: 14px;
// `;

// styling

const NewOrNOt = ({ dateprovided }) => {
  var oneday = 60 * 60 * 1000 * 24 * 2;
  if (new Date() - new Date(dateprovided) < oneday) {
    return <NewTag>New</NewTag>;
  } else return null;
};

const JobCardSmall = ({ PassJobDetails, job, changechosen, active }) => {
  const onClickHandle = () => {
    changechosenHandle();
    PassJobDetailsHandle();
  };

  const changechosenHandle = () => {
    changechosen(job.id);
  };

  const PassJobDetailsHandle = () => {
    PassJobDetails(job);
  };

  const { dark } = useContext(ThemeContext);

  return (
    <JobCard darkmode={dark} isactive={active} onClick={onClickHandle}>
      <div className="band"></div>
      <Jobflex1>
        <div>
          <JobTitle> {job.title} </JobTitle>
          <CompanyName> {job.company}</CompanyName>
        </div>

        <Image
          src={job.company_logo ? job.company_logo : placeholderlogo}
          alt={job.company}
        />
      </Jobflex1>

      <Jobflex2>
        <div>
          <JobDetailsLabel darkmode={dark}>{job.type}</JobDetailsLabel>
          <JobDetailsLabel darkmode={dark}>{job.location}</JobDetailsLabel>
        </div>
        {/* <JobDate> {new Date(job.created_at).toLocaleDateString()}</JobDate> */}
        {/* <TimeAgo
          style={{ fontSize: "14px" }}
          datetime={job.created_at}
          locale="'en_US'"
        /> */}
        <div style={{ display: "flex" }}>
          <NewOrNOt dateprovided={job.created_at} />
          <ReactTimeAgoStyled date={job.created_at} locale="en-US" />
        </div>
      </Jobflex2>

      {/* image algo */}
    </JobCard>
  );
};

export default JobCardSmall;
