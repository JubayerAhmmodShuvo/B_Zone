import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";


const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      
    ]
  },
  {
    path: '/signup',
    element: <SignUp />,
  }
]);

export default routes;
