import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCartRequest, getCartCount } from '../../actions/cartActions';
// import ReactLoading from 'react-loading';
import "./product.css";
class Product extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (id, event) => {
        event.target.innerText = "Added To Cart"
        event.target.disabled = true;
        const { isAuthenticated, products } = this.props
        if (isAuthenticated) {
            this.props.addToCart(products.find(product => product.id === id));
            this.props.getCartCount();
        }
        else {
            this.props.history.push('/login');
        }
    }

    getQuantity = () => {
        const { cartItems } = this.props;
        let quantity = 0;
      
    }

    render() {
        const { product } = this.props;
        return (
            <div className="product">
                <img className="image" src={product.imgPath} alt={product.name} />
                <p className="name">{product.name}</p>
                <p className="price">Price: ₹{product.price}</p>
                <p className="category">Category: {product.category}</p>
                <button className="add" onClick={(event) => this.handleClick(product.id, event)}>Add To Cart <i className="fa fa-cart-plus"></i></button><br />
                {/* <button className="plus">+</button>
                {() => this.getQuantity(product.id)}
                <button className="minus">-</button> */}
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productsReducer.products,
        loading: state.cartReducer.loading,
        cartItems: state.cartReducer.cartItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => { dispatch(addToCartRequest(product)) },
        getCartCount: () => { dispatch(getCartCount()) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));