import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import { NavLink, useNavigate } from 'react-router-dom';

const pages = ['Home','Tracker','Watchlist', 'Calculator','News','Discord Bot'];
const paths = ["/home",'/tracker',"/watchlist","/calculator",'/news','/discordBot']
const settings = [];

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/home`);
  }

  return (
    <div className='pr-[0.5rem] pt-[0.5rem] pl-[0.5rem] '>
    <AppBar position="static" sx = {{borderRadius: "10px",  backgroundColor : "#021E9A",width:"100%"}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* <CurrencyBitcoinIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,fontSize: 30  }} /> */}

          <NavLink to="/home">
          <Typography
            variant="h6"
            noWrap
            component="a"
            
            sx={{
              mr: 6,
              display: { xs: 'none', md: 'flex' },
              fontFamily: {'Rubik': ['Rubik', 'sans-serif']},
              fontWeight: 1000,
              fontSize : "1.5rem",
              color: 'inherit',
              textDecoration: 'none',
              
            }}
          >
            COIN COMPUTE
          </Typography>
          </NavLink>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <div className='w-[6px] h-[6px] bg-[red] rounded-full relative top-3 right-3'></div>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            > 
              {pages.map((page,index) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  {/* console.log(index); */}
                  <NavLink to={paths[index]}>
                    {page === "News"  || page === "Watchlist"? <Typography textAlign="center" sx = {{fontWeight:1000}}
                    className='flex items-center'>
                    {page} <div className='text-[0.6rem] bg-[#3861FB] text-white rounded-[40px] py-[3px] px-[7px] ml-2 '>New</div>
                  </Typography> : <Typography textAlign="center" sx = {{fontWeight:1000}}>
                    {page}
                  </Typography>}
                  
                 
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* <CurrencyBitcoinIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1,fontSize: 30 }} /> */}
          {/* <NavLink to='/home'> */}
          
          <Typography
            variant="h5"
            noWrap
            
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: {'Rubik': ['Rubik', 'sans-serif']},
              fontWeight: 1000,
              
              color: 'inherit',
              textDecoration: 'none',
            }}
          onClick = {() => handleClick()}>
            COIN COMPUTE
          </Typography>
          
          {/* </NavLink> */}
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
              <NavLink to={paths[index]}>
                { page === "News" || page === "Watchlist"? <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'flex',fontWeight:1000,fontSize: "1rem " , mr:2}}
                className='items-center'
              >
                {page} <div className='text-[0.6rem] bg-white text-black rounded-[40px] py-[1px] px-[7px] ml-2 '>New</div>
              </Button> : <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block',fontWeight:1000,fontSize: "1rem " , mr:2}}
              >
                {page}
              </Button>}
              
              </NavLink>
            ))}
          </Box>

          
        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
export default ResponsiveAppBar;
