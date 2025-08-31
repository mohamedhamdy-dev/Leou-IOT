import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Announcement from "./Announcement/Announcement";
import Control from "./Control/Control";
import Layout from "./Layout/Layout";
import Sensor from "./Sensor/Sensor";
import Home from "./Home/Home";
import Account from "./Account/Account";
import Register from "./Account/Register";
import SignIn from "./Account/SignIn";
import AuthProvider from "./Context/AuthProvider";
import ProtectedRoute from "./UI/ProtectedRoute";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
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

      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/",
            element: <Home />,
          },
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
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
