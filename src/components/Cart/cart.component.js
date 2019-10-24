import React, { Component } from 'react';
import { connect } from 'react-redux'
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: this.props.cartItems.length
        }
    }

    componentDidMount = () => {
        this.props.displayCartCount(this.state.cartCount);
    }

    render() {
        // console.log.
        return (
            (this.state.cartCount!==0) ?(this.props.cartItems.map(product => (
                <div className="product" key={product.id}>
                    <img className="image" src={product.imgPath} alt={product.name} />
                    <p className="name">{product.name}</p>
                    <p className="price">Price: ₹{product.price}</p>
                    <p className="category">Category: {product.category}</p>
                    <p className="quantity">Quantity: {product.quantity}</p>
                </div>
            )))
            :
            (<p>Cart is empty</p>)
            
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartItems
    }
}

export default connect(mapStateToProps)(Cart);