import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesReducer from './articles';
import selectReducer from './select';

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    selectValue: selectReducer
})
