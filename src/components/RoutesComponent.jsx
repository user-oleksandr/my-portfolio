import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Projects from "./pages/Projects";
import Contact from "./pages/Contacts";

const RoutesComponent = () => {
    const routes = [
        {
            path: "/",
            element: <About />,
        },
        {
            path: "/projects",
            element: <Projects />,
        },
        {
            path: "/contact",
            element: <Contact />,
        },
    ];

    return (
        <Routes>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    element={route.element}
                />
            ))}
        </Routes>
    );
};

export default RoutesComponent;
