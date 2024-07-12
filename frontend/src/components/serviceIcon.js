import React from 'react';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const ServerIcon = ({ name, IconSrc, route }) => {
    const history = useNavigate();

    const handleClick = () =>{
        history(route);
    }

    return (
        <Box
            onClick={handleClick}
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                cursor: 'pointer',
                margin: 2,
                border: '1px solid #ccc',
                padding: 2, 
                borderRadius: 2,
                width: '100%',

                }}
        >
            <IconSrc alr={name} style={{ width:50, height: 50}}/>
            {/* <img src={IconSrc} alt={name} style={{ width: 50, height: 50 }} /> */}
            <Typography>{name}</Typography>

        </Box>
    );
};

export default ServerIcon;
