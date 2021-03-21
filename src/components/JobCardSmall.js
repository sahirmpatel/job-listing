import React from "react";
import styled from "styled-components";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import placeholderlogo from "../assets/company-logo.jpg";
import ReactTimeAgo from "react-time-ago";

// styling

const JobCard = styled.div`
  background-color: #1c1c24;
  color: ${(props) => (props.darkmode ? "#e9e9ea" : "#40404C")};
  background-color: ${(props) => (props.darkmode ? "#1c1c24" : "#FFFFFF")};
  width: 40vw;
  border-radius: 8px;
  padding: 25px 30px;
  cursor: pointer;
  margin: 22px 0px;
  &:first-child {
    margin-top: 0px;
  }

  &:hover {
    background-color: ${(props) => (props.darkmode ? "#25252f" : "#f1f1f1")};
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
  margin-right: 10px;
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

const JobCardSmall = ({ PassJobDetails, job }) => {
  const PassJobDetailsHandle = () => {
    PassJobDetails(job);
  };

  const { dark } = useContext(ThemeContext);

  return (
    <JobCard darkmode={dark} onClick={PassJobDetailsHandle}>
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
          <ReactTimeAgo date={job.created_at} locale="en-US" />
        </div>
      </Jobflex2>

      {/* image algo */}
    </JobCard>
  );
};

export default JobCardSmall;
