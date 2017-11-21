import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './BlogPost.css';
import { POSTS_ENDPOINT } from '../../constants';

export default class BlogPost extends Component {

	constructor(props){
		super(props);
		this.state = {
			blogPosts: [],
			postIndex: null
		}
	}

	componentWillMount(){
		let postIndex=0;
		const { id } = this.props.match.params
		console.log('this.props',this.props)
		axios.get(POSTS_ENDPOINT)
      .then(posts => {
      	 this.setState({ blogPosts: posts.data })
      	 this.state.blogPosts.forEach((post, index) => {      	 	
      	 	if(post._id == id){      	 		
      	 		this.setState({ postIndex: index })
      	 	}
      	 })
      })
      .catch(error => console.log(error))
	}

	componentDidMount(){
		console.log('did mount',this.state.blogPosts)
	}

	showBlogPost = () => {
		if(this.state.postIndex!=null){
			const { imageURL, title, teaser } = this.state.blogPosts[this.state.postIndex]
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
		}else{
			return(
				<p>Sorry that article doesn't exist</p>
			)
		}
	}

	render(){
		console.log(this.state)
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