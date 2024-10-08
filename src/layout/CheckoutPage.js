
import React, { useState, useEffect } from 'react';
import { Button, Box, Typography } from '@mui/material';
import { Constants } from '../constants/Constants';
import ButtonSubmit from '../components/CheckoutPage/ButtonSubmit';
import TextFieldEmail from '../components/CheckoutPage/TextFieldEmail';
import TextFieldAddress from '../components/CheckoutPage/TextFieldAddress';
import TextFieldFullName from '../components/CheckoutPage/TextFieldFullName';
import OrderList from '../components/ProductPage/OrderList';
import BoxSuccessMessage from '../components/CheckoutPage/BoxSuccessMessage'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const CheckoutPage = () => {

    const [fullName, setFullName] = useState('');
    const [address, setAddress] = useState('');
    const [email, setEmail] = useState('');

    const [isErrorFullName, setIsErrorFullName] = useState(false);
    const [isErrorAddress, setIsErrorAddress] = useState(false);
    const [isErrorEmail, setIsErrorEmail] = useState(false);

    const [isSubmitDisabled, setIsSubmitDisabled] = useState(false);
    const [isSuccessMessageDisplay, setSuccessMessageDisplay] = useState(false);
    
    const navigate = useNavigate();
    const collectedProducts = useSelector((state) => state.products.collectProducts);
    //console.log('collectProducts', collectedProducts);

    const handleFullName = (value) => {
        setFullName(value);
        setIsErrorFullName(false);
    }

    const handleAddress = (value) => {
        setAddress(value);
        setIsErrorAddress(false);
    }

    const handleEmail = (value) => {
        setEmail(value);
        setIsErrorEmail(false);
    }

    const handleButtonSubmit = () => {

        let isValid = true;
        if (fullName.length <= 0) {
            setIsErrorFullName(true);
            isValid = false;
        }

        if (address.length <= 0) {
            setIsErrorAddress(true);
            isValid = false;
        }

        if (email.length <= 0) {
            setIsErrorEmail(true);
            isValid = false;
        }

        if (isValid) {
            console.log('Submitted!!');
            setIsSubmitDisabled(true);
            setSuccessMessageDisplay(true);

            console.log('fullName', fullName);
            console.log('address', address);
            console.log('email', email);
            return;
        }

        console.log('Not Valid - Not Submitted!!')        
    }

    const handleButtonBackToProductPage = () => {
        window.location.href = "/product";
        return;
    }

    return (
        <>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    direction: 'rtl',
                    padding: 3,
                    backgroundColor: '#f5f5f5', // Light background for contrast
                    borderRadius: 2, // Rounded corners
                    maxWidth: '500px', // Maximum width for a centered layout
                    margin: 'auto', // Center the form horizontally
                }}
                >
              
                <Box sx={{ width: '100%', textAlign: 'right' }}>
                    {/* Form Title */}
                    <Typography variant="h5" gutterBottom sx={{ marginBottom: 3 }}>
                    {Constants.CHECKOUT_FORM_HEADER}
                    </Typography>

                    <TextFieldFullName setFullName={handleFullName} fullName={fullName} isErrorFullName={isErrorFullName} />

                    <TextFieldAddress setAddress={handleAddress} address={address} isErrorAddress={isErrorAddress} />

                    <TextFieldEmail setEmail={handleEmail} email={email} isErrorEmail={isErrorEmail} />

                    <div style={{display: 'flex', flexDirection: 'row'}}>
                        {Array.from(collectedProducts[0].entries()).map(([key, value]) => (
                            <div style={{ width: '35%', marginTop: '40px', padding: '15px', direction: 'rtl' }}>
                                <OrderList title={key} products={value} sliceSize={9} />
                            </div>
                        ))}
                    </div>

                    <ButtonSubmit handleButtonSubmit={handleButtonSubmit}  isSubmitDisabled={isSubmitDisabled} />
                
                    { isSuccessMessageDisplay &&
                        <div style={{ paddingTop: '10%', display: 'flex', flexDirection: 'row' }}>
                            <BoxSuccessMessage />

                            <Button                         
                                variant="contained"                                
                                sx={{
                                    fontSize: 15,
                                    padding: 1.5,                                    
                                    borderRadius: 3,
                                    backgroundColor: '#008B8B',
                                    '&:hover': {                          
                                    backgroundColor: '#008080', // Darker shade on hover
                                    },
                                }}
                                onClick={handleButtonBackToProductPage}
                                >חזור לדף המוצר</Button>
                        </div>
                    }
                </Box>
            </Box>
        </>
    )
};


export default CheckoutPage;