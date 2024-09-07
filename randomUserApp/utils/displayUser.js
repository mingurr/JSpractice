import getElement from "./getElement.js";
import removeActive from "./removeActive.js";

const userImage = getElement('.user-img');
const title = getElement('.user-title');
const value = getElement('.user-value');
const icons = [...document.querySelectorAll('.icon')]; //유사배열이기때문에 꼭 배열로 변환 해줄것


const displayUser = (person) => {
    userImage.src = person.image;
    value.textContent = person.name;
    title.textContent = 'My name is';
    removeActive(icons);
    
    icons.forEach((btn) => {
        const label = btn.dataset.label;
        btn.addEventListener('click', () => {
            title.textContent = `My ${label} is`;
            value.textContent = person[label]
            removeActive(icons);
            btn.classList.add('active');
        })
    })
}

export default displayUser;
