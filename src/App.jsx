import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import User from "./pages/users/User";
import Root from "./pages/Root/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "/",
          element: <Home />,
          index: true,
        },
        {
          path: "/user",
          element: <User />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router}>
      <div className="App"></div>
    </RouterProvider>
  );
}

export default App;
