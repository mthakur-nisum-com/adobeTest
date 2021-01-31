
import { formatter, addItem,toastMessage} from '../../js';


const addItemCart =(...params) => {
    addItem(...params,'addToCart');
}
const imageSection = function (item = {}) {
    const {
        name = '',
        discount = 0,
        image = null,
    } = item;

    const imageContainer = document.createElement('div');
    imageContainer.className = 'item-image-tile';
    const discountTag = document.createElement('span');
    discountTag.className = 'item-promotion';
    discountTag.innerText = `${discount}% off`
    const imageTitle = document.createElement('img');
    imageTitle.src = image;
    imageTitle.alt = name;
    imageContainer.appendChild(discountTag);
    imageContainer.appendChild(imageTitle);
    this.appendChild(imageContainer);
}
const itemPriceDetails = function (item = {}, idx) {
    const {
        name = '',
        discount = 0,
        image = null,
        price = {}
    } = item;
    const {
        actual = 0,
        display = 0
    } = price;
    const priceContainer = document.createElement('div');
    priceContainer.className = 'item-price-info left';
    const itemTitle = document.createElement('h6');
    itemTitle.innerText = name;
    const itemActions = document.createElement('div');
    itemActions.className = 'item-actions';

    priceContainer.appendChild(itemTitle);
    if (display) {
        const Price = document.createElement('span');
        Price.className = 'item-regular-price';
        Price.innerText = formatter.format(display);
        priceContainer.appendChild(Price);
    }
    if (actual) {
        const Price = document.createElement('span');
        Price.className = 'item-discounted-price';
        Price.innerText = `${formatter.format(actual)}`;
        priceContainer.appendChild(Price);
    }
    const addToCartBtn = document.createElement('button');
    addToCartBtn.type = 'button';
    addToCartBtn.className = 'add-item-cart-btn right';
    addToCartBtn.innerText = 'Add to Cart';
    addToCartBtn.addEventListener('click', () => addItemCart(idx, item));
    priceContainer.appendChild(addToCartBtn);
    this.appendChild(priceContainer);
}
export const itemDetail = (item = {}, idx) => {
    const {
        name = '',
        discount = 0,
        image = null,
        price = {}
    } = item;
    const {
        actual = 0,
        display = 0
    } = price;
    const itemContainer = document.createElement('div');
    itemContainer.className = 'item-details-sec';
    imageSection.apply(itemContainer, [item, idx]);
    itemPriceDetails.apply(itemContainer, [item, idx]);
    return itemContainer;
}