import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactLoading from 'react-loading';
import "./styles.css";
class Categories extends Component {
    constructor(props) {
        super(props);
    }
    componentDidMount = () => {
    }

    allowDrop = (ev) => {
        ev.preventDefault();
    }

    drag = (ev) => {
        ev.dataTransfer.setData("text", ev.target.id);
    }

    drop = (ev) => {
        ev.preventDefault();
        var data = ev.dataTransfer.getData("text");
        ev.currentTarget.appendChild(document.getElementById(data));
    }

    clickEvent = (ev) => {
        alert(ev.target.id);
    }

    changeColor = (ev) => {
        const x = document.getElementById(ev.target.id);
        x.value = ev.target.value;
    }

    render() {
        const { products } = this.props;
        return (
                <div className="pdts">
                    <div>
                        <input type="color" id="body" name="body" onChange={(event) => this.changeColor(event)}/>
                        <label>Type 1</label>
                    </div>
                    <div className="div1" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}>
                        {
                            products.map(product => (
                                <div draggable="true" id={product.name} onDragStart={(event) => this.drag(event)} 
                                    onClick={(event) => this.clickEvent(event)} className="pdtItem" key={product.id}>
                                    <img className="image" src={product.imgPath} alt={product.name} />
                                </div>
                                    
                            ))
                        }
                    </div>
                    <div className="div2" onDrop={(event) => this.drop(event)} onDragOver={(event) => this.allowDrop(event)}></div>
                </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        products: state.productsReducer.products,
    }
}
export default connect(mapStateToProps)(Categories);