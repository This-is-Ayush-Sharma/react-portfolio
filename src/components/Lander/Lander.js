import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import ayush from '../asserts/images/ayush.jpg'
import download from '../asserts/images/download.png'
import github from '../asserts/images/github.png'
import linkedin from '../asserts/images/linkedin.png'
export default function Lander() {

    // resume Download handler
    const DownloadResume = () => {

    }

    // linkedin Handler
    const linkedInHandler = () => {
        window.location.href = "https://www.linkedin.com/in/ayush-sharma-551133213/";
    }

    // github handler
    const githubHandler = () => {
        window.location.href = "https://github.com/This-is-Ayush-Sharma"
    }
    return (
        <div class="container d-flex justify-content-center align-items-center" style={{ maxHeight: "2500px" }}>
            <div className="card border-0" style={{ maxWidth: "100%" }}>
                <div className="row g-0 flex-row-reverse">
                    <div className="col-md-4 shadow-lg">
                        <img src={ayush} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 shadow-sm d-flex justify-content-center align-items-center">
                        <div className="card-body">
                            <div className="card-title text-center fw-bolder" style={{ fontSize: "1.8rem" }}>
                                <span style={{ color: "red" }}>Ayush</span> Sharma
                            </div>
                            <div className="card-text font-monospace d-inline-flex p-2">
                                Welcome to my portfolio website! As a web developer, I am passionate about creating engaging and dynamic websites that not only look great but also deliver an exceptional user experience.
                            </div>
                            <div className="card-text">
                                <ButtonGroup aria-label="Basic example">
                                    <Button className='shadow-lg' variant="info" onClick={DownloadResume}>
                                        {/* <img src={ download } style={{height:"50px",width:"50px"}} /> */}
                                        <Image src={download} height={25} style={{ marginRight: "5px" }} />
                                        Resume
                                    </Button>
                                    <Button variant="white" className="shadow-lg" onClick={githubHandler}>
                                        {/* <img src={ } /> */}
                                        <Image src={github} height={25} style={{ marginRight: "5px" }} />
                                        Github
                                    </Button>
                                    <Button variant="primary" className='shadow-lg' onClick={linkedInHandler}>
                                        {/* <img src={ } /> */}
                                        <Image src={linkedin} height={25} style={{ marginRight: "5px" }} />
                                        LinkedIn
                                    </Button>
                                </ButtonGroup>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
