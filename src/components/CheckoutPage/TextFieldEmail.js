import React, { useState, useEffect } from 'react';
import { TextField } from '@mui/material';
import { Constants } from '../../constants/Constants';



const TextFieldEmail = (props) => {

    const { setEmail, email, isErrorEmail } = props;

    return (
        <TextField
            label={Constants.CHECKOUT_EMAIL_TEXTFIELD}
            value={email}
            fullWidth
            margin="normal"
            variant="outlined"
            inputProps={{ style: { textAlign: 'right' } }}
            error={isErrorEmail}
            onChange={(e) => setEmail(e.target.value)}
        />
    )
}

export default TextFieldEmail;