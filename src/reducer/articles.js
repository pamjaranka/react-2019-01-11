import {normalizedArticles as defaultArticles} from '../fixtures';
import {ADD_COMMENT, DELETE_ARTICLE} from '../constants';
import {arrToMap} from './utils'
import {Record} from 'immutable';

const ArticleRecord = Record({
    id: null,
    text: null,
    title: null,
    date: null,
    comments: []
})

export default (articles = arrToMap(defaultArticles, ArticleRecord), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.delete(payload.id)

        case ADD_COMMENT:
            return articles.updateIn(
                [payload.articleId, 'comments'],
                (comments) => {
                    return comments.concat(randomId)
                }
            )

        default:
            return articles
    }
}
