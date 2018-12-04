import React from "react";
import PropTypes from 'prop-types';
import classNames from "classnames";
import { HorizontalSplit } from "./index";

export class PricingTable extends React.Component {
  render() {
    return (
      <div className="neal-pricing-table">
        <HorizontalSplit>{this.props.children}</HorizontalSplit>
      </div>
    );
  }
}


export class PricingPlan extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string,
    price: PropTypes.node.isRequired,
    period: PropTypes.string,
    features: PropTypes.objectOf(PropTypes.bool),
    buttonText: PropTypes.string,
    onClick: PropTypes.func,
  };

  static defaultProps = {
    period: "/month",
    buttonText: "Sign up",
  };

  render() {
    const { buttonText, description, features, name, onClick, period, price } = this.props;

    return (
      <div className="card">
        <div className="card-header neal-pricing-plan-name">
          {name}
        </div>
        <div className="card-block container">
          <div className="text-center neal-pricing-plan-price">
            <h4 className="card-title neal-pricing-plan-price-amount">{price}</h4>
            <span className="neal-pricing-plan-price-period">{period}</span>
          </div>
          {description && (
            <p className="card-text text-center neal-pricing-plan-description">{description}</p>
          )}
          <p className="card-text neal-pricing-plan-action">
            <button className="btn btn-primary" onClick={onClick}>
              {buttonText}
            </button>
          </p>
        </div>
        {features && (
          <div className="card-block neal-pricing-plan-features">
            <ul className="list-group list-group-flush">
              {Object.keys(features).map((name, idx) => {
                const isEnabled = features[name];
                const _className = classNames("neal-pricing-plan-feature", { isEnabled, "isDisabled": !isEnabled });
                return <li key={idx} className={_className}>{name}</li>;
              })}
            </ul>
          </div>
        )}
      </div>
    );
  }

}
