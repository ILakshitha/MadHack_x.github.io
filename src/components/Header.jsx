import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import AdbIcon from '@mui/icons-material/Adb';
import madhack from '../assets/Madhacklogo.svg';

const pages = ['Home', 'About', 'TimeLine', 'Prizes', 'Faq'];

export default function Header({scrollTosection}) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [isactive,setIsActive]=React.useState('Home')

  function handleNav(section){
    return(
      setIsActive(section);
      scrollTosection(section);

    );
  }


  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <div>
    <AppBar  position="fixed" sx={{backgroundColor:'black'}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={madhack} sizes='' alt='madhack' style={{ width: '200px', height: '100px' }} />
          

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >

            </IconButton>

          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'end' }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

        </Toolbar>
      </Container>
    </AppBar>
    </div>
  );
}
