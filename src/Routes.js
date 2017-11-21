import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

// Our application route
import Nav from './components/Nav';
import App from './components/App';
import SignUp from './components/SignUp';
import BlogPost from './components/BlogPost';
import Register from './components/Register';


const appRoutes = [
	{
		exact: 'exact',
		path: '/',
		component: App
	},
	{
		path: '/signup',
		component: SignUp
	},
	{
		path: '/post/:id',
		component: BlogPost
	},
	{
		path: '/register',
		component: Register
	}
];

class Root extends Component {

	routes = () => {
		const paths = []
		appRoutes.map((item, index) => {
			const exact = item.exact ? item.exact : ''
			paths.push(<Route exact path={item.path} component={item.component} />)
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
		<div>
		 <header>
      <Nav />
     </header>
		 <Root />
		</div>
	</BrowserRouter>, 
	document.getElementById('react-blog')
);
