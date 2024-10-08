import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Constants } from '../../constants/Constants';


const ButtonSubmit = (props) => {

    const { handleButtonSubmit, isSubmitDisabled } = props;

    return (
        <Button
            disabled={isSubmitDisabled}
            variant="contained"
            fullWidth
            sx={{
                fontSize: 20,
                padding: 1.5,
                marginTop: 2,
                borderRadius: 3,
                backgroundColor: '#ffbf00',
                '&:hover': {
                backgroundColor: '#ffa500', // Darker shade on hover
                },
            }}
            onClick={handleButtonSubmit}
            >
            {Constants.CHECKOUT_PAGE_BUTTON_SUBMIT}
        </Button>
    )
}

export default ButtonSubmit;