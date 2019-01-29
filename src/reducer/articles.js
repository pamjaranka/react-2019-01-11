import {normalizedArticles as defaultArticles} from '../fixtures';
import {ADD_COMMENT, DELETE_ARTICLE} from '../constants';
import {arrToMap} from './utils'

export default (articles = arrToMap(defaultArticles), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case DELETE_ARTICLE:
            const articlesCopy = { ...articles }
            delete articlesCopy[payload.id]
            return articlesCopy

        case ADD_COMMENT:
            const article = articles[payload.articleId]
            const comments = article.comments || []
            return {
                ...articles,
                [payload.articleId]: {
                    ...article,
                    comments: [...comments, randomId]
                }
            }

        default:
            return articles
    }
}
