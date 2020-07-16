import React, { Component } from 'react';
import slugify from 'slugify';
import './FeatureItem.css';

const USCurrencyFormat = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

class FeatureItem extends Component {
    render() {
        const itemHash = this.props.indiItemHash
        const feature = this.props.indiFeature
        const item = this.props.indiItem
        console.log(this.props.selected)
         return (
            <div key={itemHash} className="feature__item">
                <input
                type="radio"
                id={itemHash}
                className="feature__option"
                name={slugify(feature)}
                checked={item.name === this.props.selected[feature].name}
                onChange={e => this.props.updateFeature(feature, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                    {item.name} ({USCurrencyFormat.format(item.cost)})
                </label>
            </div>
        )
    }
  }

export default FeatureItem;