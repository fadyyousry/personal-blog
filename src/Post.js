import React from 'react';
import {url} from './help';
import marked from 'marked';

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: {}
    }
  }

  componentDidMount() {
    fetch(url + '/posts/' + this.props.match.params.id + '.json', {
      method: "GET",
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      response.json().then((result) => {
        if (result) this.setState({post: result});
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }

  getMarkdownText(text) {
    var rawMarkup = marked(text , {sanitize: true});
    return { __html: rawMarkup };
  }

  render() {
    let img = this.state.post.image || "https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png"
    let text = this.state.post.text || '';
    return (
      <div >
        <header className="blog-post-header">
  		    <h2 className="title mb-2">{this.state.post.title}</h2>
  		    <div className="meta mb-3"><span className="date">{this.state.post.created_at}</span></div>
  	    </header>

  	    <div className="blog-post-body">
  		    <figure className="blog-banner">
  		        <img className="img-fluid" src={img} alt="" />
  		    </figure>
          <div dangerouslySetInnerHTML={this.getMarkdownText(text)} />
        </div>
      </div>
    );
  }
}

export default Post;
