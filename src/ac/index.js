import {INCREMENT, DELETE_ARTICLE, CHANGE_SELECT} from '../constants';

export const increment = () => ({
    type: INCREMENT
})

export const deleteArticle = (id) => ({
    type: DELETE_ARTICLE,
    payload: {id}
})

export const  changeSelect = (value) => ({
    type: CHANGE_SELECT,
    payload: value
})
