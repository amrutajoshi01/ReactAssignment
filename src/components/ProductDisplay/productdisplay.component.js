import React, { Component } from 'react';
import Product from '../Product/product.component';
import { connect } from 'react-redux';
// import { addToCart } from '../../actions/cartActions';
class ProductDisplay extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pdts:[]
        }
    }

    addToCart = (event) => {
        if (this.props.isAuthenticated) {
            console.log('add to cart' + event.target.value);
            this.props.incrementCartCount();
        }
        else {
            alert('please Login to add to cart');
        }
    }

    render() {
        return (
            this.props.pdts.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    addToCart={this.addToCart}
                />
            ))
        );
    }
}

const mapStateToProps = (state) => {
    return {
        pdts: state.pdts
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         addToCart: (id) => { dispatch(addToCart(id)) }
//     }
// }

export default connect(mapStateToProps)(ProductDisplay);