import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesReducer from './articles';
import filterDataReducer from './filter';

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    filterData: filterDataReducer
})
