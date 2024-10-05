import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Announcement from "./Announcement/Announcement";
import Control from "./Control/Control";
import Layout from "./Layout/Layout";
import Sensor from "./Sensor/Sensor";
import Home from "./Home/Home";
import Account from "./Account/Account";
import Register from "./Account/Register";
import SignIn from "./Account/SignIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "sensor",
        element: <Sensor />,
      },
      {
        path: "control",
        element: <Control />,
      },
      {
        path: "announcement",
        element: <Announcement />,
      },
      {
        path: "account",
        element: <Account />,
        children: [
          {
            path: "register",
            element: <Register />,
          },
          {
            path: "signin",
            element: <SignIn />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
