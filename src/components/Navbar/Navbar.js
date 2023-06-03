import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import portfolio from '../asserts/images/portfolio.png'
function NavbarTop() {
    
    return (
        <Navbar  bg="light" expand="lg" className='border-0 border-bottom border-right border-1 border-warning sticky-top '>
            <Container>
                <Navbar.Brand href="#home" style={{ fontSize: "1rem" }}>
                    <img
                        alt=""
                        src={portfolio}
                        width="100"
                        height="50"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto " style={{ fontSize: "1rem" }}>
                        <Link className='p-2' to='/' style={{textDecoration: "none", color:"black"}}>Home</Link>
                        <Link className='p-2' to='/projects' style={{textDecoration: "none", color:"black"}}>Projects</Link>
                        <Link className='p-2' to='/skills' style={{textDecoration: "none", color:"black"}}>skills</Link>
                        <Link className='p-2' to='/achievements' style={{textDecoration: "none", color:"black"}}>Achievements</Link>
                        <Link className='p-2' to='/contact' style={{textDecoration: "none", color:"black"}}>Contact</Link>
                        <Link className='p-2' to='/about' style={{textDecoration: "none", color:"black"}}>Abouts</Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarTop;