
import {FILTER_DATA} from '../constants';

export const defaultFilterData = {
    selectValue: null,
    datePickerValue: {from: undefined, to: undefined},
};

export const updateFilterData = (data, key, value) => {

    const dataNew = Object.assign({}, data);
    const valueNew = value ? value : defaultFilterData[key];
    dataNew[key] = valueNew;

    return dataNew;
};

export default (data = defaultFilterData, action) => {
    const {type, payload} = action;

    switch (type) {
        case FILTER_DATA:
            return updateFilterData(data, payload.key, payload.value);
        default:
            return data
    }

}