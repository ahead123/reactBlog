import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { mockStoryData } from '../../mockStoryData'
import './BlogPost.css'

export default class BlogPost extends Component {

	constructor(props){
		super(props);
		this.state = {
			blogPost: []
		}
	}

	componentWillMount(){
		const { id } = this.props.match.params
		this.setState({
			blogPost: mockStoryData[id-1]
		})
	}

	componentDidMount(){
		console.log('did mount',this.state.blogPost)
	}

	showBlogPost = () => {
		const { blogPost: { imageURL, title, teaser } } = this.state
		return(
			<div className="container">
				<div className="row">
				<div className="col-md-7 mb-4">
		      <div className="view overlay hm-white-light z-depth-1-half">
		        <img className="img-fluid" src={imageURL}/>
		         	<div className="mask"></div>
		      </div>
		    </div>                              
		    <div className="col-md-5 mb-4">
		    	<h2>{title}</h2>
		      <hr></hr>
		      <p>{teaser}</p>
		    </div>
		    </div>   
			</div>
		)
	}

	render(){
		return(
			  <main className="mt-5">         
          <div className="container">             
              <div className="row">
                {this.showBlogPost()}       
              </div>
              <hr></hr>
              <Link className="btn btn-info" to="/">Back</Link>           
          </div> 
       </main>
		)
	}
}