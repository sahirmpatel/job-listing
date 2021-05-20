import { useReducer, useEffect } from "react";
import ghapi from "./api";
import axios from 'axios'

// Use the mockjsondata whenever making ui changes - to prevent overuse of the api
import mockjsondata from "./mockdata.json";

const ACTIONS = {
  MAKE_REQUEST: "make-request",
  GET_DATA: "get-data",
  ERROR: "error",
  UPDATE_HAS_NEXT_PAGE: "update-has-next-page",
};


// Adding additional methods to the axios instance
ghapi.CancelToken = axios.CancelToken;
ghapi.isCancel = axios.isCancel;


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
    case ACTIONS.UPDATE_HAS_NEXT_PAGE:
      return { ...state, hasNextPage: action.payload.hasNextPage };
    default:
      return state;
  }
}

export default function useFetchJobs(params, page) {
  const initialState = { jobs: [], loading: true };
  // const initialState = { jobs: mockjsondata, loading: true };
  // console.log("initialState:", initialState);
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    
    const cancelToken1 = ghapi.CancelToken.source();
    dispatch({ type: ACTIONS.MAKE_REQUEST });
    ghapi
      .get('/', {
        cancelToken: cancelToken1.token,
        params: { markdown: true, page: page, ...params },
      })
      .then((res) => {
        dispatch({ type: ACTIONS.GET_DATA, payload: { jobs: res.data } });
      })
      .catch((e) => {
        if (ghapi.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    const cancelToken2 = ghapi.CancelToken.source();
    ghapi
      .get('/', {
        params: { markdown: true, page: page + 1, ...params },
        cancelToken: cancelToken2.token,
      })
      .then((res) => {
        dispatch({
          type: ACTIONS.UPDATE_HAS_NEXT_PAGE,
          payload: { hasNextPage: res.data.length !== 0 },
        });
      })
      .catch((e) => {
        if (ghapi.isCancel(e)) return;
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
      });

    return () => {
      cancelToken1.cancel();
      cancelToken2.cancel();
    };
  }, [params, page]);

  return state;
}
