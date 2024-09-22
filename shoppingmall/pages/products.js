import display from "../displayProducts.js";
import fetchProducts from "../fetchProducts.js";
import setupCompanies from "../filters/companies.js";
import setupPrice from "../filters/price.js";
import setupSearch from "../filters/search.js";
import { setupStore, store } from "../store.js";
import { getElement } from "../utils.js"
import '../cart/toggleCart.js';
import '../toggleSidebar.js';
import '../cart/setupCart.js'

const init = async () => {
   const loadingEl = getElement('.page-loading');
   loadingEl.style.display = 'none';

   //상품 데이터 가져오기
   const products = await fetchProducts();
   setupStore(products);

   //상품들을 보여주기
   display(products, getElement('.products-container'));

    setupSearch(store);
    setupCompanies(store);
    setupPrice(store);
   
}

init();



