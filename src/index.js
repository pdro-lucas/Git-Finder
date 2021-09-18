import { getUsersData } from './api';
import './index.css';

(function () {
  const element = document.querySelector('.content');

  const userData = async () => {
    const data = await getUsersData('reactjs');

    createElement(data);
  };

  function createElement(data) {
    const userNameElement = document.createElement('a');
    userNameElement.innerHTML = "Pedro Lucas Github"
    userNameElement.setAttribute('href', `${data.html_url}`);

    element.appendChild(userNameElement);
  }

  userData();
})();
