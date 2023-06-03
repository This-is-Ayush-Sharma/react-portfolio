import React from 'react';
import Row from 'react-bootstrap/Row';
import Progress from './Progress'; 
export default function Skills() {
    const skills = [{
        title: "C",
        progress: "70"
    },
    {
        title: "Python",
        progress: "80"
    },
    {
        title: "Vanila Javacript",
        progress: "80"
    },
    {
        title: "Node JS",
        progress: "80"
    },
    {
        title: "Express JS",
        progress: "80"
    },
    {
        title: "Java",
        progress: "80"
    },
    {
        title: "Mongo DB",
        progress: "80"
    },
    {
        title: "React JS",
        progress: "50"
    },
    {
        title: "PHP",
        progress: "65"
    },
    {
        title: "Virtual Machine(azure) / AWS EC-2",
        progress: "70"
    },
    {
        title: "OOPS",
        progress: "80"
    },
    {
        title: "Arduino",
        progress: "80"
    }
]
    return (
        <div className='container mt-4 shadow-lg p-2'>
            <div className='w-100 d-flex justify-content-center align-items-center'><h1 style={{borderBottom: "3px solid orangered"}}>Skills</h1></div>
            <div className="card mt-3 mb-3 border-0 p-3" style={{ width: "100%", height: "100%" }}>
                <Row xs={1} md={2} className="g-4">
                {
                    skills.map((element, idx) => (
                        <Progress {...element}/>
                    ))
                }
            </Row>
            </div>
        </div>
    )
}
