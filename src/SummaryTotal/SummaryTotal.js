import React, { Component } from 'react';
import slugify from 'slugify';
import './SummaryTotal.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class SummaryTotal extends Component {
    render() {
        console.log(this.props.sumTotal)
      return (
        <div className="summary__total">
            <div className="summary__total__label">Total</div>
            <div className="summary__total__value">
                {USCurrencyFormat.format(this.props.sumTotal)}
            </div>
        </div>
      );
    }
  }

export default SummaryTotal;