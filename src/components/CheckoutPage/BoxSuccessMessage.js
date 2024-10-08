import React from 'react';
import { Box } from '@mui/material';
import { Constants } from '../../constants/Constants';


const BoxSuccessMessage = () => {

    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                direction: 'rtl',
                padding: 2,
                backgroundColor: '#32CD32', // Light background for contrast
                borderRadius: 2, // Rounded corners
                maxWidth: '30%', // Maximum width for a centered layout
                margin: 'auto', // Center the form horizontally
                color: 'white',
                border: '1px solid green'
            }}
        >
            {Constants.CHECKOUT_PAGE_SUBMIT_SUCCESS}
        </Box>
    )
}


export default BoxSuccessMessage;