import axios from 'axios';

export const getUsersData = async (user) => {
  let url = 'https://api.github.com/users?per_page=8';

  if (user) {
    url = `https://api.github.com/users/${user}`;
  }

  // By default, Github only accepts 60 requests when the user is not
  // autenticated. Import your personal acess token to make more requests.

  try {
    const { data } = await axios({
      url,
      headers: {
        Accept: 'application/vnd.github.v3+json',
        Authorization:
          `token ${import.meta.env.VITE_PERSONAL_ACESS_TOKEN}` || null,
      },
    });

    return data;
  } catch (err) {
    console.error(err);
  }
};
