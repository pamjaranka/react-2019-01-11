import React, {Component} from 'react';
import Article from '../article';
import accordion from '../../decorators/accordion';
import PropTypes from "prop-types";

class ArticleList extends Component{
    render() {
        return <ul>{this.articles}</ul>;
    }

    componentDidMount() {
        this.props.fetchData && this.props.fetchData()
    }

    get articles() {
        const {
            openItemId,
            toggleOpenArticle,
            articles
        } = this.props;

        return articles.map(article => (
            <li key={article.id} className="test--art__container">
                <Article
                    article={article}
                    isOpen={article.id === openItemId}
                    toggleArticle={toggleOpenArticle}
                />
            </li>
        ))
    }
}

ArticleList.propTypes = {
    openItemId: PropTypes.string,
    toggleOpenArticle: PropTypes.func.isRequired,
    fetchData: PropTypes.func,
    articles: PropTypes.array
};

export default accordion(ArticleList)
