import React from 'react'

const BlogPostPreview = ({ imageURL, title, teaser }) => {
	return(

      <div className="card">

          <div className="view overlay hm-white-slight">
              <img src={imageURL} className="img-fluid" alt="" />
              <a href="#">
                  <div className="mask"></div>
              </a>
          </div>

          <div className="card-body">
              <h4 className="card-title">{ title }</h4>
              <p className="card-text">{ teaser }</p>
              <a href="#" className="btn btn-info">Read More</a>
          </div>

      </div>
	)
}

export default BlogPostPreview