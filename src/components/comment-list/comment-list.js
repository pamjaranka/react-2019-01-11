import React, {Component} from 'react'
import Comment from '../comment/comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'
import './comment-list.css';
import CommentForm from '../comment-form';
import {connect} from 'react-redux';
import {loadAllComments} from '../../ac';
import {loadingCommentsSelector, loadedCommentsSelector} from '../../selectors';
import Loader from '../common/loader'

export const TypeComments = PropTypes.arrayOf(PropTypes.string)

class CommentList extends Component {
  static propTypes = {
    article: PropTypes.object,

    // from decorator
    isOpen: PropTypes.bool,
    toggleOpenItem: PropTypes.func.isRequired
  }

  static defaultProps = {
    comments: []
  }

  componentDidUpdate() {
    const {isOpen, fetchData, loadingComments, loadedComments} = this.props
    isOpen &&
    !loadingComments &&
    !loadedComments &&
    fetchData()
  }

  render() {
    const {isOpen, toggleOpenItem} = this.props
    return (
      <div>
        <button onClick={toggleOpenItem} className="test--comment-list__btn">
          {isOpen ? 'hide comments' : 'show comments'}
        </button>
        <CSSTransition
          transitionName="comment-list"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}

        >
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  get body() {
    const {
      article: {
        comments = [],
        id: articleId,
      },
      loadingComments,
      loadedComments,
      errorComments,
      isOpen
    } = this.props

    if (errorComments)
      return <strong>{errorComments.message}</strong>

    if (loadingComments) return <Loader/>
    if (!isOpen || !loadedComments) return null

    const body = comments.length ? (
      <ul>
        {comments.map((id) => (
          <li key={id} className="test--comment-list__item">
            <Comment id={id}/>
          </li>
        ))}
      </ul>
    ) : (
      <h3 className="test--comment-list__empty">No comments yet</h3>
    )
    return <div>
      <CommentForm articleId={articleId}/>
      {body}
    </div>
  }
}


export default connect(
  store => {
    console.log('comment-list connect');
    return {
      loadingComments: loadingCommentsSelector(store),
      loadedComments: loadedCommentsSelector(store)
    }
  },
  {
    fetchData: loadAllComments
  }
)(toggleOpen(CommentList))
