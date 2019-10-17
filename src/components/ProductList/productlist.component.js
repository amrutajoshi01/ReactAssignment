import React, { Component } from 'react';
import Product from '../Product/product.component'

class ProductList extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                {
                    this.props.pdts.map(product => (
                        <Product
                            key={product.id}
                            product={product} />
                    ))
                }
            </div>
        );
    }
}

ProductList.defaultProps = {
    products: []
};
export default ProductList;