import React, {Component} from 'react';
import config from '../../config';
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group';
import './comment-list.css';

class CommentList extends Component {
    render() {
        const {isOpen, toggleOpenItem} = this.props;

        return (
            <div>
                <button onClick={toggleOpenItem} className='test--comment__btn'>
                    {isOpen ? 'hide comments' : 'show comments'}
                </button>
                <CSSTransition
                    transitionName="comment-list"
                    transitionEnterTimeout={config.TRANSITION_ENTER}
                    transitionLeaveTimeout={config.TRANSITION_LEAVE}
                >
                    {this.getBody()}
                </CSSTransition>
            </div>
        )
    }

    getBody() {
        const {comments, isOpen} = this.props;
        const body = comments.length ? (
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id} className='test--comment__container'>
                        <Comment comment={comment}/>
                    </li>
                ))}
            </ul>
        ) : (
            <h3>No comments yet</h3>
        );
        return isOpen ? (
            <div>{body}</div>
        ) : null
    }
}

CommentList.propTypes = {
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func.isRequired,
    comments: PropTypes.array.isRequired
}

export default toggleOpen(CommentList)
