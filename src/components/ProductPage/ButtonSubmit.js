import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Constants } from '../../constants/Constants';



const ButtonSubmit = (props) => {

    const { submitBtnEnabled, submitAllProducts } = props;

    return (
        <Button 
            disabled={submitBtnEnabled}
            variant="contained" 
            onClick={submitAllProducts} 
            size="large"
            style={{ 
                fontSize: 18, 
                padding: '5px 5%', 
                borderRadius: '10px',
                backgroundColor: "#ffbf00",}}
            >
            {Constants.PRODUCT_BUTTON_SUBMIT}
        </Button>
    )
};


export default ButtonSubmit;