import React, { Component } from 'react';
import { connect } from 'react-redux'
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: 0
        }
    }

    componentDidMount = () => {
        this.props.displayCartCount(this.state.cartCount);
    }

    getCartCount = () => {
        this.props.displayCartCount(this.state.cartCount);
    }

    render() {
        return (
            this.state.pdts.map(product => (
                <div className="product">
                    <img className="image" src={product.imgPath} alt={product.name} />
                    <p className="name">{product.name}</p>
                    <p className="price">Price: ₹{product.price}</p>
                    <p className="category">Category: {product.category}</p>
                </div>
            ))

        );
    }
}

const mapStateToProps = (state) => {
    return {
        pdts: state.addedItems
    }
}

export default connect(mapStateToProps)(Cart);