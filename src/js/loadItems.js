
import data from '../assets/data/items';
import { itemContainer } from '../templates';
export const loadItems = (elemContainer='') => {
    const itemsListContainer = document.querySelectorAll(elemContainer);
    const { items = [] } = data;
    const listContainer = document.createElement('ul');
    listContainer.className = 'items-list';
    let documentFragment = new DocumentFragment();
    items.forEach((item,idx) => {
        documentFragment.appendChild(itemContainer(item,idx))
    });
    listContainer.appendChild(documentFragment);
    itemsListContainer[0].appendChild(listContainer);
}
