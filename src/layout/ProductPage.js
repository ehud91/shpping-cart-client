
import React, { useState, useEffect } from 'react';
import { FormControl } from '@mui/material';
import { delay } from '../utils/delay';
import ButtonAddProduct from '../components/ProductPage/ButtonAddProduct';
import TextFieldAddProduct from '../components/ProductPage/TextFieldAddProduct';
import Dropdown from '../components/ProductPage/DropDown';
import { fetchCategories } from '../services/Categories.service';
import { Constants } from '../constants/Constants';
import OrderList from '../components/ProductPage/OrderList';
import ButtonSubmit from '../components/ProductPage/ButtonSubmit';
import BoxErrorMessage from '../components/ProductPage/BoxErrorMessage';

import { addProducts } from '../features/ProductsSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


let chosenCategoriesMap = new Map();
let proudctsList = new Map();

const ProductPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('');
    const [categories, setCategories] = useState([]);
    const [newProduct, setNewProduct] = useState('');
    const [addProductEnable, setAddProductEnable] = useState(true);
    const [isProductFieldError, setIsProductFieldError] = useState('');
    const [isCategorySelectError, setIsCategorySelectError] = useState('');
    const [selectedCategoriesMap, setSelectedCategoriesMap] = useState(new Map());
    const [submitBtnEnabled, setSubmitBtnEnabled] = useState('false');

    const [isErrorFetchData, setIsErrorFetchData] = useState(false);
    
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await fetchCategories();
            if (response != null && response.message == "Success") {
                setCategories(response.data);
    
                await delay(1000);
                setAddProductEnable(false);
            } else {
                setIsErrorFetchData(true);
            }       
            
          } catch (error) {
            setIsErrorFetchData(true);
            console.error('Error fetching data:', error);
          }
        };
    
        fetchData();
      }, []);


      const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        setIsCategorySelectError('');
      };
    
      const handleAddProduct = () => {

            if (newProduct.length <= 0 && selectedCategory.length <= 0) {
                setIsProductFieldError('true');
                setIsCategorySelectError('true');
                return;
            }

            if (newProduct.length <= 0) {
                setIsProductFieldError('true');
                return;
            }

            if (selectedCategory.length <= 0) {
                setIsCategorySelectError('true');
                return;
            }

            if (!chosenCategoriesMap.has(selectedCategory)) {
                proudctsList = new Map();
            }

            if (!proudctsList.has(newProduct)) {
                proudctsList.set(newProduct, 1);
            } else {
                let productCount = proudctsList.get(newProduct);
                proudctsList.set(newProduct, ++productCount);
            }

            chosenCategoriesMap.set(selectedCategory, proudctsList);      
            setSelectedCategoriesMap(new Map());
            setSelectedCategoriesMap(chosenCategoriesMap);

            setIsProductFieldError('');
            setNewProduct('');
            setSubmitBtnEnabled('');
      };

    const changeProductField = (value) => {
        setNewProduct(value);
        setIsProductFieldError('');
    }

    const submitAllProducts = () => {
        
        dispatch(addProducts({ selectedCategoriesMap }));
        navigate('/checkout');
    }
  
    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', direction: 'rtl' }} >
                <div style={{ margin: '20px', width: '20%' }}>
                    <FormControl fullWidth>
                        <Dropdown 
                            selectedCategory={selectedCategory}
                            handleCategoryChange={handleCategoryChange}
                            categories={categories}
                            isCategorySelectError={isCategorySelectError}
                        />
                    </FormControl>

                    { isErrorFetchData && <BoxErrorMessage /> }               
                </div>
                        
                <div style={{ margin: '20px 0 0' }}>
                    <TextFieldAddProduct 
                        newProduct={newProduct} 
                        setNewProduct={setNewProduct} 
                        isFieldError={isProductFieldError}
                        changeProductField={changeProductField}
                    />
                </div>
            </div>

            <div style={{ padding: '20px', direction: 'rtl' }}>
                <ButtonAddProduct 
                        handleAddProduct={handleAddProduct} 
                        addProductEnable={addProductEnable}  
                />
            </div>

            <div style={{display: 'flex', flexDirection: 'row'}}>
            {Array.from(selectedCategoriesMap.entries()).map(([key, value]) => (
                <div style={{ width: '20%', marginTop: '40px', padding: '30px', direction: 'rtl' }}>
                    <OrderList title={key} products={value} sliceSize={6} />
                </div>
             ))}
             </div>

             <div style={{ padding: '20px', direction: 'ltr' }}>
                <ButtonSubmit 
                    submitBtnEnabled={submitBtnEnabled} 
                    submitAllProducts={submitAllProducts}
                />
             </div>
        </>
    )
};


export default ProductPage;