import { createBrowserRouter } from "react-router-dom";

import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import About from "../pages/About/About";
import Contact from "../pages/Contact/Contact";
import Blogs from "../pages/Blogs/Blogs";
import BlogDetails from "../pages/Blogs/BlogDetails";
import Projects from "../pages/Projects/Projects";
import ProjectDetails from "../pages/Projects/ProjectDetails";
import Services from "../pages/Services/Services";
import ServiceDetails from "../pages/Services/ServiceDetails";
import ErrorPage from "../pages/Error/ErrorPage";

const router = createBrowserRouter(
    [
        {
            path: "/",
            element: <MainLayout />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, element: <Home /> },
                { path: "about", element: <About /> },
                { path: "contact", element: <Contact /> },
                { path: "blogs", element: <Blogs /> },
                { path: "blog/:id", element: <BlogDetails /> },
                { path: "projects", element: <Projects /> },
                { path: "project/:id", element: <ProjectDetails /> },
                { path: "services", element: <Services /> },
                { path: "service/:id", element: <ServiceDetails /> },
            ],
        },
    ],
    { basename: import.meta.env.BASE_URL || "/capsule/" }
);

export default router;
