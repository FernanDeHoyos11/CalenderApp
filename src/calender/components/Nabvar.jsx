import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import LogoutIcon from '@mui/icons-material/Logout';
import { CalendarModal } from './CaledarModal';
import { useAuthStore } from '../../hooks/useAuthStore';
import { useSelector } from 'react-redux';

export const Navbar = () => {

    const {startLogout} = useAuthStore()
    const {user} = useSelector(state => state.auth)


    const onLogout = () => {
        startLogout()
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <CalendarMonthIcon />
                        </IconButton>
                        <Typography variant="h6" component="div">
                            {user?.name}
                        </Typography>

                     <CalendarModal/> 
                    </Box>

                    <Button variant="outlined" onClick={onLogout} color="error" startIcon={<LogoutIcon />}>
                        Salir
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
