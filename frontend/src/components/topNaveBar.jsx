import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Modal, Box, TextField, Avatar } from "@mui/material";

const TopNavBar = () => {
    const [open, setOpen] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loggedIn, setLoggedIn] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLogin = () => {
        if (username === "admin" && password === "password") {
            setLoggedIn(true);
            setOpen(false);
        } else {
            alert("Invalid username or password");
        }
    };

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" style={{ flexGrow: 1 }}>
                        SuperMan
                    </Typography>
                    {loggedIn ? (
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Avatar sx={{ bgcolor: "primary.main", mr: 1 }}>{/* Placeholder for profile image */}</Avatar>
                            <Button color="inherit" onClick={handleLogout}>
                                Sign Out
                            </Button>
                        </Box>
                    ) : (
                        <Button color="inherit" onClick={handleOpen}>
                            Sign In
                        </Button>
                    )}
                </Toolbar>
            </AppBar>

            {/* Login Modal */}
            <Modal open={open} onClose={handleClose} aria-labelledby="login-modal-title" aria-describedby="login-modal-description">
                <Box
                    sx={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                        width: 400,
                        bgcolor: "background.paper",
                        boxShadow: 24,
                        p: 4,
                    }}>
                    <Typography id="login-modal-title" variant="h6" gutterBottom>
                        Sign In
                    </Typography>
                    <TextField
                        id="username"
                        label="Username"
                        variant="outlined"
                        fullWidth
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <TextField
                        id="password"
                        label="Password"
                        variant="outlined"
                        type="password"
                        fullWidth
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        sx={{ mb: 2 }}
                    />
                    <Button variant="contained" onClick={handleLogin}>
                        Login
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

export default TopNavBar;
