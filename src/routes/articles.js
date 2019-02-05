import React, {Component} from 'react'
import ArticleList from '../components/article-list';
import {Route} from 'react-router-dom';
import Article from '../components/article';

class ArticlesPage extends Component {
    render() {
        return (
            <div>
                <ArticleList />
                <Route path={'/article/:id'} render={this.getArticle}/>
            </div>
        )
    }

    getArticle = ({match}) => {
         return <Article id={match.params.id}/>
    }
}

export default ArticlesPage
