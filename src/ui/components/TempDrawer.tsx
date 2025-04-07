import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import { IconButton } from '@mui/material';

interface TempDrawerProps {
    navItems: { id: string; label: string }[];
    active: string;
    onNavigate: (id: string) => void;
}

const TempDrawer: React.FC<TempDrawerProps> = ({
    navItems,
    active,
    onNavigate,
}: TempDrawerProps) => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    const handleClick = (id: string) => {
        onNavigate(id);
        setOpen(false);
    };

    const DrawerList = (
        <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.id} disablePadding>
                        <ListItemButton
                            selected={active === item.id}
                            onClick={() => handleClick(item.id)}
                            sx={
                                {
                                    // '&.Mui-selected': {
                                    //     backgroundColor: 'var(--primary)',
                                    //     color: 'var(--soft-white)',
                                    // },
                                    // '&:hover': {
                                    //     backgroundColor: 'var(--primary)',
                                    //     color: 'var(--soft-white)',
                                    // },
                                }
                            }
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <>
            <IconButton
                onClick={toggleDrawer(true)}
                sx={{
                    'color': 'white',
                    '&:focus': { outline: 'none' },
                    '&.Mui-focusVisible': { boxShadow: 'none' },
                    // '&:hover': {
                    //     backgroundColor: 'transparent',
                    // },
                }}
                disableRipple
                disableFocusRipple
            >
                <MenuRoundedIcon />
            </IconButton>
            <Drawer
                anchor="left"
                open={open}
                onClose={toggleDrawer(false)}
                PaperProps={{
                    sx: {
                        bgcolor: 'var(--surface)',
                        color: 'var(--text)',
                    },
                }}
            >
                {DrawerList}
            </Drawer>
        </>
    );
};

export default TempDrawer;
