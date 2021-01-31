import { globalEvents, operation_type } from '../constants';

export const updateItems = (...params) => {
    const [args, cartItems = []] = params;
    let cartItemsList = cartItems;
    const [itemIdx = -1, item = {}, operationType = null] = args;
    if (itemIdx >= 0 && operationType) {
        if (cartItemsList.length) {
            const cartItemIdx = cartItemsList.findIndex(({ itemId = -1 }) => itemIdx === itemId);
            if (cartItemIdx > -1) {
                if (operationType === operation_type.add)
                    cartItemsList[cartItemIdx].quantity += 1;
                else {
                    if (cartItemsList.length === 1 && cartItemsList[cartItemIdx].quantity === 1) {
                        cartItemsList.pop();
                    }
                    else
                        if (cartItemsList[cartItemIdx].quantity === 1) 
                            cartItemsList.splice(cartItemIdx,1);
                        else
                            cartItemsList[cartItemIdx].quantity -= 1;
                }

            }
            else {
                if (operationType === operation_type.add) {
                    cartItemsList.push({
                        itemId: itemIdx,
                        itemDetails: {
                            ...item
                        },
                        quantity: 1
                    })
                }
            }
        }
        else {
            if (operation_type.add === operationType) {
                cartItemsList.push({
                    itemId: itemIdx,
                    itemDetails: {
                        ...item
                    },
                    quantity: 1
                })
            }

        }
        window.pubsub.publish(globalEvents.updateItem, cartItemsList);
        window.pubsub.publish(globalEvents.updateOrderSummary);
    }
}