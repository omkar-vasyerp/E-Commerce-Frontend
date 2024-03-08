import React, { useState } from 'react';
import { Popover, List, ListItem, ListItemText } from '@mui/material';
import AccountCircleSharpIcon from '@mui/icons-material/AccountCircleSharp';
import {  useNavigate } from 'react-router-dom';
const Account = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleLogout = () => {

    };
    let loggedIn = true;

    const loggedInDropdown = (
        <List>
            <ListItem button >
                <ListItemText primary="My Profile" />
            </ListItem>
            <ListItem button onClick={()=>{navigate("/my-orders")}}>
                <ListItemText primary="My Orders" />
            </ListItem>
            <ListItem button onClick={handleLogout()}>
                <ListItemText primary="Logout" />
            </ListItem>
        </List>
    );
    const notLoggedInDropdown = (
        <List>
            <ListItem button onClick={()=>{navigate("/sign-up")}}>
                <ListItemText primary="Register" />
            </ListItem>
            <ListItem button onClick={()=>{navigate("/login")}}>
                <ListItemText primary="Login" />
            </ListItem>

        </List>
    );

    return (
        <div>
            <div className='account' onClick={handleClick}  >
                <AccountCircleSharpIcon fontSize="large" cursor="pointer" />
            </div>
            <Popover
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {loggedIn ? (
                    <>
                        {loggedInDropdown}
                    </>
                ) : (
                    <>
                        {notLoggedInDropdown}
                    </>
                )}
            </Popover>
        </div>
    );
}
export default Account;