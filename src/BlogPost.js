import React from 'react';
import { Link } from 'react-router-dom';

class BlogPost extends React.Component {
  render() {
    let img = this.props.image || "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
    return (
      <div className="item mb-5">
        <div className="media">
          <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
           src={img} alt="" />
          <div className="media-body">
            <h3 className="title mb-1"><Link to={"/post/" + this.props.id} >{this.props.post.title}</Link></h3>
            <div className="meta mb-1"><span className="date">{this.props.post.created_at}</span></div>
            <div className="intro">{this.props.post.text}</div>
            <a className="more-link" href="blog-post.html">Read more &rarr;</a>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
