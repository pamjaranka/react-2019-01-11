import React, {Component} from 'react'
import PropTypes from 'prop-types';
//import {connect} from 'react-redux';


class CommentForm extends Component {
    state = {
        text: '',
        user: ''
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <p><input type="text" value={this.state.user} onChange={this.handleChange} name="user" placeholder="Name" required/></p>
                    <p><textarea value={this.state.text} onChange={this.handleChange} name="text" placeholder="Message" required /></p>
                    <p><input type="submit" value="Add a comment" /></p>
                </form>
            </div>
        )
    }

    handleChange = (event) => {
        event.preventDefault()

        const state = {};

        state[event.target.getAttribute('name')] = event.target.value;

        this.setState(state);
    }

    handleSubmit = (event) => {
        event.preventDefault()

        this.addComment();
        this.clearForm();
    }

    addComment = () => {
        const { user, text } = this.state;
        if (user && text) {
            this.props.addComment({user, text});
        }
        // this.props.dispatchAddComment({
        //     articleId: this.props.articleId,
        //     commentId: uuidv1(),
        //     user: this.state.user,
        //     text: this.state.text,
        // })
    }

    clearForm = () => {
        this.setState({
            text: '',
            user: ''
        })
    }
}

CommentForm.propTypes = {
    addComment: PropTypes.func.isRequired
}

export default CommentForm;

// export default connect(
//     null,
//     (dispatch) => ({
//         dispatchAddComment: (comment) => dispatch(addComment(comment))
//     })
// )(CommentForm)
