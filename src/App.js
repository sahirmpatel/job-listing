import "./App.css";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import { useState } from "react";

function App() {
  const [params, setParams] = useState({});
  const [page, setPage] = useState(1);

  const { jobs, loading, error } = useFetchJobs(params, page);

  return (
    <Container>
      {loading && <h1>loading...</h1>}
      {error && <h1>Error . Try refreshing.</h1>}
      <h1>{jobs.length}</h1>
    </Container>
  );
}

export default App;
