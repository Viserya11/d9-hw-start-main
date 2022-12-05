import { combineReducers, configureStore } from "@reduxjs/toolkit";

import addCompanyReducer from "../reducers/AddCompany";
import jobsReducer from "../reducers/Jobs";
import searchReducer from "../reducers/Input";

const bigReducer = combineReducers({
  jobs: jobsReducer,
  favjob: addCompanyReducer,
  value: searchReducer,
});
const store = configureStore({
  reducer: bigReducer,
});

export default store;