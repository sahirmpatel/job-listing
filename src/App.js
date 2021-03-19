import "./App.css";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Job from "./components/Job";
import JobsPagination from "./components/JobsPagination";
import SearchForm from "./components/SearchForm";
function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

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
    <Container>
      <SearchForm params={params} onParamChange={handleParamChange} />
      <JobsPagination page={page} hasNextPage={hasNextPage} setPage={setPage} />
      {loading && <h1>loading...</h1>}
      {error && <h1>Error . Try refreshing.</h1>}

      {jobs.map((job) => (
        <Job key={job.id} job={job} />
      ))}
      <JobsPagination page={page} hasNextPage={hasNextPage} setPage={setPage} />
    </Container>
  );
}

// pagination 31 min

export default App;
