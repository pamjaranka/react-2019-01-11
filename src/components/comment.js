import React, {PureComponent} from 'react';

class Comment extends PureComponent {
  render() {
    const {user, text} = this.props.comment;
    console.log('render Comment');

    return (
      <div>
        <h3>
          Comment by: {user}
        </h3>
        {text}
      </div>
    )
  }

}

export default Comment;
