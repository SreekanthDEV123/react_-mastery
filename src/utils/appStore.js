import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// import { appStore } from "./utils/appStore"; // Use curly braces for named exports

import cartReducer from "./cartSlice";
// import portfolioReducer from "./portfolioSlice"; // Assuming you have this reducer

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"], // Include any reducers you want to persist
};

// Combine all your reducers
const rootReducer = combineReducers({
  cart: cartReducer,
  //   portfolio: portfolioReducer, // Example additional reducer
});

// Create a persisted reducer using the rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure the store with the persisted reducer
export const appStore = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(appStore);

// Typing for RootState and AppDispatch
export type RootState = ReturnType<typeof appStore.getState>;
export type AppDispatch = typeof appStore.dispatch;
