import React from 'react'

export default function Abouts() {
    return (
        <div className='container mt-5 shadow-lg d-flex'>
            <div className="card mt-3 mb-3 border-0 p-3" style={{ width: "100%", height: "100%" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h1 className="card-title mb-3">My Introduction</h1>
                            <div className="card-text mt-3">
                                <p>
                                    I am a pre-final year B.Tech student from Rourkela, Odisha, currently pursuing my B.TECH degree at GIET University in Rayagada, Odisha. I have completed my intermediate and matriculation education from St. Paul's School, Rourkela.
                                </p>
                                <p>
                                    I am a passionate individual with a diverse set of interests, including playing guitar, cricket, and coding. I am proficient in various programming languages and technologies, including HTML, CSS, JavaScript, React.js (basic), Node.js, and PHP.
                                </p>
                                <p> 
                                    This portfolio website is a showcase of my skills, projects, and achievements. It serves as a platform to highlight my work and experience in the field of computer science.
                                </p>
                            </div>
                            <p className="card-text"><small className="text-muted">Ayush Sharma</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
