import React, {Component} from 'react';

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

class DatepickerOutput extends Component {
  state = {
    startDate: new Date(),
    minDate: new Date(),
    maxDate: this.maxDate,
  };

  handleChange = (date) => this.setState({startDate: date,});

  get maxDate() {
    const dateRange = 7;
    let maxDate = new Date();
    maxDate = new Date(maxDate.setDate(maxDate.getDate() + dateRange));

    return maxDate;
  }

  render() {
    return (
      <div>
        <DatePicker
          dropdownMode='scroll'
          selected={this.state.startDate}
          onChange={this.handleChange}
          minDate={this.state.minDate}
          maxDate={this.state.maxDate}
        />
        <span>You have chosen {this.state.startDate.toDateString()}</span>
      </div>
    );
  }
}

export default DatepickerOutput;