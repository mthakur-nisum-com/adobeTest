import { itemDetail } from './item';

export const itemContainer = (item = {},idx=-1) => {
    const elemContainer = document.createElement('li');
    elemContainer.className = 'item-tile';
    const itemContainer = itemDetail(item,idx);
    elemContainer.appendChild(itemContainer);
    return elemContainer;
}