import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import { getOrdersRequest } from '../../actions/ordersActions';
import "./styles.css";
class Orders extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
        this.props.getOrders();
    }

    render() {
        const { orders, loading } = this.props;
        let displayContent;
        if (loading)
            displayContent = <div className="topLoader"><ReactLoading type="spinningBubbles" color="rgb(49, 157, 219)" /></div>
        else
            displayContent =
                <div className="orders">
                    {
                        orders.map(order => (
                            <div className="order" key={order.totalAmount * Math.ceil(Math.random() * 10)}>
                                <h3 className="orderDetails">Order Details</h3>
                                <p className="orderedOn">Ordered on {order.orderedOn}</p>
                                {order.items.map(product => (
                                    <div className="orderItem" key={product.id}>
                                        <img className="image" src={product.imgPath} alt={product.name} />
                                        <div className="info">
                                            <p className="name">{product.name}</p>
                                            <span><p className="category">Category: {product.category}</p> | <p className="quantity">Ouantity: {product.quantity}</p></span>
                                            <p className="price">Price: ₹{product.price}</p>
                                        </div>
                                    </div>
                                ))}
                                <p className="totalAmount">Total  ₹{order.totalAmount}</p>
                            </div>
                        ))
                    }
                </div>
        if (orders.length === 0 && !loading)
            return (<div>No orders yet</div>);
        else
            return (displayContent);
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.ordersReducer.orders,
        loading: state.ordersReducer.loading
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getOrders: () => { dispatch(getOrdersRequest()) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Orders);