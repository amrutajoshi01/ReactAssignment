import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
import MainComponent from './components/MainComponent/mainComponent.component';

ReactDOM.render(
    <Router><MainComponent /></Router>,
    document.getElementById('root')
);

serviceWorker.unregister();
