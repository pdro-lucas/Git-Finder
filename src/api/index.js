import axios from 'axios';

export const getUsersData = async (url) => {
  const { data } = await axios(
    `${url}?client_id=${import.meta.env.VITE_CLIENT_ID}&client_secret=${import.meta.env.VITE_CLIENT_SECRET}`
  );
  return data;
}