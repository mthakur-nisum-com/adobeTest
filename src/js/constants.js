export const globalEvents = {
    loadItems:'loadItems',
    updateItem:'updateItem',
    addOrRemoveItem:'addOrRemoveItem',
    updateOrderSummary:'updateOrderSummary'
}

export const operation_type= {
    add:'add',
    remove:'remove'
}

export const formatter= new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  
    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

export const toast_message= {
    addToCart:(itemName='') => `${itemName} is added to cart`,
    changeQuantity:(itemName='') =>`${itemName} item quantity is updated`,
    removeItem: (itemName='') => `${itemName} has removed from your cart`,
    defaultText:() => 'Your Cart is empty'
}