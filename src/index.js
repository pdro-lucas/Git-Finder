import getUserData from './api';
import './index.css';

(function () {
  const element = document.querySelector('.content');
  const input = document.querySelector('.input');

  function createElement(data) {
    element.innerHTML = `
      <img src=${data.avatar_url} alt="User Image">
    `;
  }

  const userData = async (user) => {
    if (user) {
      const data = await getUserData(user);
      console.log(data);

      if (data) createElement(data);
    }
  };

  let timer = null;

  input.addEventListener('keyup', (e) => {
    clearTimeout(timer);

    const inputValue = e.target.value;
    timer = setTimeout(() => userData(inputValue), 700);
  });
}());
