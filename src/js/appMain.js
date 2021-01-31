import events from './common/eventListener';
import { globalEvents } from './constants';
import { loadItems } from './loadItems';
import { updateOrderSummary, updateItems } from './actions';
export const initApp = () => {
    let cartItems = [];
    const pubsub =events();
    window.pubsub = pubsub;
    window.pubsub.subscribe(globalEvents.loadItems, loadItems);
    window.pubsub.subscribe(globalEvents.updateItem, (items = []) => cartItems = items);
    window.pubsub.subscribe(globalEvents.addOrRemoveItem, (...params)=>  updateItems(...params,cartItems));
    window.pubsub.subscribe(globalEvents.updateOrderSummary, ()=> updateOrderSummary(cartItems,'.order-summary-container'))
    window.pubsub.publish(globalEvents.loadItems, '.item-list-container');
}