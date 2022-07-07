import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import {Navbar, NavDropdown} from 'react-bootstrap';
import {useNavigate} from 'react-router-dom';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {Link} from 'react-router-dom';




const Header = () => {
  const navigate=useNavigate();

  let user =JSON.parse(localStorage.getItem('user-info'));
  
  function logOut(){
    localStorage.clear()
    navigate('/login')
  }
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Ecommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0 navbar-wrapper"
            style={{ maxHeight: '100px' }}
            navbarScroll 
          >
            <Link to='/'>Home</Link>
            {
              localStorage.getItem('user-info') ? <><Link to='/product'>Add Product</Link>
            <Link to='/search'>search Product</Link></> : 
            <><Link to='/register'>Register</Link>
            <Link to='/login'>Login</Link></>

            }
            
            
            
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
             
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Nav>
        {localStorage.getItem('user-info') ? <NavDropdown title={user.username}> 
        <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
        </NavDropdown> :null }
        
      </Nav>
    </Navbar>
  )
}

export default Header