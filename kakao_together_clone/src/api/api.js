import axiosInstance from './axiosInstance';

// GET 요청 예제
export const fetchData = async (endpoint) => {
  try {
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error('GET request failed:', error);
    throw error;
  }
};

// POST 요청 예제
export const postData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('POST request failed:', error);
    throw error;
  }
};

// PUT 요청 예제
export const putData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.put(endpoint, data);
    return response.data;
  } catch (error) {
    console.error('PUT request failed:', error);
    throw error;
  }
};

// DELETE 요청 예제
export const deleteData = async (endpoint) => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    console.error('DELETE request failed:', error);
    throw error;
  }
};


export const fetchTags = async () => {
  return fetchData('/tags');
}


export const fetchCampaignsByTag = async (tagId) => {
  try {
    return fetchData(`/campaigns?tagId=${tagId}`);
  } catch (error) {
    console.error('fetchCampaignsByTag request failed:', error);
    throw error;
  }
};