import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function NavBarDetalle() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#">Adóptame</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default NavBarDetalle;

