import React, { Component } from 'react';
import data from '../data'
import Product from '../Product/product.component'

class ProductDisplay extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pdts: data,
        }
    }

    addToCart = (event) => {
        if(this.props.isAuthenticated){
            console.log('add to cart' + event.target.value);
            this.props.incrementCartCount();
        }
        else{
            alert('please Login to add to cart');
        }
    }

    render() {
        return (
            // <div>
            //     {
            this.state.pdts.map(product => (
                <Product
                    key={product.id}
                    product={product}
                    addToCart={this.addToCart}
                />
            ))
            //     }
            // </div>
        );
    }
}

export default ProductDisplay;