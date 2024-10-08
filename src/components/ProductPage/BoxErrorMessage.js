import React from 'react';
import { Box } from '@mui/material';
import { Constants } from '../../constants/Constants';


const BoxErrorMessage = () => {

    return (
        <Box
            sx={{
                justifyContent: 'center',
                direction: 'rtl',
                padding: 1,                
                borderRadius: 2, // Rounded corners
                margin: 'auto', // Center the form horizontally
                color: 'red',                
                opacity: 0.8,
                fontSize: '12px',              
            }}
        >
           * {Constants.NO_DATA_FETCHED}, {Constants.NO_DATA_TRY_LATER}
        </Box>
    )
}


export default BoxErrorMessage;