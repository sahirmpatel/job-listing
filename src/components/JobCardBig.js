import React, { useEffect } from "react";
import ThemeContext from "../context/ThemeContext";
import styled from "styled-components";
import { useContext } from "react";
import ReactMarkdown from "react-markdown";
import placeholderlogo from "../assets/company-logo.jpg";
import image1 from "../assets/compressed-mastheads/1.jpg";
import image2 from "../assets/compressed-mastheads/2.jpg";
import image3 from "../assets/compressed-mastheads/3.jpg";
import image4 from "../assets/compressed-mastheads/4.jpg";
import image5 from "../assets/compressed-mastheads/5.jpg";
import image6 from "../assets/compressed-mastheads/6.jpg";
import ReactTimeAgo from "react-time-ago";

const JobCard = styled.div`
  background-color: #1c1c24;
  color: ${(props) => (props.darkmode ? "#e9e9ea" : "#40404C")};
  background-color: ${(props) => (props.darkmode ? "#1c1c24" : "#FFFFFF")};
  width: 45vw;
  border-radius: 8px;
  /* padding: 25px 30px; */
  padding-bottom: 30px;
  /* margin: 22px 0px; */
  position: sticky;
  margin-left: 3%;
  top: 35px;
  align-self: flex-start;

  scroll-behavior: smooth;

  /* hiding scroll bar */
  ::-webkit-scrollbar {
    width: 2px;
  }

  ::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.5);
  }
`;

const MastheadImage = styled.img`
  width: 100%;
  height: 110px;
  object-fit: cover;
  position: relative;
  border-radius: 8px 8px 0px 0px;
  -moz-border-radius: 8px 8px 0px 0px;
  -webkit-border-radius: 8px 8px 0px 0px;
  border: 0px solid #000000;
`;

const Logoimg = styled.img`
  height: 60px;
  border: 3px solid #ffffff;
  padding: 4px;
  border-radius: 5px;
  position: absolute;
  top: 80px;
  left: 30px;
  background: white;
`;

const JobSubHeading = styled.div`
  padding: 50px 30px 30px 30px;
  border-bottom: ${(props) =>
    props.darkmode ? "1px solid #ffffff57" : "1px solid #00000033"};
`;

const JobTitle = styled.h2`
  font-size: 20px;
`;

const DisplayFlexDiv = styled.div`
  display: flex;
  justify-content: space-between;
`;
const CompanyName = styled.span`
  font-size: 16px;
  color: #0062ffff;
`;

const JobLocation = styled(CompanyName)`
  margin-left: 10px;
  color: white;
`;

const ScrollContent = styled.div`
  height: 45vh;
  overflow-y: scroll;
  padding: 30px;
  overflow-wrap: break-word;
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
    background: #40404c59;
    border-radius: 2px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

const HowtoApply = styled.h2`
  font-size: 22px;
`;

// id: "f3473ebc-ea63-49bf-8aae-33f69160b110",
// type: "Full Time",
// url: "https://jobs.github.com/positions/f3473ebc-ea63-49bf-8aae-33f69160b110",
// created_at: "Thu Mar 18 12:38:41 UTC 2021",
// company: "dunder mifflin",
// company_url: "https://www.jacob.de/",
// location: "Karlsruhe",
// title: "GOAT tickler (m/w/d)",
// description:
//   " Melde dich gerne bei mir Robert Henritzi (Head of IT) unter der Tel. 0721/ 94176-2700 oder mit einer Mail an henritzi@jacob.de, um ein erstes Kennenlernen per VideoCall zu vereinbaren oder bewirb dich direkt hier. ",
// how_to_apply:
//   "[application form](https://t.gohiring.com/h/d921f1a65c45257705f709505c04cde82c9d6773771102d2d3e2b276f5f93a94)",
// company_logo:

// random image for masthead
const imagearr = [image1, image2, image3, image4, image5, image6];
let randomimage = imagearr[Math.floor(Math.random() * 6)];

const JobCardBig = ({ jobdetails }) => {
  const { dark } = useContext(ThemeContext);
  useEffect(() => {
    randomimage = imagearr[Math.floor(Math.random() * 6)];
  }, [jobdetails]);
  return (
    <JobCard darkmode={dark}>
      <MastheadImage src={randomimage} alt="masthead" />
      <Logoimg
        src={
          jobdetails.company_logo ? jobdetails.company_logo : placeholderlogo
        }
        alt={jobdetails.company}
      />

      <JobSubHeading darkmode={dark}>
        <DisplayFlexDiv>
          <JobTitle>{jobdetails.title}</JobTitle>
        </DisplayFlexDiv>

        <DisplayFlexDiv>
          <div>
            <CompanyName> {jobdetails.company} </CompanyName>
            <JobLocation> {jobdetails.location} </JobLocation>
          </div>

          <ReactTimeAgo date={jobdetails.created_at} locale="en-US" />
        </DisplayFlexDiv>
      </JobSubHeading>

      <ScrollContent>
        <ReactMarkdown source={jobdetails.description} />
        <HowtoApply>How to apply</HowtoApply>
        <ReactMarkdown source={jobdetails.how_to_apply} />{" "}
      </ScrollContent>
    </JobCard>
  );
};

export default JobCardBig;
