import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import "./HeaderAdmin.scss"

function NavScrollExample() {
  return (
    <div className='col-sm-12 pb-2 pt-1 border_bottom_header'>
    <Navbar bg="" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">
        <div className='col-sm-12'>
        <img src='../images/logo.png' className='img-fluid ' /></div>    
         </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-md-auto my-2 my-lg-0 pt-2"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='font_header_admin' href="#action1">My Acquisition</Nav.Link>
            <Nav.Link className='font_header_admin pl-md-4' href="#action2">My Listing</Nav.Link>
            <Nav.Link className='font_header_admin1 pl-md-4' href="#action2">Advisors</Nav.Link>
          </Nav>
          <Form className="d-flex">
          <Link to="/addAdvisor"> <button className='btn btn-primary rounded-circle button_header_profile button_profile'>A</button> </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;