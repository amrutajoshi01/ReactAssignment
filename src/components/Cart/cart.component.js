import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import "./styles.css";
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: this.props.cartItems.length,
            checkOut: false,
            showAlert:false
        }
    }

    componentDidMount = () => {
        this.props.displayCartCount(this.state.cartCount);
    }

    handleCheckout = () => {
        this.setState({
            checkOut: true,
            showAlert:true
        })
    }

    dissmissAlert = () => {
        this.setState({
            showAlert:false
        })
    }

    render() {
        const { cartItems } = this.props;
        const { cartCount, checkOut, showAlert } = this.state;

        return (
            <div>
                {
                    (cartCount !== 0  && !checkOut) ? (
                        <>
                            {cartItems.map(product => (
                            <div className="product" key={product.id}>
                                <img className="image" src={product.imgPath} alt={product.name} />
                                <p className="name">{product.name}</p>
                                <p className="price">Price: ₹{product.price}</p>
                                <p className="category">Category: {product.category}</p>
                                <p className="quantity">Quantity: {product.quantity}</p>
                            </div>))}
                            <button className="checkout" onClick={this.handleCheckout}>Checkout</button>
                        </>
                        )
                        :
                        (<p id="cartEmpty">Cart is empty</p>)
                }
                
                {
                    showAlert && <Alert><h4 className="alert-heading">Order Confirmed</h4>
                        <p>
                            <button classnname="dismissAlert" onClick={this.dissmissAlert}>X</button>
                            We will get back to you with your order details on your mail.
                        </p>
                    </Alert>
                }
            </div>
        );


    }
}

const mapStateToProps = (state) => {
    return {
        cartItems: state.cartReducer.cartItems
    }
}

export default connect(mapStateToProps)(Cart);