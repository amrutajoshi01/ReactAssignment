import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import cartReducer from "./reducers/cartReducer";
import MainComponent from './components/MainComponent/mainComponent.component';

const store = createStore(cartReducer);

ReactDOM.render(
    <Provider store={store}><MainComponent /></Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
