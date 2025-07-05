// components/AppBar.tsx
"use client";
import { styled } from '@mui/material/styles';
// import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MuiAppBar from '@mui/material/AppBar';
import type { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
// import ThemeToggle from '../ThemeToggle';
import { Avatar, Box, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useNavigate } from 'react-router-dom';

export interface CustomAppBarProps extends MuiAppBarProps {
  open: boolean;
  onDrawerOpen: () => void;
  drawerWidth: number;
}

const StyledAppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})<Pick<CustomAppBarProps, 'open' | 'drawerWidth'>>(
  ({ theme, open, drawerWidth }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  })
);

export default function AppBar({
  open,
  onDrawerOpen,
  drawerWidth,
  ...rest
}: CustomAppBarProps) {

  return (
    <StyledAppBar position="fixed" open={open} drawerWidth={drawerWidth} color='inherit' elevation={1} {...rest}>
      <Toolbar>
        {!open && (
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={onDrawerOpen}
            edge="start"
            sx={{ marginRight: 5 }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
        <Box display='flex'
          sx={{ ml: 'auto', gap: 1 }}
        >
            {/* <ThemeToggle/> */}

            <Button
              variant='contained'
              size='small'
              endIcon={<KeyboardDoubleArrowRightIcon/>}
              disableElevation
            >
              Login
            </Button>

            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" 
            />
        </Box>
      </Toolbar>
    </StyledAppBar>
  );
}
