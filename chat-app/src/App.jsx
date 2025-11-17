import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,   // root path
  },
  {
    path: "/login",
    Component: Login,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
