import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_gUld3cMrYmHs3gm8tWo5f9G9vTAV4G5ihyJNMUOmW5lZeRmq54qrDKaR9z1Xf3xn';
axios.defaults.baseURL = 'https://api.thecatapi.com/v1';

function fetchBreeds() {
  const END_POINT = '/breeds';

  return axios.get(`${END_POINT}`).then(response => {
    if (response.status !== 200) {
      throw new Error(response.statusText);
    }
    return response.data;
  });
}

function fetchCatByBreed(breedId) {
  const END_POINT = '/images/search';

  return axios
    .get(`${END_POINT}?breed_ids=${breedId}`)
    .then(response => {
      if (response.status !== 200) {
        throw new Error(response.statusText);
      }
      return response.data;
    })
    .then(data => {
      if (data.length === 0) {
        throw new Error('No cat found for the selected breed');
      }
      return data[0];
    });
}

export { fetchBreeds, fetchCatByBreed };
