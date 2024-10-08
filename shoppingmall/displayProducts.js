import { addToCart } from "./cart/setupCart.js";
import { formatPrice } from "./utils.js";

const display = (products, element, filters)  => {
    element.innerHTML = products.map((product) => {
        const {id, name, image, price} = product;
        return `
        <article class="product">
        <div class="product-container">
          <img src="${image}" class="product-img img" alt="${name}" />
          <div class="product-icons">
            <a href="product.html?id=${id}" class="product-icon">
              <i class="fa-solid fa-magnifying-glass"></i>
            </a>
            <button class="product-cart-btn product-icon" data-id="${id}">
              <i class="fa-solid fa-cart-shopping"></i>
            </button>
          </div>
        </div>
        <footer>
          <p class="product-name">${name}</p>
          <h4 class="product-price">${formatPrice(price)}</h4>
        </footer>
      </article>
        `
    })
    .join('');

    element.addEventListener('click', (e) => {
        const parent = e.target.parentElement;
        if (parent.classList.contains('product-cart-btn')) {
            addToCart(parent.dataset.id);
        }
    })
}

export default display;