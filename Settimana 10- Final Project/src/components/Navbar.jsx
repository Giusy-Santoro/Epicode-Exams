import { Navbar, Container, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTachometerAlt } from '@fortawesome/free-solid-svg-icons';
import bellIcon from '../assets/bell-icon.gif';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className='navbar'>
      <Container>
        <Navbar.Brand href="#">
          <FontAwesomeIcon icon={faTachometerAlt} className="me-2" />
          Weather
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#">
              <img src={bellIcon} alt="Bell Icon" width="20" height="20" className="d-inline-block align-text-top me-1" />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;