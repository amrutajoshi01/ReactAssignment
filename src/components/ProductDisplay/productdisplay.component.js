import React, { Component } from 'react';
import Product from '../Product/product.component';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getProductsRequest } from '../../actions/productsActions';
import ReactLoading from 'react-loading';
import "./productdisplay.css"
class ProductDisplay extends Component {

    constructor(props) {
        super(props)
        this.state = {
            page: 0,
            limit: 4
        };
    }

    componentDidMount = () => {
        const { page, limit } = this.state;
        this.props.getProducts({ page: page, limit: limit });
        this.setState({page: this.state.page+1})
    }

    loadMoreitems = (page, limit) => {
        this.props.getProducts({ page: page, limit: limit });
        this.setState({page: this.state.page+1})
    }

    render() {
        let { products, loading } = this.props;
        const { page, limit } = this.state;
        return (
            <div className="displayProducts">
                {loading && <ReactLoading type="spinningBubbles" color="lightskyblue" height={50} width={50} />}
                {products.map(product => (
                    <Product
                        key={product.id}
                        product={product}
                        isAuthenticated={this.props.isAuthenticated}
                    />
                ))}
                <br /><button id="loadMoreBtn" onClick={() => this.loadMoreitems(page, limit)}>Load More</button>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        loading: state.cartReducer.loading,
        products: state.cartReducer.products,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProducts: (data) => { dispatch(getProductsRequest(data)) }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ProductDisplay));