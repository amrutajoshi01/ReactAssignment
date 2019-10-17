import React, { Component } from 'react';
import ProductList from '../ProductList/productlist.component'
import data from '../data'

class ProductDisplay extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pdts: data,
        }
    }

    render() {
        return (

            <div>
                <ProductList pdts={this.state.pdts} > </ProductList>
            </div>

        );
    }
}

export default ProductDisplay;