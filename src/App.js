import React from "react";
import Header from "./Components/NavBar/Header";
import { Outlet } from "react-router-dom";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";
import { appStore } from "./utils/appStore";
// import { appStore } from './store/appStore';
function App() {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
        <Outlet />
      </div>
    </Provider>
  );
}

export default App;
