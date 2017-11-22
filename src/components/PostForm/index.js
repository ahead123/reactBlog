import React, { Component } from 'react';
import FormHeader from '../FormHeader';

export default class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
		return(
			<div className="row mt-5 justify-content-center">
				<form className="col-md-5">

			    <FormHeader pageHeader="Create New Blog Post" />

			    <div className="md-form mt-5">			        
			        <input type="text" id="defaultForm-title" className="form-control" />
			        <label for="defaultForm-title">Blog post title</label>
			    </div>

			    <div className="md-form">
			        <input type="password" id="defaultForm-pass" className="form-control" />
			        <label for="defaultForm-pass">Blog post author</label>
			    </div>

			    <div className="md-form">
			        <input type="text" id="defaultForm-img" className="form-control" />
			        <label for="defaultForm-img">Blog post image URL</label>
			    </div>

			    <div className="md-form">
			        <textarea type="text" id="defaultForm-story" style={{ minHeight: 200 }} className="form-control"></textarea>
			        <label for="defaultForm-story" style={{marginLeft: 5}}>Blog post teaser</label>
			    </div>

			    <div className="text-center">
			        <button className="btn info-color">Submit Post</button>
			    </div>
				</form>
			</div>
		)
	}

}