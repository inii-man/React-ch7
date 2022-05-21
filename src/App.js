import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { Home, About, Login } from './pages'
import './App.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar bg="black" variant="black" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React CH-7</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/login">Login</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route exact path="/" element={<Home />}>
        </Route>
        <Route exact path="/about" element={<About />}>
        </Route>
        <Route exact path="/login" element={<Login />}>
        </Route>
      </Routes>
      <MDBFooter color="black" variant="black" className="font-small pt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">React CH-7</h5>
            <p>
              Desc
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Links</h5>
            <ul>
              <li className="list-unstyled">
                <a href="/">Home</a>
              </li>
              <li className="list-unstyled">
                <a href="/about">About</a>
              </li>
              <li className="list-unstyled">
                <a href="/login">Login</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: Binar React ch-7
        </MDBContainer>
      </div>
    </MDBFooter>
    </BrowserRouter>
  );
}

export default App;
