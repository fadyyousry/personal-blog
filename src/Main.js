import React from 'react';
import {BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import BlogPosts from './BlogPosts';
import Post from './Post';

class Main extends React.Component {
  render() {
    return (
      <div className="main-wrapper">
        <section className="blog-list px-3 py-5 p-md-5">
          <div className="container">
          <BrowserRouter>
            <Switch>
              <Route  path='/post/:id' exact component={Post} />
              <Route  path='/' exact component={BlogPosts} />
              <Route path='*'>
                <Redirect to='/' />
              </Route>
            </Switch>
          </BrowserRouter>
          </div>
        </section>
      </div>
    );
  }
}

export default Main;
