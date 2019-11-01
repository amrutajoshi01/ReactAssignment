import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Alert } from 'reactstrap';
import ReactLoading from 'react-loading';
import { checkOutRequest } from '../../actions/cartActions';
import "./styles.css";
class Cart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            checkOut: false,
            showAlert: false
        }
    }

    componentDidMount = () => {
        this.props.displayCartCount(this.props.cartItems.length);
    }

    handleCheckout = () => {
        const { cartItems, loading } = this.props;
        let totalAmount = 0;
        for (var product of cartItems) {
            totalAmount += product.quantity * product.price
        }

        let order = {
            orderedOn: new Date().toLocaleDateString(),
            items: cartItems,
            totalAmount: totalAmount
        }
        this.props.checkOut({ cartItems, order });
        if (!loading)
            this.setState({
                checkOut: true,
                showAlert: true,
            });
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
        const { cartItems, loading } = this.props;
        const { checkOut, showAlert } = this.state;
        let cartCount = cartItems.length;
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
                                    <div className="checkOutItem" key={product.id} >
                                        <p className="checkOutName">{product.name}</p>
                                        <p className="checkOutQuantity">Quantity: {product.quantity}</p>
                                        <p className="checkOutAmount">Amount: ₹{product.quantity * product.price}</p>
                                    </div>
                                ))}
                                <span><p className="totalAmount">Total Amount: ₹{this.calculateTotalAmount()}</p>
                                    <button className="checkout" onClick={this.handleCheckout}>Checkout</button>
                                    {loading && <div className="checkOutLoader"><ReactLoading type="spinningBubbles" height="30px" width="30px" color="black" /></div>}
                                </span>
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
        cartItems: state.cartReducer.cartItems,
        loading: state.cartReducer.loading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        checkOut: (data) => { dispatch(checkOutRequest(data)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);