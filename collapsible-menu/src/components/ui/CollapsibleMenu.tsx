import React, { useState } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Collapse,
  Box,
  Typography,
  IconButton,
  alpha,
} from '@mui/material';
import {
  ExpandLess,
  ExpandMore,
  ShoppingCart,
  Person,
  Inventory,
  ListAlt,
  Receipt,
  Add,
  Refresh,
  Description,
  PersonOutline,
} from '@mui/icons-material';

interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  children?: MenuItem[];
  onClick?: () => void;
}

interface CollapsibleMenuProps {
  items: MenuItem[];
  selectedItem?: string;
  onItemClick?: (item: MenuItem) => void;
}

const CollapsibleMenu: React.FC<CollapsibleMenuProps> = ({
  items,
  selectedItem,
  onItemClick,
}) => {
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const handleToggle = (itemId: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [itemId]: !prev[itemId],
    }));
  };

  const handleItemClick = (item: MenuItem) => {
    if (item.children && item.children.length > 0) {
      handleToggle(item.id);
    } else {
      onItemClick?.(item);
    }
  };

  const renderMenuItem = (item: MenuItem, depth: number = 0) => {
    const isSelected = selectedItem === item.id;
    const hasChildren = item.children && item.children.length > 0;
    const isOpen = openItems[item.id];

    return (
      <React.Fragment key={item.id}>
        <ListItem
          disablePadding
          sx={{
            pl: depth * 2,
            mt: 0.25,
          }}
        >
          <ListItemButton
            onClick={() => handleItemClick(item)}
            selected={isSelected}
            sx={(theme) => ({
              minHeight: 36,
              borderRadius: 3,
              py:0,
              // mb: 0.5,
              backgroundColor: isSelected ? (theme.palette.mode === 'light' ? '#e3f2fd' : '#0d47a1') : 'transparent',
              '&:hover': {
                backgroundColor: isSelected ? (theme.palette.mode === 'light' ? '#e3f2fd' : '#b823ae') : (theme.palette.mode === 'light' ? '#e3f2fd' : alpha('#979797', 0.2)),
              },
              '&.Mui-selected': {
                backgroundColor: isSelected ? (theme.palette.mode === 'light' ? '#e3f2fd' : alpha('#0d47a1', 0.3)) : 'transparent',
                '&:hover': {
                  backgroundColor: theme.palette.mode === 'light' ? '#e3f2fd' : alpha('#0d47a1', 0.4),
                },
              },
            })}
          >
            {/* icon */}
          {item.icon && React.isValidElement(item.icon) ? (
            <Box sx={(theme) => ({ 
              mr: 2, display: 'flex', alignItems: 'center',
              color: isSelected ? (theme.palette.mode === 'light' ? '#1976d2' : '#1976d2') : (theme.palette.mode === 'light' ? '#666' : '#979797'),  
              })}>
              {React.cloneElement(item.icon as React.ReactElement<any>, {
                sx: { fontSize: 18 }, // You can change this value to any px size
              })}
            </Box>
          ) : null}

            <ListItemText
              primary={
                <Box display="flex" alignItems="center" gap={1}>
                  {/* label */}
                  <Typography
                    variant="body2"
                    sx={(theme) => ({
                      color: isSelected ? (theme.palette.mode === 'light' ? '#1976d2' : '#1976d2') 
                      : depth === 0 ? (theme.palette.mode === 'light' ? '#333' : '#ededed')
                      : depth > 2 ? (theme.palette.mode === 'light' ? '#818181' : '#979797')
                      : (theme.palette.mode === 'light' ? '#606060' : '#c2c2c2'),
                      fontWeight: isSelected ? 500 : 400,
                      fontSize: '14px',
                    })}
                  >
                    {item.label}
                  </Typography>

                  {/* badge */}
                  {item.badge && (
                    <Box
                      sx={{
                        width: 14,
                        height: 14,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '10px',
                        fontWeight: 'bold',
                      }}
                    >
                      {item.badge}
                    </Box>
                  )}
                </Box>
              }
            />
            {hasChildren && (
              <IconButton
                size="small"
                sx={(theme) => ({
                  color: theme.palette.mode === 'light' ? '#666' : '#979797',
                  p: 0.25,
                })}
              >
                {isOpen ? (
                  <ExpandLess sx={{ fontSize: 14 }} />
                ) : (
                  <ExpandMore sx={{ fontSize: 14 }} />
                )}
              </IconButton>
            )}
          </ListItemButton>
        </ListItem>
        {hasChildren && (
          <Collapse in={isOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {item.children!.map((child) => renderMenuItem(child, depth + 1.5))}
            </List>
          </Collapse>
        )}
      </React.Fragment>
    );
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 280, bgcolor: 'background.paper' }}>
      <List component="nav" disablePadding>
        {items.map((item) => renderMenuItem(item))}
      </List>
    </Box>
  );
};

export default CollapsibleMenu;