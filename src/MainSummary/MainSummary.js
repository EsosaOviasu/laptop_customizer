import React, { Component } from 'react';
import slugify from 'slugify';
import './MainSummary.css';
import SummaryOption from '../SummaryOption/SummaryOption';
import SummaryTotal from '../SummaryTotal/SummaryTotal';

class MainSummary extends Component {
    render() {
      return (
        <section className="main__summary">
            <h2>Your cart</h2>
            <SummaryOption selected={this.props.featObj}/>
            <SummaryTotal sumTotal={this.props.mainTotal}/>
        </section>
      );
    }
  }

export default MainSummary;