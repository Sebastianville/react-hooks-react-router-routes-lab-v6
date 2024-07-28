import "./index.css";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";

const root = ReactDOM.createRoot(document.getElementById("root"));


const router =createBrowserRouter(routes)
root.render(
    <RouterProvider router={router} />
)
//the structure for the applicatoins' (example in this lab is: URL home or movies) 