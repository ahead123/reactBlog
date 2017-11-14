import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Nav extends Component {
	render() {
		return(
			<nav className="navbar navbar-expand-lg navbar-dark info-color-dark">
				<div className="container">
			    <Link className="navbar-brand" to="/">React Blog</Link>

			    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
			        aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>

			    <div className="collapse navbar-collapse" id="navbarSupportedContent">

			        <ul className="navbar-nav mr-auto">
			            <li className="nav-item active">
			              <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
			            </li>
			            <li className="nav-item">
			              <a className="nav-link" href="#">Blog Posts</a>
			            </li>			            
			            <li className="nav-item">
			            	<Link className="nav-link" to="/signup">Sign Up</Link>
			            </li>
			        </ul>

			        <form className="form-inline">
			            <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
			        </form>
			    </div>
			  </div>
			</nav>
		)
	}
}