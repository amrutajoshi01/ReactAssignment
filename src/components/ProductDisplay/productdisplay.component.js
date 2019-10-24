import React, { Component } from 'react';
import Product from '../Product/product.component';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadMoreItems } from '../../actions/cartActions';
import "./productdisplay.css"
class ProductDisplay extends Component {

    constructor(props) {
        super(props)
        this.state = {
            pageSize: 8
        };
    }

    componentWillMount = () =>{
        this.props.loadMoreItems(this.state.pageSize);
    }

    loadMoreItems = () => {
        this.props.loadMoreItems(this.state.pageSize);
    }

    render() {
        let products = this.props.products;
        products = products.slice(0, this.props.pageSize);
        return (
            <div className="displayProducts">
                {products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        isAuthenticated={this.props.isAuthenticated}
                        incrementCartCount={this.props.incrementCartCount}
                    />
                ))}
                <br/><button id="loadMoreBtn" onClick={this.loadMoreItems}>Load More</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.products,
        pageSize: state.pageSize
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        loadMoreItems: (pageSize) => { dispatch(loadMoreItems(pageSize)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDisplay));