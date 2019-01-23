import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesReducer from './articles';
import selectReducer from './select';
import datePickerReducer from './date-picker';
import filterArticlesReducer from './filter-articles';

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    filteredArticles: filterArticlesReducer,
    selectValue: selectReducer,
    datePickerValue: datePickerReducer

})
