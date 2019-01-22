import React, { Component } from 'react';
import ArticleList, {TypeArticles} from './components/article-list/article-list';
import UserForm from './components/user-form/user-form';
import Filters from './components/filters';
import Counter from './components/counter';

class App extends Component {
    static propTypes = {
        articles: TypeArticles
    }
    render() {
        const {articles} = this.props;
        return (
            <div>
                <Counter/>
                <hr/>
                <UserForm/>
                <Filters articles={articles} />
                <ArticleList articles={articles}/>
            </div>
        );
    }
}

export default App;
