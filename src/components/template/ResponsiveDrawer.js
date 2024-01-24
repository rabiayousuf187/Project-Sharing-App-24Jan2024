import React, { useState, useEffect, useContext } from 'react'
import { useNavigate, NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import HomeIcon from '@mui/icons-material/Home';
import DashboardIcon from '@mui/icons-material/Dashboard';
import EditNoteIcon from '@mui/icons-material/EditNote';
import ViewListIcon from '@mui/icons-material/ViewList';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const drawerWidth = 240;

function ResponsiveDrawer(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const navigate = useNavigate();
    const [userStatus, setUserStatus] = useState(false);
    const [name, setName] = useState("");
    const [userInfo, setUserInfo] = useState(false);


    useEffect(() => {
        checkToken();
    }, [userStatus]);

    const checkToken = async () => {
        try {

            let token = localStorage.getItem('token');
            let user = localStorage.getItem('user');
            console.log("Side Bar USer userStatus=== ", user, userStatus)
            setUserInfo(JSON.parse(user));

            if (!token) {
                console.log("No User Login")
                // localStorage.removeItem("token")
                setUserStatus(false);
            } else {
                console.log("Side bar User Already Loggined", user, userInfo['username'])
                setName(userInfo['username']);
                // console.log("Side bar data == ",user["user"])
                // navigate(`/`);
                setUserStatus(true);
                // setUserInfo(user.user)
            }
            console.log("UNAUTH USer after userStatus=== ", user, userStatus)
        } catch (error) {
            navigate(`/`);
        }
    }

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Typography variant="h6" noWrap component="div">
                    {name}
                </Typography>
            </Toolbar>
            {/* <Toolbar /> */}
            <Divider />
            <List>
                {/* {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))} */}

                <ListItemButton>
                    <NavLink to="/auth/dashboard">
                        <ListItemIcon><DashboardIcon /></ListItemIcon>
                        <ListItemText primary='Dashboard' />
                    </NavLink>
                </ListItemButton>
                <ListItemButton>
                    <NavLink to="/auth/createproject">
                        <ListItemIcon><EditNoteIcon /></ListItemIcon>
                        <ListItemText primary='Create Blog' />
                    </NavLink>
                </ListItemButton>
                <ListItemButton>
                    <NavLink to="/auth/listblogs">
                        <ListItemIcon><ViewListIcon /></ListItemIcon>
                        <ListItemText primary='List Blogs' />
                    </NavLink>
                </ListItemButton>
            </List>
            <Divider />
            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </div>
    );

    // Remove this const when copying and pasting into your project.
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                {/* <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Responsive drawer
                    </Typography>
                    <ListItemButton id='home' to="/" color='primary' style={{justifyContent: 'flex-end' }}>
                        <ListItemIcon><HomeIcon/></ListItemIcon>
                    </ListItemButton>

                </Toolbar> */}
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >

                <Toolbar />
                {props.component}
            </Box>
        </Box>
    );
}

ResponsiveDrawer.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * Remove this when copying and pasting into your project.
     */
    window: PropTypes.func,
};

export default ResponsiveDrawer;
