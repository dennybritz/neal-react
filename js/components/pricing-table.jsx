import React from "react";
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
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    price: React.PropTypes.node.isRequired,
    period: React.PropTypes.string,
    features: React.PropTypes.objectOf(React.PropTypes.bool),
    buttonText: React.PropTypes.string,
    onClick: React.PropTypes.func,
  };

  static defaultProps = {
    period: "/month",
    buttonText: "Sign up",
  };

  render() {
    return (
      <div className="card">
        <div className="card-header neal-pricing-plan-name">
          {this.props.name}
        </div>
        <div className="card-block">
          <div className="text-xs-center neal-pricing-plan-price">
            <h4 className="card-title neal-pricing-plan-price-amount">{this.props.price}</h4>
            <span className="neal-pricing-plan-price-period">{this.props.period}</span>
          </div>
          <p className="card-text text-xs-center neal-pricing-plan-description">{this.props.description}</p>
          <p className="card-text text-xs-center neal-pricing-plan-action">
            <button className="btn btn-ghost btn-primary btn-lg" onClick={this.props.onClick}>
              {this.props.buttonText}
            </button>
          </p>
        </div>
        <div className="card-block neal-pricing-plan-features">
          <ul className="list-group list-group-flush">
            {Object.keys(this.props.features).map((name, idx) => {
              const isEnabled = this.props.features[name];
              const _className = classNames("neal-pricing-plan-feature", { isEnabled, "isDisabled": !isEnabled });
              return <li key={idx} className={_className}>{name}</li>;
            })}
          </ul>
        </div>
      </div>
    );
  }

}
