import React from 'react';
import Reactdom from 'react-dom';
import App from './components/App';
import {createStore} from 'redux';
import allReducer from'./reducers/allReducer';
import {Provider} from 'react-redux'   

const store=createStore(allReducer);


Reactdom.render(
	<Provider store={store}>
    <App />
	</Provider>,
	document.getElementById('app'));