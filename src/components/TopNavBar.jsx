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
import { NavLink } from 'react-router-dom';

const pages = ['Tracker', 'Calculator'];
const paths = ['/tracker',"/calculator"]
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

  return (
    <div className=''>
    <AppBar position="static" style = {{}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <CurrencyBitcoinIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1,fontSize: 30  }} />

          <NavLink to="/">
          <Typography
            variant="h6"
            noWrap
            component="a"
            
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: {'Rubik': ['Rubik', 'sans-serif']},
              fontWeight: 1000,
              
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
                  <Typography textAlign="center">{page}</Typography>
                  </NavLink>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <CurrencyBitcoinIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1,fontSize: 30 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: {'Rubik': ['Rubik', 'sans-serif']},
              fontWeight: 1000,
              
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            COIN COMPUTE
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page,index) => (
              <NavLink to={paths[index]}>
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
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
