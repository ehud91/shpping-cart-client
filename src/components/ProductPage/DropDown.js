import React from 'react';
import { MenuItem, Select } from '@mui/material';
import { Constants } from '../../constants/Constants';

const Dropdown = (props) => {
  
    const { 
        selectedCategory, 
        handleCategoryChange, 
        categories,
        isCategorySelectError } = props;

        const isErrorBorder = () => (isCategorySelectError == 'true') ? '1px solid red' : '';
        const isErrorText = () => (isCategorySelectError == 'true') ? 'red' : '';

  return (
        <div >
        <Select
            value={selectedCategory}
            onChange={handleCategoryChange}
            displayEmpty
            style={{color: isErrorText(), border: isErrorBorder()}}
            >
            <MenuItem value="" disabled>
                {Constants.CHOOSE_CATEGORY}
            </MenuItem>
            {categories.map((category, index) => (
                <MenuItem key={index} value={category}>
                {category}
                </MenuItem>
            ))}
        </Select>
        </div>
  );
};

export default Dropdown;