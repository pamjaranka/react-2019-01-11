import {CHANGE_SELECT, DELETE_ARTICLE} from '../constants';
import articlesMock from "../fixtures";

export default (select_value = null, action) => {
  const {type, payload} = action;

  if (type === CHANGE_SELECT) {
    return payload;
  }
  return select_value;
}