import Nav from "react-bootstrap/Nav";
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';


const Navi = (props) => {
    return (

        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/">Find My License</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="">Home</Nav.Link>
              <Nav.Link href="/create">Add License</Nav.Link>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    
    // <Nav  className="justify-content-center" defaultActiveKey="/" as="ul">
    //   <Nav.Item as="li">
    //     <Nav.Link href="/">Home</Nav.Link>
    //   </Nav.Item>
    //   <Nav.Item as="li">
    //     <Nav.Link href="/create">Add New License</Nav.Link>
    //   </Nav.Item>
    // </Nav>
        

    )   
}

export default Navi