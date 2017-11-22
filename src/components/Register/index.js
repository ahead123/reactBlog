import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { REGISTER_ENDPOINT } from '../../constants';
import FormHeader from '../FormHeader';

export default class Register extends Component {

	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			password: '',
			error: '',
			loading: false,
			formSuccess: false,
			messageName: ''
		}
	}

	validateEmail = (email) => { 
		if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {  
		  return true
		}else {
			return false  
		}    		  
	}

	handleClick = (event) => {
		event.preventDefault()
		const { name, email, password, error, loading } = this.state

		if(name!='' && password!='' && this.validateEmail(email)){
			this.setState({ loading: true })
			console.log('name',name,'email',email,'password',password,'error',error,'loading',loading)
			axios.post(REGISTER_ENDPOINT, { name, email, password })
			.then(response => {
				this.setState({ 
					name: '', 
					email: '', 
					password: '', 
					error: '', 
					formSuccess: true, 
					loading: false, 
					messageName: name 
				})
			})
			.catch(error => console.log(error))
			} else {
				this.setState({ 
					loading: false, 
					error: 'Please make sure you entered a name, a passwrod, and a valid email'
			})
		}

	}

	showHideButton = () => {
		const { messageName } = this.state
		if(this.state.formSuccess && this.state.name==''){
			return(
				<div className="mt-5">
					<div className="animated bounce infinite">
						<h3>{`Thanks for registering ${messageName}!`}</h3>						
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
					Register
				</button>
			)
		}
	}

	render(){
		return(
			<div className="row justify-content-center">
				<form className="mt-5 col-md-5">
					<div className="container">
						
							<FormHeader pageHeader="Register" />

							<div className="md-form mt-5">
							    <input 
							    	type="text" 
							    	id="form3" 
							    	className="form-control"
							    	onChange={event => this.setState({ name:event.target.value, error:'' })}
							    	value={this.state.name} 
							    />
							    <label for="form3">Your name</label>
							</div>

							<div className="md-form">
							    <input 
							    	type="text" 
							    	id="form2" 
							    	className="form-control"
							    	onChange={event => this.setState({ email:event.target.value, error:'' })}
							    	value={this.state.email}  
							    />
							    <label for="form2">Your email</label>
							</div>

							<div className="md-form">
							    <input 
							    	type="password" 
							    	id="form3" 
							    	className="form-control"
							    	onChange={event => this.setState({ password:event.target.value, error:'' })}
							    	value={this.state.password}  
							    />
							    <label for="form3">Password</label>
							</div>
							<h5 className="text-danger"><strong>{this.state.error}</strong></h5>

							<div className="text-center">						 
								{this.showHideButton()}
							</div>
						</div>			
				</form>
			</div>
		)
	}

}