import axios from 'axios';

const reviewsInstance = axios.create({
  baseURL: 'https://portfolio-js.b.goit.study/api/',
});

export const getreviews = async () => {
  const data = await reviewsInstance.get('/reviews');
  return data;
};
