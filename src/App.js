import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/Navigations';
import RoutesComponent from "./components/RoutesComponent";

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <RoutesComponent />
            </Router>
        </div>
    );
}

export default App;
