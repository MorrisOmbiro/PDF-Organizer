import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import "../static/navbar.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../actions/authActions";

const link = {
  color: "#FFF",
  textDecoration: "none",
};

const link1 = {
  color: "palevioletred",
  textDecoration: "none",
};

const link2 = { 
  color: "red",
  textDecoration: "none",
  border: "1px solid red",
  fontSize: ".9em",
}

const Button = styled.button`
  background: ${(props) => (props.primary ? "palevioletred" : "white")};
  color: ${(props) => (props.primary ? "white" : "palevioletred")};

  font-size: 1em;
  margin-left: 1em;
  padding: 0.25em 1em;
  border: 2px solid palevioletred;
  border-radius: 3px;
`;

const Logo = styled.h2`
  display: inline;
  font-size: 1.5em;
  padding: 0em 0.25em;
  color: palevioletred;
`;

const MainNavbar = (props) => {
  const onLogoutClick = (e) => {
    e.preventDefault();
    props.logoutUser();
  };
  console.log();
  if (!props.auth.isAuthenticated) {
    return (
      <Navbar className="navbar-color" variant="light" sticky="top">
        <Container fluid="xl">
          <Navbar.Brand href="#home">
            <Logo>
              <strong>PDF</strong>izer
            </Logo>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Nav.Link style={{ marginRight: "30px" }} href="#home">
                <strong>Home</strong>
              </Nav.Link>
              <Nav.Link style={{ marginRight: "30px" }} href="#about">
                <strong>About</strong>
              </Nav.Link>
              <Nav.Link style={{ marginRight: "30px" }} href="#features">
                <strong>Features</strong>
              </Nav.Link>
              <Button style={{ marginRight: "30px" }}>
                <Link to="/login" style={link1}>
                  <strong>Login</strong>
                </Link>
              </Button>
              <Button primary>
                <Link to="/register" style={link}>
                  <strong>Register</strong>
                </Link>
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  } else {
    return (
      <Navbar className="navbar-color" variant="light" sticky="top">
        <Container fluid="xl">
          <Navbar.Brand href="#home">
            <Logo>
              <strong>PDF</strong>izer
            </Logo>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Button style={link2} onClick={onLogoutClick}>
                logout
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
};

MainNavbar.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(MainNavbar);
