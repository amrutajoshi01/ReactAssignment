import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import { checkOutRequest } from '../../actions/cartActions';
import "./styles.css";
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cartCount: this.props.cartItems.length,
            checkOut: false,
            showAlert: false
        }
    }

    componentDidMount = () => {
        this.props.displayCartCount(this.state.cartCount);
    }

    handleCheckout = () => {
        this.props.checkOut();
        this.setState({
            checkOut: true,
            showAlert: true,
        })
        this.props.checkOut();
    }

    dissmissAlert = () => {
        this.setState({
            showAlert: false
        })
    }

    calculateTotalAmount = () => {
        const { cartItems } = this.props;
        let total = 0;
        cartItems.map(product => (
            total += product.quantity * product.price
        ));

        return total;
    }

    render() {
        const { cartItems } = this.props;
        const { cartCount, checkOut, showAlert } = this.state;

        return (
            <div className="cartItems">
                {
                    (cartCount !== 0 && !checkOut) ? (
                        <div>
                            <div className="cartProducts">
                                {cartItems.map(product => (
                                    <div className="product" key={product.id}>
                                        <img className="image" src={product.imgPath} alt={product.name} />
                                        <p className="name">{product.name}</p>
                                        <p className="price">Price: ₹{product.price}</p>
                                        <p className="category">Category: {product.category}</p>
                                        <p className="quantity">Quantity: {product.quantity}</p>
                                    </div>))}
                            </div>
                            <div className="checkOutDetails">
                                {cartItems.map(product => (
                                    <div className="checkOutItem">
                                        <p className="checkOutName">{product.name}</p>
                                        <p className="checkOutQuantity">Quantity: {product.quantity}</p>
                                        <p className="checkOutAmount">Amount: ₹{product.quantity * product.price}</p>
                                    </div>
                                ))}
                                <span><p className="totalAmount">Total Amount: ₹{this.calculateTotalAmount()}</p>
                                    <button className="checkout" onClick={this.handleCheckout}>Checkout</button></span>
                            </div>
                        </div>
                    )
                        :
                        (<p id="cartEmpty">Cart is empty</p>)
                }

                {
                    showAlert && <Alert><h4 className="alert-heading">Order Confirmed</h4>
                        <p>
                            We will get back to you with your order details on your mail.
                            <button classnname="dismissAlert" onClick={this.dissmissAlert}>X</button>

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

const mapDispatchToProps = (dispatch) => {
    return {
        checkOut: () => { dispatch(checkOutRequest()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);