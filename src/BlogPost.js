import React from 'react';

class BlogPost extends React.Component {

  slice(text, count){
    return text.slice(0, count) + (text.length > count ? "..." : "");
  }

  render() {
    let img = this.props.post.image || "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
    return (
      <div className="item mb-5">
        <div className="media">
          <img className="mr-3 img-fluid post-thumb d-none d-md-flex"
           src={img} alt="" />
          <div className="media-body">
            <h3 className="title mb-1"><a href={"/post/" + this.props.id} >{this.props.post.title}</a></h3>
            <div className="meta mb-1"><span className="date">{this.props.post.created_at}</span></div>
            <div className="intro">{this.slice(this.props.post.text, 300)}</div>
            <a className="more-link" href={"/post/" + this.props.id}>Read more &rarr;</a>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogPost;
