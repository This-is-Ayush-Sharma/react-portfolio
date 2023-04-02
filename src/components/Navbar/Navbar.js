import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';

import portfolio from '../asserts/images/portfolio.png'
function NavbarTop() {
    return (
        <Navbar bg="light" expand="lg" className='border-0 border-bottom border-right border-1 border-warning'>
            <Container>
                <Navbar.Brand href="#home" style={{ fontSize: "1.8rem" }}>
                    <img
                        alt=""
                        src={portfolio}
                        width="130"
                        height="70"
                        className="d-inline-block align-top"
                    />{' '}
                    {/* Portfolio */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{ fontSize: "1.3rem" }}>
                        <Link className='p-2' to='/'>Home</Link>
                        <Link className='p-2' to='/projects'>Projects</Link>
                        <Link className='p-2' to='/skills'>skills</Link>
                        <Link className='p-2' to='/achievements'>Achievements</Link>
                        <Link className='p-2' to='/contact'>Contact</Link>
                        <Link className='p-2' to='/about'>Abouts</Link>
                        {/* <Nav.Link href="#link">Abouts</Nav.Link>
                        <Nav.Link href="#link">Projects</Nav.Link>
                        <Nav.Link href="#link">Skills</Nav.Link>
                        <Nav.Link href="#link">Achievements</Nav.Link> */}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarTop;