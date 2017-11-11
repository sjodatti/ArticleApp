import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import { Router, browserHistory, Route, Link } from 'react-router';
import Card from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

class Article extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    render() {

        return (
            <div className='article-component'>
                <div class='article-container'>
                    <ul>
                        {this.getArticleList()}
                    </ul>
                </div>
            </div>
        );
    }

    getArticleList() {
        const html = this.props.name.articles.map((obj, i) => {

            return (
                <MuiThemeProvider>
                    <Card className={`article-item-${obj.id}`}>
                        <a className={`article-item-${obj.id}`} href={`/article/:${obj.id}`} ref={(input) => { this.aLink = input; }} >
                            <div className="article-header">
                                <h2>{obj.title}</h2>
                            </div>
                            <div>{obj.date}</div>
                            <div>{obj.content}</div>
                        </a>
                    </Card>
                </MuiThemeProvider>
            );
        });

        return html;
    }

    handleClick() {
        debugger;
        this.aLink.focus();
    }
}

export default Article;