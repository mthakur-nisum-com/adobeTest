
import { operation_type, globalEvents } from '../constants';

export const addItem = (...params) => {
    const [idx,item,actionType] = params;
    window.pubsub.publish(globalEvents.addOrRemoveItem,[idx,item,operation_type.add,actionType])
}

export const removeItem = (...params) => {
    const [idx,item,actionType] = params;
    window.pubsub.publish(globalEvents.addOrRemoveItem,[idx,item,operation_type.remove,actionType])
}