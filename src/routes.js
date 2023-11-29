import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Genres from "./pages/Genres";

const routes = [
    {
      path: "/",
      element: <Home />,
    //   errorElement: <ErrorPage />
    },
    {
      path: "/artists",
      element: <Artists />,
    //   errorElement: <ErrorPage />
    },
    {
      path: "/genres",
      element: <Genres />,
    //   errorElement: <ErrorPage />
    }
]

export default routes;