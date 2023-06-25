import React from 'react';

function Contact() {
    return (
        <div className="container bg-dark rounded mb-5" style={{marginTop: '150px', padding: '50px'}}>
            <div className='row text-center text-white'>
                <h2>Contact Me</h2>
            </div>
            <div className="row mt-5">
                <div className="col-lg-6 ">
                    <p className='text-white'>You can also contact me via email:</p>
                    <ul className="link-list" style={{listStyle: 'none', padding: '0'}}>
                        <li>
                            <a href="https://t.me/username_oleksandr" target="_blank" rel="noopener noreferrer">
                                Telegram
                            </a>
                        </li>
                        <li>
                            <a href="mailto:aavwork@ukr.net">aavwork@ukr.net</a>
                        </li>
                        <li>
                            <a href="mailto:name.oleksandr@gmail.com">name.oleksandr@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div className="col-lg-6">
                    <p className='text-white'>You can reach out to me through the following channels:</p>
                    <ul className="link-list" style={{listStyle: 'none', padding: '0'}}>
                        <li>
                            <a href="https://www.linkedin.com/in/oleksandr-anastasiiev-374925259/" target="_blank"
                               rel="noopener noreferrer">
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a href="https://github.com/user-oleksandr" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Contact;
