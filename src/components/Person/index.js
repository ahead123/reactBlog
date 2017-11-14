import React, { Component } from 'react'

export default class Person extends Component {

	constructor(props) {
		super(props);
		this.state = {
			name: '',
			userNames: []
		}
	}

	componentWillReceiveProps(nextProps) {	
		this.setState({ name: nextProps.name})
		console.log('nextProps inside will receive props', nextProps)
		console.log('this.props inside will receive props', this.props)				
	}

	handleClick = (event) => {
		event.preventDefault()
		const userNames = [...this.state.userNames, this.state.name]
		console.log('usernames',userNames)
		this.setState({ userNames, name: '' })
	}

	showUsers = () => {
		const { userNames } = this.state
		let users = []
		if(userNames.length) {
			userNames.map((item, index) => {
				users.push(<p>{item}</p>)
			})
		}

		return users 
	}

	render() {
		console.log('this.props inside Person',this.props)
		console.log('this.state inside Person',this.state)
		const { userNames } = this.state
		return(
			<div>
				<p>{this.state.name}</p>
				<button
					type="button" 
					onClick={this.handleClick}
				>
					Save user
				</button>
				<div>{this.showUsers()}</div>
			</div>
		)
	}
}