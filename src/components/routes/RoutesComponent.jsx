import React from "react";
import { Routes, Route } from 'react-router-dom';
import About from '../pages/About';
import Projects from "../pages/Projects";


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
