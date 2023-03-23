import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import portfolio from '../asserts/images/portfolio.png'
function NavbarTop() {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home" style={{fontSize: "1.8rem"}}>
                    <img
                        alt=""
                        src={portfolio}
                        width="150"
                        height="60"
                        className="d-inline-block align-top"
                    />{' '}
                    {/* Portfolio */}
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto" style={{ fontSize: "1.2rem" }}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Abouts</Nav.Link>
                        <Nav.Link href="#link">Projects</Nav.Link>
                        <Nav.Link href="#link">Skills</Nav.Link>
                        <Nav.Link href="#link">Achievements</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarTop;