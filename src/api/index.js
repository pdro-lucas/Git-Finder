import axios from 'axios';

/* By default, Github only accepts 60 requests when the user is not
autenticated. Import your personal acess token to make more requests. */

const getUserData = async (user) => {
  const url = `https://api.github.com/users/${user}`;

  if (user) {
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
    } catch {
      return undefined;
    }
  }

  return undefined;
};

export default getUserData;
