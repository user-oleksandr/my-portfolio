import React from 'react';
import Weather from '../images/projects/weather-app.png';
import Recipes from '../images/projects/recipes-app.png';
import Todo from '../images/projects/todo-app.png';
import PasswordCheck from '../images/projects/password reliability check.png';

function Projects() {
    return (
        <div className="container mt-5 pt-5">
            <h2>Projects</h2>
            <div className="row mt-5">
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <a href="https://user-oleksandr.github.io/weather-app/">
                            <img className="card-img-top" src={Weather} alt="Project 1"/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Weather-app</h5>
                            <p className="card-text">React-app</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <a href="https://user-oleksandr.github.io/recipes-app/">
                            <img className="card-img-top" src={Recipes} alt="Project 2"/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Recipes-app</h5>
                            <p className="card-text">React</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <a href="https://user-oleksandr.github.io/todo-app/">
                            <img className="card-img-top" src={Todo} alt="Project 3"/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">Todo-app</h5>
                            <p className="card-text">React</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card">
                        <a href="https://user-oleksandr.github.io/test-2_checkPassword/">
                            <img className="card-img-top" src={PasswordCheck} alt="Project 4"/>
                        </a>
                        <div className="card-body">
                            <h5 className="card-title">password reliability check</h5>
                            <p className="card-text">Html Css</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;