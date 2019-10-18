import React, { Component } from 'react';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state ={
            count: 0
        }
    }

    getCartCount = () =>{
        console.log(this.props.cartCountIncrement());
        return this.state.count;
    }
    
    render(){
        return(<h1></h1>);
    }
}
export default Cart;