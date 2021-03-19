import "./App.css";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import { useState } from "react";
import Job from "./components/Job";
import JobsPagination from "./components/JobsPagination";
function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error, hasNextPage } = useFetchJobs(params, page);
  console.log("jobs:", jobs);

  return (
    <Container>
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
