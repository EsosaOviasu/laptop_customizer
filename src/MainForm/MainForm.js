import React, { Component } from 'react';
import slugify from 'slugify';
import './MainForm.css';
import Feature from '../Feature/Feature';

class MainForm extends Component {
    render() {
        console.log(this.props.featureStore)
      return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <Feature
            features={this.props.featureStore}
            selectedState={this.props.featObj}
            updateHandle={this.props.handleUpdate}/>
        </form>
      );
    }
  }

export default MainForm;