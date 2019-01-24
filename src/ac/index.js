import {INCREMENT, DELETE_ARTICLE, FILTER_ARTICLES, FILTER_DATA} from '../constants';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const filterArticles = (data, key, value) => ({
    type: FILTER_ARTICLES,
    payload: {data, key, value}
})

export const filterData = (key, value) => ({
    type: FILTER_DATA,
    payload: {key, value}
})

