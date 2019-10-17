import React, { Component } from 'react';
import "./product.css";
import Cart from "../Cart/cart.component";
class Product extends Component {
    constructor(props) {
        super(props);
    }

    addToCart = (event) => {

    }

    render() {
        const product = this.props.product;
        console.log(product);
        return (
            <div className="product">
                <img className="image" src={product.imgPath} alt={product.name} />
                <p className="name">{product.name}</p>
                <p className="price">Price: ₹{product.price}</p>
                <p className="category">Category: {product.category}</p>
                <button className="add">Add To Cart <i className="fa fa-cart-plus" onClick={this.addToCart}></i></button>
            </div>
        );
    }
}

export default Product;