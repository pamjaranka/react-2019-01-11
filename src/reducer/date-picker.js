import {CHANGE_DATE_PICKER} from '../constants';

const defaultDatePickerValue = {from: undefined, to: undefined};

export default (value = defaultDatePickerValue, action) => {
  const {type, payload} = action;

  if (type === CHANGE_DATE_PICKER) {
    if(payload) {
      return payload;
    } else {
      return defaultDatePickerValue;
    }

  }
  return value;
}