import React, {PureComponent} from 'react'
import CommentList, {TypeComments} from '../comment-list/comment-list';
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'
import './article.css';
import {connect} from 'react-redux';
import {deleteArticle, addComment} from '../../ac';
import CommentForm from "../comment-form";
import {createArticleSelector} from "../../selectors";
import uuidv1 from "uuid/v1";

export const TypeArticle = PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    comments: TypeComments
})

class Article extends PureComponent {
    state = {
        error: null
    }

    componentDidCatch(error) {
        this.setState({error})
    }

    render() {
        const {article: {title}, isOpen} = this.props

        return (
            <div>
                <h3>
                    {title}
                    <button className="test--article__btn" onClick={this.toggleOpen}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                    <button onClick={this.handleDelete}>Delete</button>
                </h3>
                <CSSTransition
                    transitionName="article"
                    transitionEnterTimeout={300}
                    transitionLeaveTimeout={300}
                >
                    {this.body}
                </CSSTransition>
            </div>
        )
    }

    handleDelete = () => {
        this.props.dispatchDeleteArticle(this.props.article.id)
    }

    toggleOpen = () => {
        console.log(this.props.article.id)
        this.props.toggleArticle(this.props.article.id)
    }

    get body() {
        const {article, isOpen} = this.props
        console.log(article)

        if (!isOpen) return null
        return (
            <section className="test--article_body">
                <p>{article.text}</p>
                {
                    this.state.error ?
                        null :
                        <CommentList
                            comments={article.comments}/>
                }
                <CommentForm
                    addComment={this.handleAddComment}
                    articleId={article.id}
                /></section>
        )
    }

    handleAddComment = (comment) => {
        const { dispatchAddComment, id: articleId } = this.props;

        dispatchAddComment({
            articleId: articleId,
            commentId: uuidv1(),
            ...comment
        })
    }
}

Article.propTypes = {
    isOpen: PropTypes.bool,
    toggleArticle: PropTypes.func,
    article: TypeArticle
}

const initMapStateToProps = () => {
    const articlesSelector = createArticleSelector()
    return (store, ownProps) => {
        return {
            article: articlesSelector(store, ownProps)
        }
    }
}

export default connect(
    initMapStateToProps,
    (dispatch) => ({
        dispatchDeleteArticle: (id) => dispatch(deleteArticle(id)),
        dispatchAddComment: (comment) => dispatch(addComment(comment))
    })
)(Article)
