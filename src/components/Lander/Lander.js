import React from 'react'
import Image from 'react-bootstrap/Image'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import ayush from '../asserts/images/ayush.jpg'
import download from '../asserts/images/download.png'
import github from '../asserts/images/github.png'
import linkedin from '../asserts/images/linkedin.png'
export default function Lander() {
    return (
        <div class="container d-flex justify-content-center align-items-center" style={{maxHeight: "2500px"}}>
            <div className="card border-0" style={{ maxWidth: "100%" }}>
                <div className="row g-0 flex-row-reverse">
                    <div className="col-md-4 shadow-lg">
                        <img src={ayush} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8 shadow-sm d-flex justify-content-center align-items-center">
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div className="card-text">
                                <ButtonGroup aria-label="Basic example">
                                    <Button className='shadow-lg' variant="info">
                                        {/* <img src={ download } style={{height:"50px",width:"50px"}} /> */}
                                        <Image src={download} height={20} style={{ marginRight: "5px" }} />
                                        Resume
                                    </Button>
                                    <Button variant="white" className="shadow-lg">
                                        {/* <img src={ } /> */}
                                        <Image src={github} height={20} style={{ marginRight: "5px" }} />
                                        Github
                                    </Button>
                                    <Button variant="primary" className='shadow-lg'>
                                        {/* <img src={ } /> */}
                                        <Image src={linkedin} height={20} style={{ marginRight: "5px" }} />
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
