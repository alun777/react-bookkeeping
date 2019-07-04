import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { padLeft, range } from '../utility'

class MonthPicker extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
      selectedYear: this.props.year,
      selectedMonth: this.props.month
    }
  }

  toggleDropDown = (event) => {
    event.preventDefault()
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  selectYear = (event, yearNumber) => {
    event.preventDefault()
    this.setState({
      selectedYear: yearNumber
    })
  }

  selectMonth = (event, monthNumber) => {
    event.preventDefault()
    this.setState({
      selectedMonth: monthNumber,
      isOpen: false
    })
    //通过回调将 this.state.selectedYear, monthNumb 传出去
    this.props.onChange(this.state.selectedYear, monthNumber)
  }

  render() {
    const { year } = this.props
    const { isOpen, selectedYear, selectedMonth } = this.state
    const monthRange = range(12, 1)
    const yearRange = range(9, -4).map(item => item + year)

    return (
      <div className="dropdown month-picker-component">
        <h4>Select Month</h4>
        <button
          className="btn btn-lg btn-secondary dropdown-toggle"
          onClick={this.toggleDropDown}
        >
          {`${selectedYear} / ${padLeft(selectedMonth)}`}
        </button>
        {
          isOpen &&
          <div className="dropdown-menu" style={{ display: 'block' }}>
            <div className="row">
              <div className="col border-right">
                {yearRange.map((yearNumber, index) => (
                  <a
                    href='/'
                    key={index}
                    className={(yearNumber === selectedYear) ? 'dropdown-item active' : 'dropdown-item'}
                    onClick={(event) => { this.selectYear(event, yearNumber) }}
                  >
                    {yearNumber}
                  </a>
                ))}
              </div>
              <div className="col">
                {monthRange.map((monthNumber, index) => (
                  <a
                    href='/'
                    key={index}
                    className={(monthNumber === selectedMonth) ? 'dropdown-item active' : 'dropdown-item'}
                    onClick={(event) => { this.selectMonth(event, monthNumber) }}
                  >
                    {padLeft(monthNumber)}
                  </a>
                ))}
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

MonthPicker.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
}

export default MonthPicker;
