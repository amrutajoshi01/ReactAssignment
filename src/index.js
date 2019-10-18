import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import MainComponent from './components/MainComponent/mainComponent.component';
ReactDOM.render(
    <MainComponent/>,
    document.getElementById('root')
);

serviceWorker.unregister();
