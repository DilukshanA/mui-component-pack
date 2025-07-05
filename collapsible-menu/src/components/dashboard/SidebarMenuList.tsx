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
  ListItemIcon,
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
  CheckCircle,
} from '@mui/icons-material';
import CollapsibleMenu from '../ui/CollapsibleMenu';
import CircleIcon from '@mui/icons-material/Circle';
import FiberNewIcon from '@mui/icons-material/FiberNew';

interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  badge?: React.ReactNode;
  children?: MenuItem[];
  onClick?: () => void;
}

type CollapsibleMenuProps = {
  open?: boolean;
}

// Example usage component
const SidebarMenuList: React.FC<CollapsibleMenuProps> = ({open}) => {
  const [selectedItem, setSelectedItem] = useState<string>('product-list');

  const menuItems: MenuItem[] = [
    {
      id: 'ecommerce',
      label: 'E-commerce',
      icon: <ShoppingCart />,
      badge: <CircleIcon color="success" sx={{fontSize: '10px'}}/>,
      children: [
        {
          id: 'admin',
          label: 'Admin',
          children: [
            {
              id: 'product-listing',
              label: 'Product listing',
              onClick: () => console.log('Product listing clicked'),
            },
            {
              id: 'product-list',
              label: 'Product list',
              onClick: () => console.log('Product list clicked'),
            },
            {
              id: 'order-list',
              label: 'Order list',
              onClick: () => console.log('Order list clicked'),
            },
            {
              id: 'order',
              label: 'Order',
              onClick: () => console.log('Order clicked'),
            },
            {
              id: 'create-order',
              label: 'Create order',
              badge: <CircleIcon color="success" sx={{fontSize: '10px'}}/>,
              onClick: () => console.log('Create order clicked'),
            },
            {
              id: 'refund',
              label: 'Refund',
              onClick: () => console.log('Refund clicked'),
            },
            {
              id: 'invoice-list',
              label: 'Invoice list',
              onClick: () => console.log('Invoice list clicked'),
            },
            {
              id: 'invoice',
              label: 'Invoice',
              onClick: () => console.log('Invoice clicked'),
            },
          ],
        },
        {
          id: 'customer',
          label: 'Customer',
          icon: <PersonOutline />,
          children: [
            {
              id: 'customer-list',
              label: 'Customer list',
              onClick: () => console.log('Customer list clicked'),
            },
            {
              id: 'customer-details',
              label: 'Customer details',
              onClick: () => console.log('Customer details clicked'),
            },
          ],
        },
      ],
    },
    {
        id: 'travel-ride',
        label: 'Travel Ride',
        icon: <PersonOutline />,
        children: [
            {
                id: 'create-ride',
                label: 'Create Ride',
                onClick: () => console.log('Create Ride clicked'),
            }
        ]

    },
    {
        id: 'users',
        label: 'Users',
        icon: <Person />,
        children: [
            {
                id: 'passenger',
                label: 'Passengers',
                badge: <CircleIcon color="success" sx={{fontSize: '10px'}}/>,
            },
            {
                id: 'driver',
                label: 'Drivers',
            },
            {
                id: 'assistant',
                label: 'Assistants',
            }
        ]
    },
    {
        id: 'vehicles',
        label: 'Vehicles',
        icon: <Inventory />,
        badge: <FiberNewIcon color="success" sx={{fontSize: '20px'}}/>,
    }
  ];

  const handleItemClick = (item: MenuItem) => {
    setSelectedItem(item.id);
    console.log('Selected item:', item.label);
  };

  return (
    <Box>
      {open && (
      <Box sx={{ p: 2 }}>
        <Typography
          variant="body2"
          sx={(theme) => ({
            ml: 2,
            mb: 2,
            color: theme.palette.mode === 'light' ? '#606060' : '#c2c2c2',
          })}
        >Menu
      </Typography>
        <CollapsibleMenu
          items={menuItems}
          selectedItem={selectedItem}
          onItemClick={handleItemClick}
        />
      </Box>
      )}
      {!open && (
          <List>
            {menuItems.map((item, index) => (
            <ListItem key={index} disablePadding sx={{ display: 'block' }}>
              <ListItemButton sx={{ minHeight: 48, justifyContent: open ? 'initial' : 'center', px: 2.5 }}>
                <ListItemIcon sx={{ minWidth: 0, mr: open ? 3 : 'auto', justifyContent: 'center' }}>
                  {item.icon}
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            ))}
          </List>
      )}
    </Box>
  );
};

export default SidebarMenuList;