import React, {Component} from 'react'
import Comment from '../comment/comment'
import PropTypes from 'prop-types';
import CSSTransition from 'react-addons-css-transition-group'
// import './comment-list.css';
import {connect} from 'react-redux'
import Loader from '../common/loader';
import {loadAllArticles, loadCommentsPaged} from '../../ac';

export const TypeComments = PropTypes.arrayOf(PropTypes.string)

class CommentListPaged extends Component {
    // static propTypes = {
    //     article: PropTypes.object,
    //
    //     // from decorator
    //     isOpen: PropTypes.bool,
    //     toggleOpenItem: PropTypes.func.isRequired
    // }
    //
    // static defaultProps = {
    //     comments: []
    // }

    componentDidMount(oldProps) {
        console.log(this.props)
        const page = this.props.page ? this.props.page : 1;
        this.props.fetchData(page);
        // const { isOpen, article, loadArticleComments } = this.props
        // if (
        //     isOpen &&
        //     !oldProps.isOpen &&
        //     !article.commentsLoading &&
        //     !article.commentsLoaded
        // ) {
        //     loadArticleComments(article.id)
        // }
    }

    render() {

        return (
            <div>444
                {/*<button onClick={toggleOpenItem} className="test--comment-list__btn">*/}
                {/*{isOpen ? 'hide comments' : 'show comments'}*/}
                {/*</button>*/}
                {/*<CSSTransition*/}
                {/*transitionName="comment-list"*/}
                {/*transitionEnterTimeout={300}*/}
                {/*transitionLeaveTimeout={300}*/}

                {/*>*/}
                {/*{this.body}*/}
                {/*</CSSTransition>*/}
            </div>
        )
    }

    get body() {
        const {
            article: {
                comments = [],
                id: articleId,
                commentsLoading,
                commentsLoaded
            },
            isOpen
        } = this.props

        if (!isOpen) return null;
        if (commentsLoading) return <Loader/>
        if (!commentsLoaded) return null

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

            {body}
        </div>
    }
}

export default connect(
    null,
    {
        fetchData: loadCommentsPaged
    }
)(CommentListPaged)
