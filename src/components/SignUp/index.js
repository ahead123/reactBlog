import React, { Component } from 'react'
import { sendAjaxEmail } from '../../actions/sendAjaxEmail'

export default class SignUp extends Component {

	constructor(props){
		super(props);
		this.state = {
			email: '',
			name: '',
			loading: false
		}
	}

	handleClick = (event) => {
		event.preventDefault()
		const { email, name } = this.state
		if(name!=='' && email!==''){
			this.setState({ loading: true })
			sendAjaxEmail(name, email)
			this.setState({email: '', name: ''})
		} else {
			alert('Please enter both a name and an email')
		}
	}

	render(){
		console.log(this.state)
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
						    <button 
						    	className="btn btn-info"
						    	type="submit"
						    	onClick={this.handleClick}
						    >
						    	Send
						    </button>
						</div>
					</div>
		
			</form>
		)
	}
}