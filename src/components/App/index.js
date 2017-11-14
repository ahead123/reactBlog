import React, { Component } from 'react';
import Nav from '../Nav'
import Footer from '../Footer'
import BlogPostPreview from '../BlogPostPreview'
import { mockStoryData } from '../../mockStoryData'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    this.setState({ posts: mockStoryData })
  }

  getAllPosts = () => {
    const { posts } = this.state
    const previews = []
    posts.map((item, index) => {
      previews.push(<div className="col-lg-4 col-md-6 mb-4"><BlogPostPreview imageURL={item.imageURL}  title={item.title} teaser={item.teaser} /></div>)
    })

    return previews
  }

  handleChange = (event) => {
    this.setState({
      value: event.currentTarget.value
    })
    console.log(this.state.value)
  }

	 render() {
    console.log('mockStoryData',mockStoryData)
    console.log('this.state',this.state)
    return (
      <div>

       <header>
         <Nav />
       </header>

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
                    <a href="#" className="btn btn-info">Sign up now!</a>

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
