import axios from 'axios';

export const getAllProducts = async (accessToken) => {
    const response = await axios.get(`${baseUrl}/api/stories`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return response?.data;
  };
  


  export const getSingleProduct = async (id) => {
    const response = await axios.get(`${baseUrl}/api/stories/${id}`);
    return response?.data;
  };

  