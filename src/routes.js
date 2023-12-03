import Home from "./pages/Home";
import Artists from "./pages/Artists";
import Genres from "./pages/Genres";
import Song from "./pages/Song";
import AddNewSong from "./pages/AddNewSong";

const routes = [
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />
    },
    {
      path: "/artists",
      element: <Artists />,
      errorElement: <ErrorPage />
    },
    {
      path: "/genres",
      element: <Genres />,
      errorElement: <ErrorPage />
    },
    {
      path: "/song/:id",
      element: <Song />,
      errorElement: <ErrorPage />
    }
]

export default routes;