import { orderSummary, carItem } from '../../templates';

const cartItemList = document.createElement('ul');
cartItemList.className = 'cart-item-list';

export const updateOrderSummary = (items = [],elem) => {
    const element = document.querySelectorAll('.cart-items-sec');
    const orderSummaryElem = document.querySelectorAll('.order-summary-sec');
    const itemListFragment = new DocumentFragment();
    element[0].innerText='';
    orderSummaryElem[0].innerText='';
    const rootElem = document.querySelectorAll(elem);
    if (items.length) {
        items.forEach((item) => {
            carItem.call(itemListFragment, item);
        });
        cartItemList.replaceChildren(itemListFragment);
        element[0].appendChild(cartItemList);
        orderSummary.call(orderSummaryElem[0], items);
        rootElem[0].className='order-summary-container';
    }
    else {
        rootElem[0].className='order-summary-container hide';
    }
}