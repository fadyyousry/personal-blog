import React from 'react';
import BlogPost from './BlogPost';
import {url} from './help';


class BlogPosts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: {}
    }
  }

  componentDidMount() {
    fetch(url + '/posts.json', {
      method: "GET",
    }).then((response) => {
      if (!response.ok) {
        throw Error(response.statusText);
      }
      response.json().then((result) => {
        this.setState({posts: result});
      })
    })
    .catch((error) => {
      console.error('Error:', error);
    })
  }


  render() {
    let posts = this.state.posts;
    return (
      <ul>
      {
        Object.keys(posts).map ((key) => (
          <li key={key}><BlogPost id={key} post={posts[key]}/></li>
        ))
      }
      </ul>
    );
  }
}

export default BlogPosts;
