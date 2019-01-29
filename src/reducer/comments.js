import {normalizedComments} from '../fixtures';
import {ADD_COMMENT} from "../constants";

const defaultComments = normalizedComments.reduce((acc, comment) => {
    return {
        ...acc,
        [comment.id]: comment
    }
}, {})

export default (comments = defaultComments, action) => {
    const {type, payload} = action

    switch (type) {
        case ADD_COMMENT:
            const {text, user, commentId} = payload.comment;
            const newComment = {};

            newComment[commentId] = {
                id: commentId,
                user: user,
                text: text
            };

            return {...comments, ...newComment};
        default:
            return comments
    }
}