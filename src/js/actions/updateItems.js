import { globalEvents, operation_type, toast_message } from '../constants';
// import { toastMessage } from '../common/snackBar';


const toastMessage = () => ({
    elemRef : 'snackbar',
    show: function (message = '') {
        const elem = document.getElementById(this.elemRef);
        elem.innerHTML = message;
        elem.className = 'show';
        setTimeout(function () { elem.className = elem.className.replace("show", ""); }, 3000);
    }
})
export const updateItems = (...params) => {
    const [args, cartItems = [], ...rest] = params;
    let messageType = null;
    let cartItemsList = cartItems;
    const [itemIdx = -1, item = {}, operationType = null, ...rst] = args;
    const [actionType] = rst;
    if (itemIdx >= 0 && operationType) {
        if (cartItemsList.length) {
            const cartItemIdx = cartItemsList.findIndex(({ itemId = -1 }) => itemIdx === itemId);
            if (cartItemIdx > -1) {
                if (operationType === operation_type.add) {
                    cartItemsList[cartItemIdx].quantity += 1;
                    messageType = toast_message['changeQuantity'](item.name);
                }
                else {
                    if (cartItemsList.length === 1 && cartItemsList[cartItemIdx].quantity === 1) {
                        cartItemsList.pop();
                        messageType = toast_message.defaultText();
                    }
                    else
                        if (cartItemsList[cartItemIdx].quantity === 1) {
                            cartItemsList.splice(cartItemIdx, 1);
                            messageType = toast_message.removeItem(item.name);
                        }

                        else {
                            cartItemsList[cartItemIdx].quantity -= 1;
                            messageType = toast_message[actionType](item.name);
                        }
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
                    messageType = toast_message[actionType](item.name);
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
                messageType = toast_message[actionType](item.name);
            }

        }
        window.pubsub.publish(globalEvents.updateItem, cartItemsList);
        window.pubsub.publish(globalEvents.updateOrderSummary);
        if(messageType) {
            toastMessage().show(messageType);
        }
    }
}