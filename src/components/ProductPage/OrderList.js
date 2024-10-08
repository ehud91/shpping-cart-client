import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Box } from '@mui/material';


const OrderList = (props) => {

    const { title, products, sliceSize } = props;

    return (
        <>
            <Box style={{
                    padding: '20px',
                    background: '#33006F', 
                    width: '70%',
                    color: 'white',
                    textAlign: 'center',
                    'box-shadow': '0px 3px 1px -2px rgba(0,0,0,0.2),0px 2px 2px 0px ',
                    borderRadius: 10}}>
                    
                { title }
            </Box>
            <List sx={{ width: '80%', maxWidth: 360 }}>
            {Array.from(products.entries()).map(([key, value]) => (
                <ListItem
                    key={key}
                    disableGutters
                    secondaryAction={
                        <ShoppingCartIcon />
                    }
                    style={{ color: '#B22222'}}
                    title={key}    
                >                    
                    <ListItemText primary={`${(key.trim().length > sliceSize) ? key.trim().slice(0, sliceSize) + '...' : key.trim()}`} />
                    <ListItemText secondary={`-`} />
                    <ListItemText primary={`${value}`} />
                </ListItem>
            ))}
            </List>
        </>
    );

}

export default OrderList;