import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assets/img/logo.png';

function NavBar() {
  return (
    <Navbar expand="lg" className="navbar-dark ">
      <Container className="d-flex justify-content-between align-items-center mx-0">
        <Navbar.Brand href="#">
          <img
            alt="Logo"
            src={logo}
            width="100"
            height="55"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">TV Shows</Nav.Link>
            <Nav.Link href="#">Movies</Nav.Link>
            <Nav.Link href="#">Recently Added</Nav.Link>
            <Nav.Link href="#">My List</Nav.Link>
          </Nav>
          </Navbar.Collapse>
          <i className="fa fa-search icons"></i>
          <div id="kids">KIDS</div>
          <i className="fa fa-bell icons"></i>
          <i className="fa fa-user icons"></i>
       
      </Container>
    </Navbar>
  );
}

export default NavBar;
