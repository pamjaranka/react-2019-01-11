import {
    LOAD_COMMENTS_PAGED,
    FAIL,
    START,
    SUCCESS
} from "../constants";
import {arrToMap, arrFromIds} from "./utils";
import {OrderedMap, Record} from 'immutable';

const CommentsPagedRecord = Record({
    id: null,
    comments: [],
    loading: false,
    loaded: false,
    error: null
})

const ReducerState = Record({
    pages: arrToMap([], CommentsPagedRecord)
})

export default (state = new ReducerState(), action) => {
    const {type, payload, response, error} = action

    switch (type) {
        case LOAD_COMMENTS_PAGED + START:
            return state.setIn(['pages', payload.page, 'loading'], true)

        case LOAD_COMMENTS_PAGED + SUCCESS:
            return state
                .setIn(['pages', payload.page, 'loading'], false)
                .setIn(['pages', payload.page, 'loaded'], true)
                .setIn(['pages', payload.page, 'comments'], arrFromIds(response.records))

        case LOAD_COMMENTS_PAGED + FAIL:
            return state
                .setIn(['pages', payload.page, 'loading'], false)
                .setIn(['pages', payload.page, 'loaded'], false)
                .setIn(['pages', payload.page, 'error'], error)

        default:
            return state
    }
}