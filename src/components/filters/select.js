import React, {Component} from 'react'
import Select from 'react-select'
import connect from "react-redux/es/connect/connect";
import {filterArticles, filterData} from "../../ac";

class SelectFilter extends Component {
    render() {
        return (
            <Select
                options={this.optionsForSelect}
                onChange={this.handleSelectChange}
                value={this.props.filterData.selectValue}
                isMulti
            />
        )
    }

    get optionsForSelect() {
        return this.props.articlesFromStore.map((item) => ({
            value: item.id,
            label: item.title
        }))
    }

    handleSelectChange = (selectedOption) => {
        this.props.dispatchFilterData('selectValue', selectedOption);
        this.props.dispatchFilterArticles(this.props.filterData, 'selectValue', selectedOption);
    }

}

const mapStateToProps = (store) => ({
    articlesFromStore: store.articles,
    filterData: store.filterData
});

const mapDispatchToProps = (dispatch) => ({
    dispatchFilterData: (key, value) => dispatch(filterData(key, value)),
    dispatchFilterArticles: (data, key, value) => dispatch(filterArticles(data, key, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectFilter)
