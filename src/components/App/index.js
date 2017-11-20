import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import BlogPostPreview from '../BlogPostPreview';
import Footer from '../Footer';
import Button from '../Button';
import { 
  LOCALHOST_POSTS_ENDPOINT,
  POSTS_ENDPOINT 
} from '../../constants';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentWillMount() {
    axios.get(POSTS_ENDPOINT)
      .then(posts => this.setState({ posts: posts.data }))
      .catch(error => console.log(error))
  }

  getAllPosts = () => {
    const { posts } = this.state;
    const previews = [];
    posts.map((post, index) => {
      const postPath = `/post/${post._id}`;
      previews.push(
        <div className="col-lg-4 col-md-6 mb-4">
          <Link to={postPath}>
            <BlogPostPreview 
              imageURL={post.imageURL}  
              title={post.title} 
              teaser={post.teaser}
              key={post._id} 
            />
          </Link>
        </div>
      )
    })

    return previews
  }

  handleChange = (event) => {
    this.setState({
      value: event.currentTarget.value
    });
    console.log(this.state.value);
  } 

	 render() {
    console.log('this.state',this.state);
    return (
      <div>

       <main className="mt-5">         
          <div className="container">
             
              <div className="row">
                 
                  <div className="col-md-7 mb-4">
                    <div className="view overlay hm-white-light z-depth-1-half">
                      <img 
                        className="img-fluid" 
                        src="https://goo.gl/6aF9ZT"
                      />
                      <div className="mask"></div>
                    </div>
                  </div>                 
                 
                  <div className="col-md-5 mb-4">

                  <h2>Welcome to React Blog!</h2>
                    <hr></hr>
                    <p>
                      A blog built entirely in React JS! 
                      Get the latest news on all the latest Javascript frameworks!
                      React Blog is also a community that allows users to submit
                      content, and blog posts to the site!
                    </p>
                    <Link to="/signup" className="btn btn-info">Subscribe to Newsletter!</Link>

                  </div>                 

              </div>             
             
              <div className="row">
                {this.getAllPosts()}                
              </div>

          </div> 

       </main>
       <Footer />
      </div>
    );
  }
}
