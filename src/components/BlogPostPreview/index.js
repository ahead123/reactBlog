import React from 'react'

const BlogPostPreview = ({ imageURL, title, teaser }) => {
	return(

      <div className="card" style={{ minHeight: 440, maxHeight: 440 }}>

          <div className="view overlay hm-white-slight">
              <img src={imageURL} className="img-fluid" alt="" style={{ maxHeight: 184, width: 380 }} />
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