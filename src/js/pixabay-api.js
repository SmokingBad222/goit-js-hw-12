export async function getImagesByQuery(query, page) {
  const API_KEY = '51425733-ebfe71f47e07541f439d053d0';
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    page,
    per_page: 15
  });

  const response = await fetch(`${BASE_URL}?${params}`);
  if (!response.ok) throw new Error('Error fetching images');
  return await response.json();
}





