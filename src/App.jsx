import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Announcement from "./Announcement/Announcement";
import Control from "./Control/Control";
import Layout from "./Layout/Layout";
import Sensor from "./Sensor/Sensor";
import Home from "./Home/Home";
import Account from "./Account/Account";
import Register from "./Account/Register";
import SignIn from "./Account/SignIn";
import UserProvider from "./Context/userProvider";

const router = createBrowserRouter([
  {
    path: "/SDS",
    element: <Layout />,
    children: [
      { index: true, element: <Navigate to="account/signin" replace /> },
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
  return (
    <UserProvider>
      <RouterProvider router={router} />
    </UserProvider>
  );
}

export default App;
