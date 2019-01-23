import React from 'react';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import {changeDatePicker} from "../../ac";
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
        const range = DateUtils.addDayToRange(day, this.props.datePickerValue);
        this.props.dispatchChangeDatePicker(range);
    }
    handleResetClick() {
        this.props.dispatchChangeDatePicker();
    }
    render() {
        const { from, to } = this.props.datePickerValue;
        const modifiers = { start: from, end: to };
        return (
            <div className="RangeExample">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                ${to.toLocaleDateString()}`}{' '}
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
    datePickerValue: store.datePickerValue
});

const mapDispatchToProps = (dispatch) => ({
    dispatchChangeDatePicker: (value) => dispatch(changeDatePicker(value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DateRange)

