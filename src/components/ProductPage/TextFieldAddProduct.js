import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { Constants } from '../../constants/Constants';


const TextFieldAddProduct = (props) => {

    const { 
        newProduct, 
        isFieldError, 
        changeProductField } = props;

    return (
        <TextField
            label={Constants.PRODUCTS_FIELD_NAME}
            value={newProduct}
            onChange={(e) => changeProductField(e.target.value)}
            fullWidth
            direction="rtl"
            error={isFieldError}
        />
    )
}


export default TextFieldAddProduct;