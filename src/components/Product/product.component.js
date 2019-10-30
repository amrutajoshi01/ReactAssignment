import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addToCartRequest, getCartCount } from '../../actions/cartActions';
import ReactLoading from 'react-loading';
import "./product.css";
class Product extends Component {
    constructor(props) {
        super(props);
    }

    handleClick = (id) => {
        const { isAuthenticated, products } = this.props
        if (isAuthenticated) {
            this.props.addToCart(products.find(product => product.id === id));
            this.props.getCartCount();
        }
        else {
            this.props.history.push('/login');
        }
    }

    render() {
        const { product, loading } = this.props;
        return (
            <div className="product">
                <img className="image" src={product.imgPath} alt={product.name} />
                <p className="name">{product.name}</p>
                <p className="price">Price: ₹{product.price}</p>
                <p className="category">Category: {product.category}</p>
                <button className="add" onClick={() => this.handleClick(product.id)}>Add To Cart <i className="fa fa-cart-plus"></i>
                    {loading && <ReactLoading type="spinningBubbles" width="10px" height="10px" color="black" />}</button>
            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        products: state.productsReducer.products,
        loading: state.cartReducer.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (product) => { dispatch(addToCartRequest(product)) },
        getCartCount: () => { dispatch(getCartCount()) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Product));