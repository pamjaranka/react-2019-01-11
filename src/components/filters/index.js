import React, { Component } from 'react'
import Select from './select'
import DateRange from './date-range-picker';
import PropTypes from 'prop-types';

class Filters extends Component {
    render() {
        return (
            <div>
                <Select articles={this.props.articles} />
                <DateRange />
            </div>
        )
    }
}

Filters.propTypes = {
    articles: PropTypes.array
};


export default Filters;
