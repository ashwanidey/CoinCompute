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
        <NavLink to="/discordBot/commands">
          <div style={navLinkStyle}>Commands</div>
        </NavLink>
        <NavLink to="/discordBot/commands">
          <div style={navLinkStyle}>Invite</div>
        </NavLink>
        <NavLink to="/discordBot/commands">
          <div style={navLinkStyle}>Github</div>
        </NavLink>
      </div>
    </Navbar.Collapse>
  </Container>
</Navbar>

    
    {/* <div className='py-[10px] px-[20px] flex justify-between items-center'>
    <div className='text-[1.3rem] font-[800]'>DISCORD BOT</div>
    <div className='flex gap-11 mr-10'>
      <NavLink to = "/discordBot/commands"> 
      <div style={navLinkStyle}>Commands</div>
      </NavLink>
      <NavLink to = "/discordBot/commands"> 
      <div style={navLinkStyle}>Invite</div>
      </NavLink>
      <NavLink to = "/discordBot/commands"> 
      <div style={navLinkStyle}>Github</div>
      </NavLink>
    </div>
    </div> */}
    </>
  )
}

export default TopBar