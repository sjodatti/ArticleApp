
import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import './App.css';
import Article from './Article.js';
import ArticleDetails from './ArticleDetails.js';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = props;
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={() => <Article name={this.props} />} />
        
        <Route path="/article/:1" component={() => <ArticleDetails name={this.props.articles[0]} />}/>
        <Route path="/article/:2" component={() => <ArticleDetails name={this.props.articles[1]} />}/>
      </Router>
    );
  }

}

export default App;