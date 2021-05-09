import useFetchJobs from "../useFetchJobs";
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import { BsArrowUp } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
// import Job from "./components/Job";
import JobsPagination from "../components/JobsPagination";
import SearchForm from "../components/SearchForm";
import NavBar from "../components/NavBar";
import styled from "styled-components";
import JobCardSmall from "../components/JobCardSmall";
import JobCardBig from "../components/JobCardBig";

const AppParent = styled.div`
  background-color: ${(props) => (props.darkmode ? "#13131A" : "#FAFAFB")};
  padding: 30px calc((100vw * 0.6) / 12);
  transition: background-color 0.3s ease-out;
`;

const JobParent = styled.div`
  display: flex;
  justify-content: space-between;
`;
const JobListParent = styled.div`
  width: 40vw;
  @media screen and (max-width: 600px) {
    width: 90vw;
  }
`;

// const Gototopbutton = styled.button`
//   position: fixed;
//   bottom: 4%;
//   right: 2%;
//   padding: 10px;
//   font-size: 20px;
//   border: 0;
//   box-shadow: 0 2px 6px 0 hsl(0deg 0% 0% / 8%);
//   border-radius: 5px;
//   color: ${(props) => (props.darkmode ? "#e9e9ea" : "#40404C")};
//   background-color: ${(props) => (props.darkmode ? "#1c1c24" : "#FFFFFF")};
//   display: ${(props) => props.isVisible && "none"};
// `;
const Gototopbutton = styled.button`
  position: fixed;
  bottom: 4%;
  right: 2%;
  padding: 10px;
  font-size: 20px;
  border: 0;
  box-shadow: 0 2px 6px 0 hsl(0deg 0% 0% / 8%);
  border-radius: 5px;
  color: ${(props) => (props.darkmode ? "#e9e9ea" : "#40404C")};
  background-color: ${(props) => (props.darkmode ? "#1c1c24" : "#FFFFFF")};
  display: ${(props) => props.isVisible && "none"};

  transition: all 0.2s ease-out;

  &:hover {
    transform: translateY(-10px);
  }
`;

const MobileBanner = styled.div`
  display: none;
  @media screen and (max-width: 600px) {
    display: flex;
    color: white;
    background: #0062ff;
    padding: 15px 10px 5px 10px;
    justify-content: space-between;
    align-items: baseline;
    /* align-self: flex-start; */
    position: sticky;
    top: 0;
    z-index: 99;
    button {
      border: 0;
      background: inherit;
      color: white;
      font-size: 20px;
    }
  }
`;
const ErrorMessage = styled.h1`
  color: ${(props) => (props.darkmode ? "#e9e9ea" : "#40404C")};
`;
//styles

// TODO

function JobListings() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);
  const { dark } = useContext(ThemeContext);

  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);

  // function for updating params
  function handleParamChange(e) {
    // creating key value pair
    const param = e.target.name;
    const value = e.target.value;
    // setting page back to one because its a new request
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
    });
  }
  // function for reset params
  function handleParamReset(e) {
    // creating key value pair

    // setting page back to one because its a new request
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, description: "", location: "" };
    });
  }

  const [jobdetails, setjobdetails] = useState();
  // function for passing small job card details to the big one

  const PassJobDetails = (jobdetails) => {
    setjobdetails(jobdetails);
  };

  // function for changing color of selected small card to blue

  const [chosen, setChosen] = useState();
  const changechosen = (id) => {
    setChosen(id);
  };

  // hiding "go to top button" when scrolled up and toggling it
  const [showButton, setShowButton] = useState(true);

  const hideButton = () => {
    if (window.scrollY > 500) {
      setShowButton(false);
    } else {
      setShowButton(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", hideButton);
    setbannerOpen(true);
  }, []);

  // autoselect code
  let firstJob, firstJobId;
  useEffect(() => {
    if (jobs[0]) {
      firstJob = jobs[0];
      firstJobId = jobs[0].id;
      changechosen(firstJobId);
      PassJobDetails(firstJob);
    }
  }, [loading]);

  //usestate for mobile banner

  const [bannerOpen, setbannerOpen] = useState();

  return (
    <>
      {bannerOpen && (
        <MobileBanner>
          <p> 💡 Better experienced on PC / Laptop </p>
          <button
            onClick={() => {
              setbannerOpen((state) => !state);
            }}
          >
            {" "}
            <AiOutlineClose />{" "}
          </button>
        </MobileBanner>
      )}
      <AppParent darkmode={dark}>
        {/* <NavBar /> */}
        <SearchForm
          params={params}
          onParamChange={handleParamChange}
          onParamReset={handleParamReset}
        />
        {/* {loading && <h1>loading...</h1>} */}
        {error && (
          <ErrorMessage darkmode={dark}>
            {" "}
            🚧Error . Try refreshing.🚧
          </ErrorMessage>
        )}

        <JobParent>
          {loading ? (
            <JobListParent>
              {/* placeholder / dummy cards  */}
              {[1, 2, 3, 4, 5, 6, 7].map((job) => (
                <JobCardSmall
                  PassJobDetails={PassJobDetails}
                  key={job}
                  changechosen={changechosen}
                />
              ))}
            </JobListParent>
          ) : jobs.length > 0 ? (
            <JobListParent>
              {jobs.map((job) => (
                <JobCardSmall
                  PassJobDetails={PassJobDetails}
                  key={job.id}
                  job={job}
                  active={job.id === chosen}
                  changechosen={changechosen}
                />
              ))}
            </JobListParent>
          ) : (
            <ErrorMessage darkmode={dark}>
              {" "}
              Please broaden your search 🔍
            </ErrorMessage>
          )}

          <JobCardBig jobdetails={jobdetails} />
        </JobParent>

        <JobsPagination
          page={page}
          hasNextPage={hasNextPage}
          resetBigCard={PassJobDetails}
          setPage={setPage}
        />

        <Gototopbutton
          isVisible={showButton}
          darkmode={dark}
          onClick={() => {
            window.scroll({
              top: 0,
              left: 0,
              behavior: "smooth",
            });
          }}
        >
          <BsArrowUp />
        </Gototopbutton>
      </AppParent>
    </>
  );
}

export default JobListings;
