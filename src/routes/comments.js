import React, {Component} from 'react'
import CommentListPaged from '../components/comment-list-pages';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';

class CommentsPage extends Component {
    render() {
        return (
            <div>
                <h1>Comments</h1>
                <CommentListPaged />
                {/*<Switch>*/}
                    {/*<Route path={'/articles/:id'} render={this.getArticle}/>*/}
                    {/*<Route path={'/articles'} render={() => <h2>Please select an article</h2>}/>*/}
                {/*</Switch>*/}
            </div>
        )
    }

    // getArticle = ({match}) => {
    //     console.log('articles match', match);
    //     return <Article key={match.params.id} id={match.params.id}/>
    // }
}

export default CommentsPage
