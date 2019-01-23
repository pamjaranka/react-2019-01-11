import {combineReducers} from 'redux';
import counterReducer from './counter';
import articlesReducer from './articles';
import selectReducer from './select';
import datePickerReducer from './date-picker';

export default combineReducers({
    count: counterReducer,
    articles: articlesReducer,
    selectValue: selectReducer,
    datePickerValue: datePickerReducer
})
