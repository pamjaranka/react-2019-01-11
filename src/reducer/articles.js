import {normalizedArticles} from '../fixtures';
import {ADD_COMMENT, DELETE_ARTICLE} from '../constants';

const defaultArticles = normalizedArticles.reduce((acc, article) => {
    return {
        ...acc,
        [article.id]: article
    }
}, {})

export default (articles = defaultArticles, action) => {
    const {type, payload} = action
    switch (type) {
        case ADD_COMMENT:
            const {articleId, commentId} = payload.comment;

            let article = articles.filter(article => article.id === articleId);
            article = article[0];

            article = {
                ...article,
                comments: [...article.comments, commentId]
            };
            console.log({
                ...articles,
                ...article
            })


            return articles;


        case DELETE_ARTICLE:
            return articles.filter(article => article.id !== payload.id)
        default:
            return articles
    }
}