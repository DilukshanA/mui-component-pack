// components/MiniDrawer.tsx
"use client";
import * as React from 'react';
import { Box, CssBaseline, Typography } from '@mui/material';
import AppBar from './../components/dashboard/AppBar';
import Sidebar, { DrawerHeader, drawerWidth } from './../components/dashboard/Sidebar';

export default function AdminDashboard() {
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar open={open} onDrawerOpen={handleDrawerOpen} drawerWidth={drawerWidth} />
      <Sidebar open={open} onDrawerClose={handleDrawerClose} />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Typography paragraph
        color='text.secondary'
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod...
        </Typography>
        <Typography
        sx={(theme) => ({
          color: theme.palette.text.secondary,
          ...theme.typography.h1,
        })}
         paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est...
        </Typography>
      </Box>
    </Box>
  );
}
