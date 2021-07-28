import React, { Component } from 'react';
import Product from '../Product/product.component';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsRequest, loadMoreItemsRequest } from '../../actions/productsActions';
import ReactLoading from 'react-loading';
import "./productdisplay.css"
class ProductDisplay extends Component {

    constructor(props) {
        super(props)
        this.state = {
            page: 0,
            limit: 8,
            searchText: ''
        };
    }

    componentDidMount = () => {
        const { page, limit } = this.state;
        const { products } = this.props;
        if (products.length === 0) {
            this.props.getProducts({ page: page, limit: limit, searchText: this.props.searchText });
        }
        this.setState({ page: this.state.page + 1, searchText: this.props.searchText })
    }

    loadMoreitems = (page, limit) => {
        this.props.loadMoreItems({ page: page, limit: limit, searchText: this.props.searchText });
        this.setState({ page: this.state.page + 1 })
    }

    render() {
        let { products, loading, moreProducts, cartItems } = this.props;
        const { page, limit } = this.state;
        let displayContent;
        if (loading && page === 1)
            displayContent = <div className="topLoader"><ReactLoading type="spinningBubbles" color="rgb(49, 157, 219)" /></div>
        else
            displayContent = <div className="displayProducts">
                {products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        isAuthenticated={this.props.isAuthenticated}
                        isInCart={cartItems.find(item => item.name === product.name)}
                    />
                ))}
                {loading && page > 0 && <div className="bottomLoader"><ReactLoading type="spinningBubbles" color="rgb(49, 157, 219)" /></div>}
                <br />{moreProducts && <button id="loadMoreBtn" onClick={() => this.loadMoreitems(page, limit)}>Load More</button>}
                {!moreProducts && <p>No more products to show at the moment:(</p>}
                <br />
            </div>

        return (displayContent);
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.productsReducer.loading,
        products: state.productsReducer.products,
        moreProducts: state.productsReducer.moreProducts,
        searchText: state.productsReducer.searchText,
        cartItems: state.cartReducer.cartItems,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (data) => { dispatch(getProductsRequest(data)) },
        loadMoreItems: (data) => { dispatch(loadMoreItemsRequest(data)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDisplay));