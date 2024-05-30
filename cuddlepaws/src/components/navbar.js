import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import '../stylesheet/navbar.css';
import Logo from "../assets/logo.svg"

function NavbarComponent() {
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
                        <Nav.Link>
                          <Link to="/" className='nav-text'>Home</Link>
                            </Nav.Link>
                          <Nav.Link>
                              <Link to="/items" className='nav-text'>Items</Link>
                          </Nav.Link>
                            <Nav.Link>
                              <Link to="/sell" className='nav-text'>CreateItem</Link>
                          </Nav.Link>
                          <Nav.Link>
                              <Link to="/edit" className='nav-text'>EditItems</Link>
                          </Nav.Link>
                    </Nav>
                      <Nav>
                        <NavDropdown title="Account" id="collasible-nav-dropdown" className="nav-dropdown">
                            <NavDropdown.Item as="span">
                                 <Link to="signin" className='nav-sign'>Sign In</Link>
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item>
                                <Link to="/signup" className='nav-sign'>Sign Up</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                      </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavbarComponent;
