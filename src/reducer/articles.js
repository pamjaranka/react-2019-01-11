import {ADD_COMMENT, DELETE_ARTICLE, LOAD_ALL_ARTICLES, START, SUCCESS, FAIL, LOAD_ARTICLE, LOAD_ALL_COMMENTS} from '../constants';
import {arrToMap} from './utils'
import {Record} from 'immutable';

const ArticleRecord = Record({
    id: null,
    text: null,
    title: null,
    date: null,
    loading: false,
    comments: [],
})

const ReducerState = Record({
    entities: arrToMap([], ArticleRecord),
    loading: false,
    loaded: false,
    error: null,
    loadingComments: false,
    loadedComments: false,
    errorComments: null
})

export default (articles = new ReducerState(), action) => {
    const { type, payload, randomId, response, error } = action

    switch (type) {
        case DELETE_ARTICLE:
            return articles.deleteIn(['entities', payload.id])

        case ADD_COMMENT:
            return articles.updateIn(
                ['entities', payload.articleId, 'comments'],
                (comments) => {
                    return comments.concat(randomId)
                }
            )

        case LOAD_ALL_ARTICLES + START:
            return articles.set('loading', true)

        case LOAD_ALL_ARTICLES + SUCCESS:
            return articles
                .set('loading', false)
                .set('loaded', true)
                .set('entities', arrToMap(response, ArticleRecord))

        case LOAD_ALL_ARTICLES + FAIL:
            return articles
                .set('loading', false)
                .set('loaded', false)
                .set('error', error)

        case LOAD_ARTICLE + START:
            return articles.setIn(['entities', payload.id, 'loading'], true)

        case LOAD_ARTICLE + SUCCESS:
            return articles
                .setIn(['entities', response.id], response)
                .setIn(['entities', payload.id, 'loading'], false)

        case LOAD_ARTICLE + FAIL:
            return articles
                .set('loading', false)
                .set('error', error)

        case LOAD_ALL_COMMENTS + START:
            return articles
              .set('loadingComments', true)


        case LOAD_ALL_COMMENTS + SUCCESS:
            return articles
              .set('loadingComments', false)
              .set('loadedComments', true)


        case LOAD_ALL_COMMENTS + FAIL:
            return articles
              .set('loadingComments', false)
              .set('errorComments', error)


        default:
            return articles
    }
}
