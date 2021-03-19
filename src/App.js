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

  return (
    <AppParent darkmode={dark}>
      <NavBar />
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} hasNextPage={hasNextPage} setPage={setPage} />

      {loading && <h1>loading...</h1>}
      {error && <h1>Error . Try refreshing.</h1>}

      <JobParent>
        <div>
          {jobs.map((job) => (
            <JobCardSmall key={job.id} job={job} />
          ))}
        </div>

        <JobCardBig />
      </JobParent>

      <JobsPagination page={page} hasNextPage={hasNextPage} setPage={setPage} />
    </AppParent>
  );
}

export default App;
