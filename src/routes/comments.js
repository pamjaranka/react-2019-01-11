import React, {Component} from 'react'
import CommentListPaged from '../components/comment-list-pages';
import {Route} from 'react-router-dom';
import {Switch} from 'react-router-dom';

class CommentsPage extends Component {
    render() {
        return (
            <div>
                <h1>Comments</h1>
                <Switch>
                    <Route path={'/comments/:page'} render={this.getComments}/>
                    <Route path={'/comments'} render={this.getComments}/>
                </Switch>
            </div>
        )
    }

    getComments = ({match}) => {
        console.log('comments match', match);
        const page = match.params.page ? match.params.page : '';
        return <CommentListPaged page={page}/>
    }
}

export default CommentsPage
