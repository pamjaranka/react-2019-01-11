import React, { Component } from 'react';
import ArticleList, {TypeArticles} from './components/article-list/article-list';
import UserForm from './components/user-form/user-form';
import Filters from './components/filters';

class App extends Component {
    static propTypes = {
        articles: TypeArticles
    }
    render() {
        const {articles} = this.props;
        return (
            <div>
                <UserForm/>
                <Filters articles={articles} />
                <ArticleList articles={articles}/>
            </div>
        );
    }
}

export default App;
