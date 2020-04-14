import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {featuresReducer} from './reducers/featuresReducer';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';


//Step 1- create redux store and connect it to our React app
const store = createStore(featuresReducer);
// console.log('current state:'), store.getState());

const rootElement = document.getElementById('root');
ReactDOM.render(
        <Provider store ={store}>
            <App />
        </Provider>,
    rootElement
);


