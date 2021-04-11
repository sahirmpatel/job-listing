import useFetchJobs from "./useFetchJobs";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";
import { BsArrowUp } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { useState, useEffect } from "react";
// import Job from "./components/Job";
import JobsPagination from "./components/JobsPagination";
import SearchForm from "./components/SearchForm";
import NavBar from "./components/NavBar";
import styled from "styled-components";
import JobCardSmall from "./components/JobCardSmall";
import JobCardBig from "./components/JobCardBig";

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

const Gototopbutton = styled.button`
  position: fixed;
  bottom: 4%;
  right: 2%;
  padding: 15px;
  font-size: 20px;
  border: 0;
  box-shadow: 0 2px 6px 0 hsl(0deg 0% 0% / 8%);
  border-radius: 5px;
  color: ${(props) => (props.darkmode ? "#e9e9ea" : "#40404C")};
  background-color: ${(props) => (props.darkmode ? "#1c1c24" : "#FFFFFF")};
  display: ${(props) => props.isVisible && "none"};
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
    button {
      border: 0;
      background: inherit;
      color: white;
      font-size: 20px;
    }
  }
`;
//styles

// TODO

const initialdata = {
  id: "f3473ebc-ea63-49bf-8aae-33f69160b110",
  type: "Full Time",
  url: "https://jobs.github.com/positions/f3473ebc-ea63-49bf-8aae-33f69160b110",
  created_at: "Thu Mar 18 12:38:41 UTC 2021",
  company: "dunder mifflin",
  company_url: "https://www.jacob.de/",
  location: "Karlsruhe",
  title: "",
  description:
    " We are looking for a Ruby on Rails Developer to help us develop an innovative new social network, that aims to enhance real-life communities through private, ad-free interaction. To apply you should have at least a few years of Ruby on Rails experience and have at least one consumer-focused Rails app that you can refer us to. You must be able to work effectively in Rails, including performing TDD. You will join a small, agile team. The team is remote, with members across the world. You should be passionate about the user experience and goal directed design.",
  how_to_apply:
    "[application form](https://t.gohiring.com/h/d921f1a65c45257705f709505c04cde82c9d6773771102d2d3e2b276f5f93a94)",
  company_logo:
    "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBaGFkIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--2d52e1fa301b30aaad4701bb63d1bc3bbca18ab9/JACOB%20Elektronik%20GmbH.png",
};

function App() {
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
    const param = e.target.name;
    const value = e.target.value;
    // setting page back to one because its a new request
    setPage(1);
    setParams((prevParams) => {
      return { ...prevParams, [param]: value };
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
    console.log("chosen:", chosen);
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
        <NavBar />
        <SearchForm params={params} onParamChange={handleParamChange} />
        {/* {loading && <h1>loading...</h1>} */}
        {error && <h1>Error . Try refreshing.</h1>}

        <JobParent>
          {loading ? (
            <JobListParent>
              {[1, 2, 3, 4, 5, 6, 7].map((job) => (
                <JobCardSmall
                  PassJobDetails={PassJobDetails}
                  key={job.id}
                  changechosen={changechosen}
                />
              ))}
            </JobListParent>
          ) : (
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

export default App;
