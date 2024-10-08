import React, { useState, useEffect } from 'react';
import { Button } from '@mui/material';
import { Constants } from '../../constants/Constants';

const ButtonAddProduct = (props) => {
    const { handleAddProduct, addProductEnable,  } = props;
    return (
        <Button 
            disabled={addProductEnable}
            variant="contained" 
            color="primary" 
            onClick={handleAddProduct} 
            size="large"
            style={{ 
                fontSize: 18, 
                padding: '10px 7%', 
                borderRadius: '10px'}}
            >
            {Constants.PRODUCT_BUTTON_ADD}
        </Button>
    )
};


export default ButtonAddProduct;