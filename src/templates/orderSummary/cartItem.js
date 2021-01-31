import { formatter,addItem,removeItem,toastMessage } from '../../js';

const imageItemTile = function (item = {}) {
    const {
        itemDetails={}
    }=item;
    const itemContainer = document.createElement('div');
    itemContainer.className = 'image-tile';
    const imgThumNail = document.createElement('img');
    const itemQuantity = document.createElement('span');
    imgThumNail.src= itemDetails.image;
    imgThumNail.alt= itemDetails.name;
    const itemName = document.createElement('span');
    itemName.className='item-title';
    itemName.innerText=itemDetails.name;
    itemQuantity.innerText = 'X';
    itemContainer.appendChild(imgThumNail);
    itemContainer.appendChild(itemName);
    itemContainer.appendChild(itemQuantity);
    
    this.appendChild(itemContainer);
}

const itemQuantitySec = function(item={}) {
  const {
    quantity=0
  }=item;
  console.log(item);
  const itemContainer = document.createElement('div');
  itemContainer.className='cart-item-quantity';
  const removeItemBtn = document.createElement('button');
  removeItemBtn.innerText='-';
  removeItemBtn.addEventListener('click',() => removeItem(item.itemId,item.itemDetails,'changeQuantity'));
  const itemQuantityInput = document.createElement('input');
  itemQuantityInput.value=quantity;
  const addItemBtn = document.createElement('button');
  addItemBtn.innerText='+';
  addItemBtn.addEventListener('click',() => addItem(item.itemId,item.itemDetails,'changeQuantity'));
  itemContainer.appendChild(removeItemBtn);
  itemContainer.appendChild(itemQuantityInput);
  itemContainer.appendChild(addItemBtn);
  this.appendChild(itemContainer);
}

const itemDetail = function (item = {}) {
    const itemContainer = document.createElement('div');
    itemContainer.className = 'cart-item-container';
    imageItemTile.call(itemContainer, item);
    this.appendChild(itemContainer);
}

const itemPrice = function(item) {
    const {
        itemDetails={},
        quantity=0
    }=item;
    const {
        price={}
    }=itemDetails;
    const {
        actual=0,
        display=0
    }=price;

    const itemContainer  =document.createElement('div');
    itemContainer.className='cart-item-price';
    const itemPrice = actual?actual:display;
    itemContainer.innerText=`${formatter.format(quantity*itemPrice)}`;
    this.appendChild(itemContainer);
}
export const carItem = function (item = {}) {
    const itemContainer = document.createElement('li');
    itemContainer.className = 'card-item';
    itemDetail.call(itemContainer, item);
    itemQuantitySec.call(itemContainer,item);
    itemPrice.call(itemContainer,item);
    this.appendChild(itemContainer);
} 