import { formatter } from '../../js';

const itemTotalElem = function (itemList = []) {
    let amount = 0;
    const itemTotalCotainer = document.createElement('li');
    const itemsText = document.createElement('span');
    const itemAmount = document.createElement('span');
    itemsText.innerText = `Items(${itemList.length})`;
    itemList.forEach((item)=> {
       const {
           itemDetails={},
           quantity=0
       }=item;
       const {
           price={}
       }=itemDetails;
       const {
           actual=0,display=0
       }= price;
       amount+=(quantity*display);
    })
    itemAmount.innerText = `${formatter.format(amount)}`
    itemTotalCotainer.appendChild(itemsText);
    itemTotalCotainer.appendChild(itemAmount);
    this.appendChild(itemTotalCotainer);
}

const calculateItemDiscount = function(itemList=[]) {
    let amount=0;
    let discountContainer = document.createElement('li');
    let itemsDiscountText = document.createElement('span');
    itemsDiscountText.innerText='Discount';
    let itemDiscount = document.createElement('span');
    itemList.forEach((item) => {
        const {
            quantity=0,
            itemDetails={}
        }=item;
        const {
            price={}
        }=itemDetails;
        const {
            actual=0,
            display=0
        }=price;
        amount+=(actual*quantity);
    });
    itemDiscount.innerText=`-${formatter.format(amount)}`;
    discountContainer.appendChild(itemsDiscountText);
    discountContainer.appendChild(itemDiscount);
    this.appendChild(discountContainer);
    discountContainer = document.createElement('li');
    itemsDiscountText = document.createElement('span');
    itemsDiscountText.innerText='Type Discount';
    itemDiscount = document.createElement('span');
    itemDiscount.innerText=`-${formatter.format(0)}`;
    discountContainer.appendChild(itemsDiscountText);
    discountContainer.appendChild(itemDiscount);
    this.appendChild(discountContainer);

};

const calculateOrderTotal = function(itemList=[]) {
    const itemContainer = document.createElement('li');
    const itemText = document.createElement('span');
    itemText.innerText='Order Total';
    const itemTotal = document.createElement('span');
    let amount=0;
    itemList.forEach((item) => {
        const {
            quantity=0,
            itemDetails={}
        }=item;
        const {
            price={}
        }=itemDetails;
        const {
            actual=0,
            display=0
        }=price;
        amount+=(quantity*actual);
    })
    itemTotal.innerText=`${formatter.format(amount)}`;
    itemContainer.appendChild(itemText);
    itemContainer.appendChild(itemTotal);
    this.appendChild(itemContainer);
}

export const orderSummary = function (itemList = []) {
    const orderSummarySec = document.querySelectorAll('.order-summary-sec');
    const orderSummarDetails = document.createElement('ul');
    const totalTextElem = document.createElement('li');
    totalTextElem.innerText = 'Total';
    orderSummarDetails.appendChild(totalTextElem);
    itemTotalElem.call(orderSummarDetails, itemList);
    calculateItemDiscount.call(orderSummarDetails,itemList);
    calculateOrderTotal.call(orderSummarDetails,itemList);
    orderSummarySec[0].replaceChildren(orderSummarDetails);
   
}