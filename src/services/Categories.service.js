import config from '../config.json';

// services/categories.js
export const fetchCategories = async (userId) => {
    try {
        console.log('config', config);
        const apiUrlPort = config.categoriesService.apiPort;
        const apiUrlPrefix = config.categoriesService.apiPrefixUrl;
        const response = await fetch(`${apiUrlPrefix}:${apiUrlPort}/v1/api/categories`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const results = await response.json();
        if (results.success) {
          return results.data;
        } else {
          throw new Error('Error occured, Could not fetch data from service', results);
        }        
      } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
      }
};