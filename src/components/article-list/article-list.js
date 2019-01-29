import React, {Component} from 'react';
import Article, {TypeArticle} from '../article';
import accordion from '../../decorators/accordion';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {filteredArticlesSelector} from '../../selectors';

export const TypeArticles = PropTypes.arrayOf(PropTypes.string);

class ArticleList extends Component{
    static propTypes = {
        articlesFromStore: TypeArticles
    }
    render() {
        console.log('article-list render');
        return <ul>{this.articles}</ul>;
    }

    componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }

    get articles() {
        const {
            articlesFromStore,
            openItemId,
            toggleOpenArticle,
        } = this.props;

        return articlesFromStore.map((id) => (
            <li key={id} className="test--art__container">
                <Article
                    id={id}
                    isOpen={id === openItemId}
                    toggleArticle={toggleOpenArticle} />
            </li>
        ))
    }
}

export default connect(
    store => {
        console.log('article-list connect');
        return {
            articlesFromStore: filteredArticlesSelector(store)
        }
    }
)
(accordion(ArticleList))
