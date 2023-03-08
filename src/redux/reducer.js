import { ADD_TO_CART, EMPTY_TO_CART, REMOVE_TO_CART } from "./constant";

export const cartData = (data = [], action) => {
    switch(action.type) {
        case ADD_TO_CART:
            console.warn('add to cart condition: ', action)
            return [action.data, ...data];
        
        case REMOVE_TO_CART:
            console.warn("REMOVE_FROM_CART condition ", action);
            const filteredItems = data.filter(item => item.id !== action.data)
            return [...filteredItems];
        case EMPTY_TO_CART:
            console.warn("EMPTY CART condition ", action);
            data =[]
            return [...data]

        default:
            return data
    }
}