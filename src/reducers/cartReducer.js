// import { ADD_TO_CART } from './actionTypes/cart-actions';
const initState = {
    pdts: [
        { id: 1, name: "OnePlus 5", imgPath: '../images/1.jpg', price: 37999, category: "Mobile", },
        { id: 2, name: "Moto G5 Plus", imgPath: '../images/2.jpg', price: 13999, category: "Mobile", },
        { id: 3, name: "Nokia 6", imgPath: '../images/3.jpg', price: 14999, category: "Mobile", },
        { id: 4, name: "Samsung Galaxy Note 8",  imgPath: '../images/4.jpg', price: 67900, category: "Mobile", },
        { id: 5, name: "Apple Iphone 8", imgPath: '../images/5.jpg', price: 64000, category: "Mobile", },
        { id: 6, name: "Dell Laptop", imgPath: '../images/6.jpg',  price: 52000, category: "Laptop", },
        { id: 7, name: "Canon DSLR", imgPath: '../images/7.jpg', price: 65000, category: "Camera", },
        { id: 8, name: "HP Printer", imgPath: '../images/8.jpg', price: 4000, category: "Printer", },
        { id: 9, name: "Apple iPad", imgPath: '../images/9.jpg', price: 24900, category: "Tab", },
    ],

    addedItems: []
}

const cartReducer = (state = initState) => {

    // if (action.type === ADD_TO_CART) {
    //     let addedItem = state.items.find(item => item.id === action.id)

    //     let existed_item = state.addedItems.find(item => action.id === item.id)
    //     if (existed_item) {
    //         addedItem.quantity += 1
    //         return {
    //             ...state,
    //         }
    //     }
    //     else {
    //         addedItem.quantity = 1;
    //         return {
    //             ...state,
    //             addedItems: [...state.addedItems, addedItem],
    //         }

    //     }
    // }
    // else {
        return state
    // }
}


export default cartReducer;