import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import localStorage from "redux-persist/es/storage";
import addCompanyReducer from "../reducers/AddCompany";
import jobsReducer from "../reducers/Jobs";
import searchReducer from "../reducers/Input";
import { encryptTransform } from "redux-persist-transform-encrypt";

const persistConfig = {
    key: 'root',
    storage: localStorage,
    transfroms: [
        encryptTransform({
            secretKey: process.env.REACT_APP_REDUX_SECRET_KEY
        })
    ]
}

const bigReducer = combineReducers({
    jobs: jobsReducer,
    favjob: addCompanyReducer,
    value: searchReducer,
  });

const persistedReducer = persistReducer(persistConfig, bigReducer)




export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store)
