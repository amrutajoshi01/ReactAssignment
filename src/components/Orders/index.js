import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./styles.css";
class Orders extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { cartItems } = this.props;
        return (
            <div>
                {
                    cartItems.map(product => (<div className="product">
                        <img className="image" src={product.imgPath} alt={product.name} />
                        <p className="name">{product.name}</p>
                        <p className="price">Price: ₹{product.price}</p>
                        <p className="category">Category: {product.category}</p>
                    </div>
                    ))
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems,
    }
}

export default connect(mapStateToProps)(Orders);