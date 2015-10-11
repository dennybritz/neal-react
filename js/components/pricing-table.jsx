import React from "react";
import classNames from "classnames";
import { HorizontalSplit } from "./index";

export class PricingTable extends React.Component {
  render() {
    return (
      <div className="blitz-pricing-table">
        <HorizontalSplit>{this.props.children}</HorizontalSplit>
      </div>
    );
  }
}


export class PricingPlan extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    description: React.PropTypes.string,
    price: React.PropTypes.string.isRequired,
    period: React.PropTypes.string,
    features: React.PropTypes.objectOf(React.PropTypes.bool),
    buttonText: React.PropTypes.string,
    onClick: React.PropTypes.func
  }

  static defaultProps = {
    period: "/month",
    buttonText: "Sign up"
  }

  render() {
    return (
      <div className="blitz-pricing-plan">
        <div className="blitz-pricing-plan-name">{this.props.name}</div>
        <div className="blitz-pricing-plan-price">
          <div className="blitz-pricing-plan-price-amount">{this.props.price}</div>
          <div className="blitz-pricing-plan-price-period">{this.props.period}</div>
        </div>
        <div className="blitz-pricing-plan-description">{this.props.description}</div>
        <div className="blitz-pricing-plan-action">
          <button className="btn btn-ghost btn-primary btn-lg"
            onClick={this.props.onClick}>{this.props.buttonText}</button>
        </div>
        <div className="blitz-pricing-plan-features">
          {Object.keys(this.props.features).map((name, idx) => {
            let isEnabled = this.props.features[name];
            let _className = classNames("blitz-pricing-plan-feature", { "enabled": isEnabled, "disabled": !isEnabled });
            return <div key={idx} className={_className}>{name}</div>;
          })}
        </div>
      </div>
    );
  }

}
