import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import "./product.css";
class Product extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (event) => {
        this.props.addToCart(event);
    }

    render() {
        const product = this.props.product;
        return (
            <div className="product">
                <img className="image" src={product.imgPath} alt={product.name} />
                <p className="name">{product.name}</p>
                <p className="price">Price: ₹{product.price}</p>
                <p className="category">Category: {product.category}</p>
                <button className="add" onClick={this.handleClick}>Add To Cart <i className="fa fa-cart-plus"></i></button>
            </div>
        );
    }
}

export default withRouter(Product);