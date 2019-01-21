import React, { Component } from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';

class SelectFilter extends Component {
    state = {
        selectedOption: null
    }

    render() {
        return (
            <Select
                options={this.optionsForSelect}
                onChange={this.handleSelectChange}
                value={this.state.selectedOption}
                isMulti
            />
        )
    }

    get optionsForSelect() {
        return this.props.articles.map((item) => ({
            value: item.id,
            label: item.title
        }))
    }

    handleSelectChange = (selectedOption) => {
        this.setState({ selectedOption })
    }
}

SelectFilter.propTypes = {
    articles: PropTypes.array
};

export default SelectFilter
