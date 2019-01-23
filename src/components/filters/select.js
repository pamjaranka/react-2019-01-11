import React, {Component} from 'react'
import Select from 'react-select'
import connect from "react-redux/es/connect/connect";
import {changeSelect, filterArticles} from "../../ac";

class SelectFilter extends Component {
    render() {
        return (
            <Select
                options={this.optionsForSelect}
                onChange={this.handleSelectChange}
                value={this.props.selectValue}
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
        this.props.dispatchChangeSelect(selectedOption);
        this.props.dispatchFilterArticles(selectedOption);
    }

}

const mapStateToProps = (store) => ({
    articlesFromStore: store.articles,
    selectValue: store.selectValue
});

const mapDispatchToProps = (dispatch) => ({
    dispatchChangeSelect: (value) => dispatch(changeSelect(value)),
    dispatchFilterArticles: (value) => dispatch(filterArticles(value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectFilter)
