

// services/categories.js
export const sendCheckoutData = async (userId) => {
    try {
        const response = await fetch(`http://localhost:3001/v1/api/categories`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Error fetching user data:', error);
        return null;
      }
};