import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./components/login/login.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Login,   // root path
  },
  {
    path: "/chat/login",
    Component: Login,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
