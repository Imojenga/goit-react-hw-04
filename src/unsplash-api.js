import axios from 'axios';

export const fetchImgs = async (userQuery, currentPage) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
    params: {
      client_id: 'i5Dyl0HnrKakRDGlMXH9_9CdNl0KPaqwZ2iuDhzM494',
      query: userQuery,
      per_page: 12,
      page: currentPage,
    },
  });
  return response.data.results;
};
