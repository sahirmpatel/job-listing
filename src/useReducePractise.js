import "./App.css";
import useFetchJobs from "./useFetchJobs";
import { Container } from "react-bootstrap";
import { useReducer } from "react";

// import styled from "styled-components";

// const StyledDiv = styled.div`
//   color: pink;
//   border-radius: 5px;
//   background-color: #e9a0ff;
//   button {
//     background-color: #333;
//     color: white;
//     padding: 7px 20px;
//     border: none;
//     border-radius: 5px;
//     cursor: pointer;
//     &:hover {
//       background-color: #494949;
//     }
//   }
// `;

const initialState = { count: 0 };

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
};

function App() {
  // const { jobs, loading, error } = useFetchJobs();
  const [state, dispatch] = useReducer(reducer, initialState);

  const increase = () => {
    dispatch({ type: "increment" });
  };
  const decrease = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <Container>
      count : {state.count}
      {/* {loading && <h1>loading...</h1>}
      {error && <h1>Error . Try refreshing.</h1>}
      <h1>{jobs.length}</h1> */}
      <button onClick={increase}>increase</button>
      <button onClick={decrease}>decrease</button>
    </Container>
  );
}

export default App;
