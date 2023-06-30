import React from "react";
import { HashRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navigation from './components/navigations/Navigations';
import RoutesComponent from "./components/routes/RoutesComponent";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Router>
                <Navigation />
                <RoutesComponent />
                <Footer />
            </Router>
        </div>
    );
}

export default App;
