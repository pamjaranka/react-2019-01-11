import {INCREMENT, DELETE_ARTICLE, FILTER_ARTICLE, CHANGE_SELECT, CHANGE_DATE_PICKER} from '../constants';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const filterArticles = (ids) => ({
    type: FILTER_ARTICLE,
    payload: ids
})

export const changeSelect = (value) => ({
    type: CHANGE_SELECT,
    payload: value
})

export const changeDatePicker = (value) => ({
    type: CHANGE_DATE_PICKER,
    payload: value
})
