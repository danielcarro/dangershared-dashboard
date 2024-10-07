import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { Container, Header, Sidebar, Nav, Ul, Li, Main, Footer, P, ToggleButton } from './styles';

const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false); // Estado para controlar a abertura da sidebar

  const toggleSidebar = () => {
    setIsOpen(!isOpen); // Alternar entre aberto e fechado
  };

  return (
    <Container>
      {/* Botão para abrir/fechar a sidebar */}
      <ToggleButton isOpen={isOpen} onClick={toggleSidebar}>
        <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
      </ToggleButton>

      {/* Topo do Dashboard */}
      <Header>
        <img src='logo.png' width={150} />
        
      </Header>

      {/* Sidebar */}
      <Sidebar isOpen={isOpen}>
        <Nav>
          <Ul>
            <Li><Link to="/">Home</Link></Li>           
            <Li><Link to="/FireSpots">Firespots</Link></Li>
            <Li><Link to="/about">About</Link></Li>
          </Ul>
        </Nav>
        <P>Sidebar Footer</P>
      </Sidebar>

      {/* Conteúdo Principal */}
      <Main isOpen={isOpen}>
        {children}
      </Main>

      {/* Rodapé */}
      <Footer>
        <P>© 2024 Generation Code</P>
      </Footer>
    </Container>
  );
};

export default Layout;
