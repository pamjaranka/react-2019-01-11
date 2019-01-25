import React, { Component } from 'react'
import Select from 'react-select'
import {connect} from 'react-redux'
import {changeSelection} from '../../ac';

class SelectFilter extends Component {
    render() {
        return (
            <Select
                options={this.optionsForSelect}
                onChange={this.handleSelectChange}
                value={this.props.selectedOptions}
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
        this.props.changeSelection(selectedOption)
    }
}

export default connect(
    state => ({
        articles: state.articles,
        selectedOptions: state.filters.selected
    }),
    {changeSelection}
)(SelectFilter)
