import React, {Component} from 'react';
import Comment from './comment';

class CommentList extends Component {
  state = {
    isShown: false
  };

  toggleClick = () => this.setState({isShown: !this.state.isShown});

  render() {
    return (
      <div>
        <button onClick={this.toggleClick}>
          {this.state.isShown ? 'Hide Comments' : 'Show Comments'}
        </button>
        {this.comments}
      </div>
    )
  }

  get comments() {
    if (!this.state.isShown) return null;

    const {
      comments
    } = this.props;

    return (
      <ul>
        {comments.map(comment => (
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

export default CommentList;