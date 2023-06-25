import React from 'react';
import Html from '../images/logo/html-logo.png';
import Css from '../images/logo/css-logo.png';
import JS from '../images/logo/js-logo.png';
import ReactJS from '../images/logo/react-logo.png';
import GitHub from '../images/logo/gitHub-logo.png';
import WordPress from '../images/logo/wordPress-logo.png';


function About() {
    return (
        <div className="container mt-5">
            <div className="row pt-5">
                <div className="col-lg-6 offset-lg-6 col-md-12">
                    <h2 className='text-end'>About Me</h2>
                    <p className='mt-3'>
                        Hello. My name is Oleksandr.
                        I am a beginner front-end developer.
                        I have experience working on my first projects,
                        which allowed me to gain practical skills in working with the
                        specified technologies. I have the ability to learn and develop quickly,
                        which allows me to work effectively with new tools and technologies.
                        I am ready for new challenges and opportunities in the world
                        of front-end development, so I will be happy to learn more about
                        potential cooperation.
                    </p>
                </div>
            </div>
            <div className="row mt-5 text-center">
                <h2>Skills:</h2>
            </div>
            <div className="row justify-content-center mt-5 mb-5">
                <div className="col">
                    <img src={Html} className="img-thumbnail"/>
                </div>
                <div className="col">
                    <img src={Css} className="img-thumbnail"/>
                </div>
                <div className="col">
                    <img src={JS} className="img-thumbnail"/>
                </div>
                <div className="col">
                    <img src={ReactJS} className="img-thumbnail"/>
                </div>
                <div className="col">
                    <img src={GitHub} className="img-thumbnail"/>
                </div>
                <div className="col">
                    <img src={WordPress} className="img-thumbnail"/>
                </div>
            </div>
        </div>
    );
}

export default About;
