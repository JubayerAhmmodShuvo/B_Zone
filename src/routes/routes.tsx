import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import AllBooks from "../pages/AllBooks";
import AddBooks from "../components/AddBooks";
import Login from "../pages/Login";
import BookDetails from "../pages/BookDetails";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/allbooks",
        element: <AllBooks />,
      },
      {
        path: "/addbook",
        element: <AddBooks />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path:"/book-details/:id",
        element:<BookDetails />
      }
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
    ],
  },
]);

export default routes;
