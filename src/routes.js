import Home from "./pages/Home";
import Actors from "./pages/Actors";
import Directors from "./pages/Directors";
import Movie from "./pages/Movie"; 
import NotFoundPage from "./pages/NotFoundPage";

const routes = [
   {
    path: "/",
    element: <Home />,
    errorElement: <NotFoundPage />,
   },
  {
    path: "/Movie/:id", //Id is a parameter
    element: <Movie />
  },
  {
    path: "/Directors",
    element: <Directors />
  },
  {
    path: "/Actors",
     element: <Actors />

  }

  ];

export default routes;