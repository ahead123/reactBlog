import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import FormHeader from '../FormHeader';
import axios from 'axios';
import { POSTS_ENDPOINT } from '../../constants';

export default class PostForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			author: '',
			imageURL: '',
			teaser: '',
			error: '',
			loading: false,
			success: false,
			message: ''
		}
	}

	handleClick = (event) => {
		event.preventDefault()
		const { title, author, imageURL, teaser, error, loading, success } = this.state
		if(title!='' && author != '' && imageURL != '' && teaser != ''){
			this.setState({ loading: true })
			axios.post(POSTS_ENDPOINT, { title, author, imageURL, teaser })
			.then(response => {
				console.log(response)
				this.setState({
					title: '',
					author: '',
					imageURL: '',
					teaser: '',
					error: '',
					loading: false,
					success: true,
					message: title
				})
			})
			.catch(error => {
				console.log(error)
				this.setState({ loading: false, error, success: false  })
			})	
		}	else {
			this.setState({ 
				error: 'Please ensure all fields are completed before submitting' 
			})
		}
	}

	showHideButton = () => {
		const { message } = this.state
		if(this.state.success && this.state.title == ''){
			return(
				<div className="mt-5">
					<div className="animated bounce infinite">
						<h3>{`Your post titled: "${message}" has been successfully submitted!`}</h3>						
					</div>					
					<Link to="/" className="btn btn-success">Home</Link>	
				</div>	
			)
		} else {
			return(
				<button 
	      	className="btn info-color"
	      	onClick={this.handleClick}
	      >
	      	Submit Post
      </button>
			)
		}
	}

	render() {
		return(
			<div className="row mt-5 justify-content-center">
				<form className="col-md-5">

			    <FormHeader pageHeader="Create New Blog Post" />

			    <div className="md-form mt-5">			        
			        <input 
			        	type="text" 
			        	id="defaultForm-title" 
			        	className="form-control"
			        	onChange={event => this.setState({ title: event.target.value, error: ''})}
			        	value={this.state.title} 
			        />
			        <label for="defaultForm-title">Title</label>
			    </div>

			    <div className="md-form">
			        <input 
			        	type="text" 
			        	id="defaultForm-auth" 
			        	className="form-control"
			        	onChange={event => this.setState({ author: event.target.value, error: ''})}
			        	value={this.state.author} 
			        />
			        <label for="defaultForm-auth">Author</label>
			    </div>

			    <div className="md-form">
			        <input 
			        	type="text" 
			        	id="defaultForm-imageurl" 
			        	className="form-control"
			        	onChange={event => this.setState({ imageURL: event.target.value, error: ''})}
			        	value={this.state.imageURL} 
			        />
			        <label for="defaultForm-imageurl">Image URL</label>
			    </div>

			    <div className="md-form">
			        <textarea 
			        	type="text" 
			        	id="defaultForm-story" 
			        	style={{ minHeight: 200 }} 
			        	className="form-control"
			        	onChange={event => this.setState({ teaser: event.target.value, error: ''})}
			        >
			        </textarea>
			        <label for="defaultForm-story" style={{marginLeft: 5}}>Teaser</label>
			    </div>

			    <h5 className="text-danger"><strong>{this.state.error}</strong></h5>

			    <div className="text-center">
			        {this.showHideButton()}
			    </div>
				</form>
			</div>
		)
	}

}