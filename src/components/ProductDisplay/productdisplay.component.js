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
            limit: 12
        };
    }

    componentDidMount = () => {
        const { page, limit } = this.state;
        const { products } = this.props;
        if (products.length === 0)
            this.props.getProducts({ page: page, limit: limit });
    }

    loadMoreitems = (page, limit) => {
        this.setState({ page: this.state.page + 1 })
        this.props.loadMoreItems({ page: page, limit: limit });

    }

    render() {
        let { products, loading } = this.props;
        const { page, limit } = this.state;
        return (
            <div className="displayProducts">
                {loading && page === 0 && <div className="loader"><ReactLoading type="spinningBubbles" color="rgb(49, 157, 219)" /></div>}
                {products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        isAuthenticated={this.props.isAuthenticated}
                    />
                ))}
                {loading && page > 0 && <div className="loader"><ReactLoading type="spinningBubbles" color="rgb(49, 157, 219)" /></div>}
                <br /><button id="loadMoreBtn" onClick={() => this.loadMoreitems(page, limit)}>Load More</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.productsReducer.loading,
        products: state.productsReducer.products,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (data) => { dispatch(getProductsRequest(data)) },
        loadMoreItems: (data) => { dispatch(loadMoreItemsRequest(data)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDisplay));