import { useReducer, useEffect } from "react";
import axios from "axios";
const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
};

// const BASE_URL =
//   "https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json";

const BASE_URL = "https://jobs.github.com/positions.json";

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return { loading: true, jobs: [] };
    case ACTIONS.GET_DATA:
      return { ...state, loading: false, jobs: action.payload.jobs };
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        jobs: [],
      };
    default:
      return state;
  }
}

export default function useFetchJobs(params, page) {
  const initialState = { jobs: [], loading: true };
  console.log("initialState:", initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    axios
      .get(BASE_URL, {
        params: { markdown: true, page: page, ...params },
      })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch((e) => {
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });
  }, [params, page]);

  return state;
}
