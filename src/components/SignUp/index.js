import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { 
  LOCALHOST_SUBSCRIBE_ENDPOINT,
  SUBSCRIBE_ENDPOINT 
} from '../../constants';

export default class SignUp extends Component {

	constructor(props){
		super(props);
		this.state = {
			email: '',
			name: '',
			loading: false,
			formSuccess: false,
			messageName: ''
		}
	}

	handleClick = (event) => {
		event.preventDefault()
		const { email, name } = this.state
		if(name!=='' && email!==''){
			this.setState({ loading: true, messageName: name })
			this.sendAjaxEmail(name, email)
			this.setState({ email: '', name: '' })
		} else {
			alert('Please enter both a name and an email')
		}
	}

	sendAjaxEmail = (name, email) => {
		emailjs.send("sendgrid","template_9TNqSx99",
			{ 
				to_name: name, 
				message_html: email, 
				from_name: 'reactBlog', 
				to_email: email 
			}
		).then(response => { 
				console.log(response.status, response.text) 
				if(response.status == 200){
					this.setState({ loading: false, formSuccess: true })			
				}
			}, err => { 
				console.log("FAILED. error=", err) 
			}
		)
		axios.post(`${SUBSCRIBE_ENDPOINT}?name=${name}&email=${email}`)
		.then(response => console.log(response))
		.catch(error => console.log(error))
	}

	showHideButton = () => {
		const { messageName } = this.state
		if(this.state.formSuccess && this.state.name==''){
			return(
				<div className="mt-5">
					<div className="animated bounce infinite">
						<h3>{`Thanks for subscribing ${messageName}!`}</h3>
						<p>We've sent a cofirmation to your email.</p>
					</div>					
					<Link to="/" className="btn btn-success">Home</Link>	
				</div>		
			)
		}else{
			return(
				<button 
					className="btn btn-info"
					type="submit"
					onClick={this.handleClick}
				>
					Send
				</button>
			)
		}
	}

	render(){
		console.log(this.state)
		if(this.state.loading){
			return (
				<div className="mt-5">
					<div className="container">						
						<h3 className="h5 text-center mb-4">Checking Email....</h3>
					</div>
				</div>
			)
		} else { 
			return(
				<form className="mt-5">
					<div className="container">
						
							<p className="h5 text-center mb-4">Subscribe</p>

							<div className="md-form">
							    <input 
							    	type="text" 
							    	id="form3" 
							    	className="form-control"
							    	onChange={event => this.setState({ name:event.target.value })}
							    	value={this.state.name} 
							    />
							    <label for="form3">Your name</label>
							</div>

							<div className="md-form">
							    <input 
							    	type="text" 
							    	id="form2" 
							    	className="form-control"
							    	onChange={event => this.setState({ email:event.target.value })}
							    	value={this.state.email}  
							    />
							    <label for="form2">Your email</label>
							</div>

							<div className="text-center">
							    {this.showHideButton()}
							</div>
						</div>
			
				</form>
			)
		}
	}
}