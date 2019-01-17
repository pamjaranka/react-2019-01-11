import React, {Component} from 'react';
import Comment from './comment';
import toggleVisibility from '../decorators/toggle-visibility';

class CommentList extends Component {
  render() {
    const {
      isShown,
      toggleVisibility
    } = this.props;

    return (
      <div>
        <button onClick={toggleVisibility}>
          {isShown ? 'Hide Comments' : 'Show Comments'}
        </button>
        {this.comments}
      </div>
    )
  }

  get comments() {
    if (!this.props.isShown) return null;

    return (
      <ul>
        {this.props.comments.map(comment => (
          <li key={comment.id}>
            <Comment
              comment={comment}
            />
          </li>
        ))}
      </ul>
    )
  }
}

export default toggleVisibility(CommentList);