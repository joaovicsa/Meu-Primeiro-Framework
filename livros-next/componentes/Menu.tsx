import React from 'react';
import Link from 'next/link';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Menu: React.FC = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Link href="/" passHref>
        <Navbar.Brand>Minha Aplicação</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link href="/" passHref>
            <Nav.Link as="span">Início</Nav.Link>
          </Link>
          <Link href="/LivroLista" passHref>
            <Nav.Link as="span">Lista de Livros</Nav.Link>
          </Link>
          <Link href="/LivroDados" passHref>
            <Nav.Link as="span">Dados do Livro</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Menu;