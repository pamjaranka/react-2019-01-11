import React, { Component } from 'react';
import ArticlesPage from './routes/articles';
import UserForm from './components/user-form/user-form';
import Filters from './components/filters';
import Counter from './components/counter';
import {Route, NavLink} from 'react-router-dom';

class App extends Component {
    render() {
        return (
            <div>
                <UserForm/>
                <div>
                    <NavLink to={'/counter'} activeStyle={{color: 'red'}}>Counter</NavLink>
                </div>
                <div>
                    <NavLink to={'/filters'} activeStyle={{color: 'red'}}>Filters</NavLink>
                </div>
                <div>
                    <NavLink to={'/article'} activeStyle={{color: 'red'}}>Articles</NavLink>
                </div>
                <Route path={"/counter"} component={Counter}/>
                <Route path={"/filters"} component={Filters}/>
                <Route path={"/article"} component={ArticlesPage}/>
            </div>
        );
    }
}

export default App;
