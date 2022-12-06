import { GET_JOBS, GET_JOBS__ERROR, GET_JOBS__LOADING } from "../actions";

const initialState = {
  stock: [],
  isLoading: false,
  isError: false,
};
const jobsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_JOBS:
      return {
        ...state,
        stock: action.payload,
      };
    case GET_JOBS__LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    case GET_JOBS__ERROR:
      return {
        ...state,
        isError: action.payload,
      };
    default:
      return state;
  }
};
export default jobsReducer;
