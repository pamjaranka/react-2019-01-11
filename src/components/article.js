import React, {PureComponent} from 'react';
import CommentList from './comment-list';

class Article extends PureComponent {
    render() {
        const {article: {title}, isOpen} = this.props;
        console.log('render Article');

        return (
            <div>
                <h3>
                    {title}
                    <button onClick={this.toggleClick}>
                        {isOpen ? 'close' : 'open'}
                    </button>
                </h3>
                {this.body}
                {this.comments}
            </div>
        )
    }

    toggleClick = () => {
        const openItemId = !this.props.isOpen ? this.props.article.id : null;

        this.props.toggleArticle(openItemId);
    };

    get body() {
        if (!this.props.isOpen) return null;
        return (
            <p>{this.props.article.text}</p>
        )
    }

    get comments() {
        if (!this.props.isOpen) return null;

        return <CommentList
          comments={this.props.article.comments}
        />;
    }
}

export default Article;
