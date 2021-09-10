import { getUsersData } from './api'
import './index.css';

(function () {
    const element = document.querySelector('.content');

    const userData = async () => {
        const data = await getUsersData('https://api.github.com/users/pdro-lucas');

        createElement(data)
    }

    function createElement(data) {
        const userNameElement = document.createElement("img");
        userNameElement.setAttribute("src", `${data.avatar_url}`)

        element.appendChild(userNameElement);
    }

    userData()
})();
