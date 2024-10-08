import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { Constants } from '../../constants/Constants';



const TextFieldFullName = (props) => {

    const { setFullName, fullName, isErrorFullName } = props;

    return (
        <TextField
            label={Constants.CHECKOUT_FULL_NAME_TEXTFIELD}
            value={fullName}
            fullWidth
            margin="normal"
            variant="outlined"
            inputProps={{ style: { textAlign: 'right' } }} // Align text to the right
            error={isErrorFullName}
            onChange={(e) => setFullName(e.target.value)}
        />
    )
}

export default TextFieldFullName;