import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {filterArticles, filterData} from "../../ac";
import {formatDate} from "../../utils";
import connect from "react-redux/es/connect/connect";

class DateRange extends React.Component {
    static defaultProps = {
        numberOfMonths: 2,
    };
    constructor(props) {
        super(props);
        this.handleDayClick = this.handleDayClick.bind(this);
        this.handleResetClick = this.handleResetClick.bind(this);
    }

    handleDayClick(day) {
        const range = DateUtils.addDayToRange(day, this.props.filterData.datePickerValue);
        this.props.dispatchFilterData('datePickerValue', range);
        this.props.dispatchFilterArticles(this.props.filterData, 'datePickerValue', range);
    }
    handleResetClick() {
        this.props.dispatchFilterData('datePickerValue');
        this.props.dispatchFilterArticles(this.props.filterData, 'datePickerValue');
    }

    render() {
        const { from, to } = this.props.filterData.datePickerValue;
        const modifiers = { start: from, end: to };
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${formatDate(from)} to
                ${formatDate(to)}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>

                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                />
            </div>
        );
    }
}

const mapStateToProps = (store) => ({
    filterData: store.filterData
});

const mapDispatchToProps = (dispatch) => ({
    dispatchFilterData: (key, value) => dispatch(filterData(key, value)),
    dispatchFilterArticles: (data, key, value) => dispatch(filterArticles(data, key, value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRange)

