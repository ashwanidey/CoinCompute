import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
const navLinkStyle = {
  fontSize : "1.2rem",
}

const TopBar = () => {
  return (
    <>
    
    <Navbar collapseOnSelect expand="lg">
  <Container className='py-[10px] px-[5%] max-w-[100%]'>
    <NavLink to="/">
      <div className='text-[1.6rem] font-[800]'>COIN COMPUTE</div>
    </NavLink>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <div className='flex lg:flex-row flex-col lg:gap-11  lg:mr-10 ml-auto'> 
        <NavLink to="/discordBot">
          <div style={navLinkStyle}>Home</div>
        </NavLink>
        <NavLink to="/discordBot/commands">
          <div style={navLinkStyle}>Commands</div>
        </NavLink>
        <a href="https://discord.com/oauth2/authorize?client_id=1217553379690025101&permissions=8&scope=bot+applications.commands">
          <div style={navLinkStyle}>Invite</div>
          </a>
        <a href="https://github.com/ashwanidey/CoinComputeBot">
          <div style={navLinkStyle}>Github</div>
          </a>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>

    </>
  )
}

export default TopBar