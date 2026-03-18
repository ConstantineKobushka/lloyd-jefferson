import axios from 'axios';

const reviewsInstance = axios.create({
  baseURL: 'https://portfolio-js.b.goit.study/api/',
});

export const getreviews = async () => {
  const data = await reviewsInstance.get('/reviews');
  return data;
};

export const sendRequests = async data => {
  try {
    const response = await reviewsInstance.post('/requests', data);
    return response;
  } catch (error) {
    throw new Error(getErrorMessage(error));
  }
};

function getErrorMessage(error) {
  if (!error.response) {
    return 'Network error. Check your internet connection.';
  }

  const status = error.response.status;

  switch (status) {
    case 400:
      return 'Invalid data. Please check your input.';
    case 404:
      return 'Service not found. Try again later.';
    case 500:
      return 'Server error. Please try later.';
    default:
      return 'Something went wrong.';
  }
}
