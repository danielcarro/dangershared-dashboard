// src/pages/styles.js
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh; /* Ocupar toda a altura da janela */
`;

export const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 5px;
  text-align: center;
`;

export const Sidebar = styled.aside`
  width: ${(props) => (props.isOpen ? '200px' : '0')}; /* Largura variável */
  background-color: #444;
  color: white;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: ${(props) => (props.isOpen ? '20px' : '0')}; /* Padding quando aberto */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  transition: 0.3s; /* Transição suave ao abrir/fechar */
`;

export const Main = styled.main`
  margin-left: ${(props) => (props.isOpen ? '250px' : '0')}; /* Ajustar conteúdo */
  flex-grow: 1;
  background-color: #f0f0f0;
  padding: 20px;
  overflow-y: auto;
  transition: 0.3s; /* Transição suave ao abrir/fechar */
`;

export const Footer = styled.footer`
  background-color: #333;
  color: white;
  padding: 10px;
  text-align: center;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const Ul = styled.ul`
  list-style: none;
  padding: 0;
`;

export const Li = styled.li`
  margin: 10px 0;
  a {
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const P = styled.p`
  margin: 0;
`;

export const ToggleButton = styled.button`
  position: fixed;
  top: 20px;
  left: ${(props) => (props.isOpen ? '260px' : '20px')}; 
  background-color: #444;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  transition: 0.3s;
  z-index: 1; 
`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  padding: 20px;
  background-color: #f8f9fa; 
  text-align: center;
`;

export const Logo = styled.img`
  width: 50px; // Defina a largura do logo
  height: auto; // Mantenha a proporção
  margin-right: 10px; // Espaço entre o logo e o título
`;
