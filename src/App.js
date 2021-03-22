import useFetchJobs from "./useFetchJobs";
import { useContext } from "react";
import ThemeContext from "./context/ThemeContext";

import { useState } from "react";
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
`;

const initialdata = {
  id: "f3473ebc-ea63-49bf-8aae-33f69160b110",
  type: "Full Time",
  url: "https://jobs.github.com/positions/f3473ebc-ea63-49bf-8aae-33f69160b110",
  created_at: "Thu Mar 18 12:38:41 UTC 2021",
  company: "dunder mifflin",
  company_url: "https://www.jacob.de/",
  location: "Karlsruhe",
  title: "GOAT tickler (m/w/d)",
  description:
    " Melde dich gerne bei mir Robert Henritzi (Head of IT) unter der Tel. 0721/ 94176-2700 oder mit einer Mail an henritzi@jacob.de, um ein erstes Kennenlernen per VideoCall zu vereinbaren oder bewirb dich direkt hier. ",
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

  const [jobdetails, setjobdetails] = useState(initialdata);
  // function for passing small job card details to the big one

  const PassJobDetails = (jobdetails) => {
    setjobdetails(jobdetails);
  };

  return (
    <AppParent darkmode={dark}>
      <NavBar />
      <SearchForm params={params} onParamChange={handleParamChange} />

      {loading && <h1>loading...</h1>}
      {error && <h1>Error . Try refreshing.</h1>}

      <JobParent>
        <div>
          {jobs.map((job) => (
            <JobCardSmall
              PassJobDetails={PassJobDetails}
              key={job.id}
              job={job}
            />
          ))}
        </div>

        <JobCardBig jobdetails={jobdetails} />
      </JobParent>

      <JobsPagination page={page} hasNextPage={hasNextPage} setPage={setPage} />
    </AppParent>
  );
}

export default App;
