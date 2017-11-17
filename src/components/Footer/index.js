import React, { Component } from 'react'

export default class Footer extends Component {
	render(){
		return(
			<footer className="page-footer info-color-dark center-on-small-only">

			    <div className="container">
			        <div className="row">

			            <div className="col-md-6">
			                <h5 className="title">blog Reactified</h5>
			                <p>Stay up to date with all things Javascript!</p>
			            </div>

			            <div className="col-md-6">
			                <h5 className="title">Social</h5>
			                <ul>
			                    <li><a href="#!">Twitter</a></li>
			                    <li><a href="#!">Facebook</a></li>
			                    <li><a href="#!">Instagram</a></li>
			                    <li><a href="#!">Google</a></li>
			                </ul>
			            </div>
			        </div>
			    </div>

			    <div className="footer-copyright">
			        <div className="container-fluid">
			            © 2015 Copyright: <a href="#">React Blog</a>

			        </div>
			    </div>

			</footer>
		)
	}
}
