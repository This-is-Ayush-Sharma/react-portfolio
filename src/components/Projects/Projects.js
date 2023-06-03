import React, { useEffect, useState } from 'react'
import ProjectCards from './ProjectsCards';
import Row from 'react-bootstrap/Row';

import axios from 'axios';

export default function Projects() {
    const [ripo, setripo] = useState([])

    useEffect(() => {
        // setripo()
        let GITHUB_AUTH = "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";
        axios.get(`https://api.github.com/users/This-is-Ayush-Sharma/repos?per_page=100`, {
            headers: {
                Authorization: `Bearer ${GITHUB_AUTH}`
            }
        })
            .then(response => {
                // Process the response data here
                // console.log(response.data);  
                setripo(response.data);
                // let data = response.data;
                setripo((data) =>
                    data.filter((Riponame) => Riponame.name !== 'App-auth-backend')
                );
            })
            .catch(error => {
                // Handle any errors
                console.error(error);
            });

    }, []);
    return (
        <div className="container mt-3 p-4">
            <div className='w-100 d-flex justify-content-center align-items-center mb-2'><h1 style={{borderBottom: "3px solid orangered"}}>Projects</h1></div>
            <Row xs={1} md={2} className="g-4">
                {
                    ripo.map((element, idx) => (
                        <ProjectCards {...element} />
                    ))
                }
            </Row>
        </div>
    )
}
