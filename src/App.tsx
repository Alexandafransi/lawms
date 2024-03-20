import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomePage from "./homepage/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactUs from "./ContactUs";
import CategoryList from "./category/CategoryList";
import PostList from "./post/PostList";
import PostDetail from "./post/PostDetail";


function App() {
  return (
    <div className="App" style={{background:"white"}}>
      <Router>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container >
          {/*<Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>*/}
          <Navbar.Brand>
            <Nav>
              <Nav.Link href="/">
                <img src="/assets/logo.svg" width="100" height="100" alt="Laws Management System"/>{''}
                LAWMS
              </Nav.Link>
            </Nav>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="link-navbar-nav">
            <Nav className="me-auto" style={{ display: 'flex', gap: '20px', whiteSpace: 'nowrap' }}>
              <Nav.Link href="#home" >About Us</Nav.Link>
              {/*<Nav.Link href="#home" >Service</Nav.Link>*/}
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Legal Aid</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>

              </NavDropdown>
              <Nav.Link href="/posts">Posts</Nav.Link>
              <Nav.Link href="/category">Categories</Nav.Link>
              <Nav.Link href="/contact">Contact Us</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </Router>
      {/*<HomePage/>*/}


      <Router>
        <div>
          {/* Define your routes inside the Routes component */}
          <Routes>
            {/* Each Route element defines a mapping between a URL path and a React component */}
            <Route path="/post/:id"  element={<PostDetail />}/>
            <Route path="/posts" element={< PostList/>} />
            <Route path="/category" element={<CategoryList/>} />
            <Route path="/contact" element={< ContactUs/>} />
            <Route path="/" element={<HomePage/>} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
