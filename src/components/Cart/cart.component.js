import React, { Component } from 'react';

class Cart extends Component{
    constructor(props){
        super(props);
        this.state ={
            cartCount: 0
        }
    }

    componentDidMount = () =>{
        this.props.displayCartCount(this.state.cartCount);
    }
    
    getCartCount = () =>{
        this.props.displayCartCount(this.state.cartCount);
    }

    render(){
        return(<h1></h1>);
    }
}
export default Cart;