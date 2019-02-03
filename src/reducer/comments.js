import { ADD_COMMENT, LOAD_ALL_COMMENTS, SUCCESS } from '../constants'
import { arrToMap } from './utils'
import {Map} from 'immutable';


export default (comments = new Map (), action) => {
    const { type, payload, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(randomId, {...payload.comment, id: randomId})


        case LOAD_ALL_COMMENTS + SUCCESS:
            return arrToMap(payload.entities)

        default:
            return comments
    }
}
