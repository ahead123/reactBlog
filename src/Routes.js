import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

// Our application route
import App from './components/App';

const appRoutes = [
	{
		path: '/',
		component: App
	}
]

class Root extends Component {

	routes = () => {
		const paths = []
		appRoutes.map((item, index) => {
			paths.push(<Route path={item.path} component={item.component} />)
		})
		return paths
	}

	render() {
		return(
			<div>
				{this.routes()}
			</div>
		)
	}
}

// Render App to DOM
render(
	<BrowserRouter>
		<Root />
	</BrowserRouter>, 
	document.getElementById('react-fun')
);
