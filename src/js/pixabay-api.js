import axios from 'axios';

export async function getImagesByQuery(query, page) {
  const API_KEY = '51425733-ebfe71f47e07541f439d053d0';
  const BASE_URL = 'https://pixabay.com/api/';
  const PER_PAGE = 15;

  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    page,
    per_page: PER_PAGE,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    throw new Error('Error fetching images');
  }
}





