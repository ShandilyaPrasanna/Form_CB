import React from 'react';
import Reactdom from 'react-dom';
import {Router,Route,hashHistory,IndexRoute} from 'react-router';
import Navbar from './components/Navbar';
import {createStore} from 'redux';
import allReducer from'./reducers/Index';
import {Provider} from 'react-redux';
import AddressForm from './components/AddressForm';
import PersonalInfo from './components/PersonalInfo';   


const store=createStore(allReducer);


class Main extends React.Component{
 render()
{
	return(
		
<div>
<Navbar />
{this.props.children}
</div>

		);
}}


const app=document.getElementById('app');

Reactdom.render(
<Provider store={store}>
<Router history={hashHistory}>
 <Route path="/" component={Main} >
 <Route path="/PersonalInfo" component={PersonalInfo}></Route>
 <Route path="/AddressForm" component={AddressForm}></Route>
 </Route>
</Router>
</Provider>
,app);  
