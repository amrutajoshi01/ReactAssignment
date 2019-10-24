const initState = {
    products: [
        { id: 1, name: "OnePlus 5", imgPath: '../images/1.jpg', price: 37999, category: "Mobile", },
        { id: 2, name: "Moto G5 Plus", imgPath: '../images/2.jpg', price: 13999, category: "Mobile", },
        { id: 3, name: "Nokia 6", imgPath: '../images/3.jpg', price: 14999, category: "Mobile", },
        { id: 4, name: "Samsung Galaxy Note 8", imgPath: '../images/4.jpg', price: 67900, category: "Mobile", },
        { id: 5, name: "Apple Iphone 8", imgPath: '../images/5.jpg', price: 64000, category: "Mobile", },
        { id: 6, name: "Dell Laptop", imgPath: '../images/6.jpg', price: 52000, category: "Laptop", },
        { id: 7, name: "Canon DSLR", imgPath: '../images/7.jpg', price: 65000, category: "Camera", },
        { id: 8, name: "HP Printer", imgPath: '../images/8.jpg', price: 4000, category: "Printer", },
        { id: 9, name: "Apple iPad", imgPath: '../images/9.jpg', price: 24900, category: "Tab", },

        //
        { id: 10, name: "OnePlus 5", imgPath: '../images/1.jpg', price: 37999, category: "Mobile", },
        { id: 11, name: "Moto G5 Plus", imgPath: '../images/2.jpg', price: 13999, category: "Mobile", },
        { id: 12, name: "Nokia 6", imgPath: '../images/3.jpg', price: 14999, category: "Mobile", },
        { id: 13, name: "Samsung Galaxy Note 8", imgPath: '../images/4.jpg', price: 67900, category: "Mobile", },
        { id: 14, name: "Apple Iphone 8", imgPath: '../images/5.jpg', price: 64000, category: "Mobile", },
        { id: 15, name: "Dell Laptop", imgPath: '../images/6.jpg', price: 52000, category: "Laptop", },
        { id: 16, name: "Canon DSLR", imgPath: '../images/7.jpg', price: 65000, category: "Camera", },
        { id: 17, name: "HP Printer", imgPath: '../images/8.jpg', price: 4000, category: "Printer", },
        { id: 18, name: "Apple iPad", imgPath: '../images/9.jpg', price: 24900, category: "Tab", },
    ],
    pageSize: 0,
    cartItems: [],
    cartCount:0
}

const cartReducer = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            let addedItem = state.products.find(product => product.id === action.id)

            let existed_item = state.cartItems.find(product => action.id === product.id)
            if (existed_item) {
                existed_item.quantity += 1
                return {
                    ...state,
                    cartItems: state.cartItems,
                    cartCount: state.cartItems.length,
                }
            }
            else {
                let newItem = Object.assign({}, addedItem);
                newItem.quantity = 1;
                return {
                    ...state,
                    cartItems: [...state.cartItems, newItem],
                    cartCount: state.cartItems.length,
                }
            }
        case 'LOAD_MORE_ITEMS':
            return {
                ...state,
                pageSize: state.pageSize + action.pageSize,
            }

        case 'GET_CART_COUNT':
            return {
                ...state,
                cartCount: state.cartItems.length,
            }

        default: return state;
    }
}

export default cartReducer;