import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Error from "./Components/Error/Error";
import RestaurentItems from "./Pages/Cart/RestaurentItems";
import LoginPage from "./Pages/LogInPage/LoginPage";
import PostList from "./Pages/PostList/PostList";

import UserManagement from "./Pages/Contact/UserManagement";
import About from "./Pages/About/About";
// import Home from "./Pages/Home/Home";
// import Booking from "./Pages/Bookings/Booking";
import Homes from "./Pages/PureComponet/Home/Homes";
import UserIndividualData from "./Components/PostTable/UserIndividualData";
import HIghermanagement from "./Pages/ClassComponent/HIgherManagement";
// import StrapDetails from "./Pages/ReactComponent/StrapDetails";

import UiLibraries from "./Pages/ReactComponent/UiLibraries";
// import NevinaAccordion from "./Pages/Nevina/NevinaAccordion";
import NevinaHome from "./Pages/Nevina/NevinaHome";

import RestaurentCartItems from "./Pages/RestaurentCartItem/RestaurentCartItems";

const Booking = lazy(() => import("./Pages/Bookings/Booking"));
// Define routes
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <Error />,
  },
  {
    path: "/app",
    element: <App />,
    children: [
      {
        path: "",
        element: <RestaurentItems />,
      },
      {
        path: "home",
        element: <Homes />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: ":number",
        element: <UserIndividualData />,
      },

      {
        path: "booking",
        element: (
          <Suspense fallback={<div>hdhdhadh...</div>}>
            <Booking />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: <UserManagement />,
      },
      {
        path: "classCom",
        element: <HIghermanagement />,
      },
      {
        path: "uiLibraries",
        element: <UiLibraries />,
      },
      {
        path: "postList",
        element: <PostList />,
      },
      {
        path: "Nevina",
        element: <NevinaHome />,
      },
      {
        path: "RestaurentCartitem",
        element: <RestaurentCartItems />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter} />
  </React.StrictMode>
);
reportWebVitals();
