import displayUser from "./utils/displayUser.js";
import getUser from "./utils/fetchUser.js";
import getElement from "./utils/getElement.js";

const randomBtn = getElement('.btn');



const showUser = async () => {
    const person = await getUser();
    displayUser(person);
}

randomBtn.addEventListener('click', showUser);


window.addEventListener('DOMContentLoaded', showUser)