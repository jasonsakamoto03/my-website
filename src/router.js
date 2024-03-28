import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import Projects from "./Routes/Projects";

export const router = createBrowserRouter([
    {path: "/", element: <App />},
    {path: "/about", element: <About />},
    {path: "/projects", element: <Projects />},
    {path: "/contact", element: <Contact />}
  ]);