import {CHANGE_SELECT} from '../constants';

export default (select_value = null, action) => {
  const {type, payload} = action;

  if (type === CHANGE_SELECT) {
    return payload;
  }
  return select_value;
}