import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { Constants } from '../../constants/Constants';


const TextFieldAddress = (props) => {

    const { setAddress, address, isErrorAddress } = props;

    return (
        <TextField
            label={Constants.CHECKOUT_ADDRESS_TEXTFIELD}
            value={address}
            fullWidth
            margin="normal"
            variant="outlined"
            inputProps={{ style: { textAlign: 'right' } }}
            error={isErrorAddress}
            onChange={(e) => setAddress(e.target.value)}
        />
    )
}

export default TextFieldAddress;