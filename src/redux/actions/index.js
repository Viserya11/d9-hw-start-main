export const REMOVE_FROM_FAVS = "REMOVE_FROM_FAVS";
export const ADD_COMPANY = "ADD_COMPANY";
export const GET_JOBS = "GET_JOBS";
export const SAVE_VALUE = "SAVE_VALUE";
export const GET_JOBS__LOADING = "GET_JOBS_IS_LOADING";
export const GET_JOBS__ERROR = "GET_JOBS_IS_ERROR";

export const addCompanyAction = (jobs) => {
  return {
    type: ADD_COMPANY,
    payload: jobs,
  };
};

export const removeFromFavsAction = (i) => {
  return { type: "REMOVE_FROM_FAVS", payload: i };
};

export const saveSearchValue = (value) => {
  return {
    type: SAVE_VALUE,
    payload: value,
  };
};

export const fetchJobs = (endpoint) => {
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";

  return async (dispatch, getState) => {
    try {
      dispatch({
        type: GET_JOBS__LOADING,
        payload: true,
      });
      const response = await fetch(baseEndpoint + endpoint + "&limit=20");
      if (response.ok) {
        const { data } = await response.json();
        dispatch({
            type: GET_JOBS__ERROR,
            payload: false,
        })
        dispatch({
          type: GET_JOBS,
          payload: data,
        });
        dispatch({
            type: GET_JOBS__LOADING,
            payload: false,
          });
      } else {
        dispatch({
            type: GET_JOBS__ERROR,
            payload: true,
        })
        alert("Error fetching results");
      }
    } catch (error) {
        dispatch({
            type: GET_JOBS__ERROR,
            payload: true,
        })
      console.log(error);
    }
  };
};
