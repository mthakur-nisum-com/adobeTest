
import { operation_type, globalEvents } from '../constants';

export const addItem = (...params) => {
    const [idx,item] = params;
    window.pubsub.publish(globalEvents.addOrRemoveItem,[idx,item,operation_type.add])
}

export const removeItem = (...params) => {
    const [idx,item] = params;
    window.pubsub.publish(globalEvents.addOrRemoveItem,[idx,item,operation_type.remove])
}