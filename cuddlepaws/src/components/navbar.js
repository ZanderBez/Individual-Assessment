// src/components/NavbarComponent.js
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../context/Authcontext';
import '../stylesheet/navbar.css';
import Logo from "../assets/logo.svg";

function NavbarComponent() {
    const { user, logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
    };

    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="back-round">
                <Container>
                    <Navbar.Brand>
                        <Link to='/' className='nav-logo'>
                            <img src={Logo} alt="cuddlepaws" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="/" className='nav-text'>Home</Nav.Link>
                            <Nav.Link as={Link} to="/items" className='nav-text'>Items</Nav.Link>
                            <Nav.Link as={Link} to="/sell" className='nav-text'>CreateItem</Nav.Link>
                            <Nav.Link as={Link} to="/edit" className='nav-text'>EditItems</Nav.Link>
                        </Nav>
                        <Nav>
                            {user ? (
                                <NavDropdown title={user.username} id="collasible-nav-dropdown" className="nav-dropdown">
                                    <NavDropdown.Item onClick={handleLogout} className='nav-sign'>Logout</NavDropdown.Item>
                                </NavDropdown>
                            ) : (
                                <NavDropdown title="Account" id="collasible-nav-dropdown" className="nav-dropdown">
                                    <NavDropdown.Item as={Link} to="/signin" className='nav-sign'>Sign In</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item as={Link} to="/signup" className='nav-sign'>Sign Up</NavDropdown.Item>
                                </NavDropdown>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
