import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCartRequest,getCartCount } from '../../actions/cartActions';
import "./product.css";
class Product extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (id) => {
        if(this.props.isAuthenticated){
            this.props.addToCart(id);
            this.props.getCartCount();
        }
        else{
            this.props.history.push('/login');
        }
    }

    render() {
        const product = this.props.product;
        return (
            <div className="product">
                <img className="image" src={product.imgPath} alt={product.name} />
                <p className="name">{product.name}</p>
                <p className="price">Price: ₹{product.price}</p>
                <p className="category">Category: {product.category}</p>
                <button className="add" onClick={() => this.handleClick(product.id)}>Add To Cart <i className="fa fa-cart-plus"></i></button>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => { dispatch(addToCartRequest(id)) },
        getCartCount: () => { dispatch(getCartCount()) }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(Product));