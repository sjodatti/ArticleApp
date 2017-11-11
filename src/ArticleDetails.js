import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';

class ArticleDetails extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className='article-details-component'>
                <div class='article-details'>
                    <h2>{this.props.name.title}</h2>
                    <div>{this.props.name.date}</div>
                    <div>{this.props.name.content}</div> 
                </div>
            </div>
        );
    }

}

export default ArticleDetails;