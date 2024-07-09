import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServerIcon = ({ name, iconSrc, route }) => {
    const history = useNavigate();

    const handleClick = () =>{
        history.push(route);
    }

    return (
        <Box
            onclick={handleClick}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                margin: 2,
            }}
        >
            <img src={iconSrc} alt={name} style={{ width: 50, height: 50 }} />
            <Typography>{name}</Typography>

        </Box>
    );
};

export default ServerIcon;