import React, { Component } from 'react';
import slugify from 'slugify';
import './Feature.css';
import FeatureItem from '../FeatureItem/FeatureItem';

class Feature extends Component {
    render() {
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            const options = this.props.features[feature].map(item => {
            const itemHash = slugify(JSON.stringify(item));
                return (
                    <FeatureItem
                    indiItemHash={itemHash}
                    indiFeature={feature}
                    indiItem={item}
                    key={itemHash}
                    selected={this.props.selectedState}
                    updateFeature={this.props.updateHandle}/>
                )
            });
            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                    <h3>{feature}</h3>
                    </legend>
                    {options}
                </fieldset>
            );
        });
        return features
    }
  }

export default Feature;