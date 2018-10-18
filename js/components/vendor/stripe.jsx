import React from "react";
import PropTypes from 'prop-types';

export class Stripe extends React.Component {

  static propTypes ={
    stripeKey: PropTypes.string.isRequired,
    // Optional options we pass to Stripe Checkout configuration
    stripeOptions: PropTypes.object,
  };

  componentDidMount() {
    const stripeKey = this.props.stripeKey;
    const stripeOptions = this.props.stripeOptions;
    jQuery.getScript("https://checkout.stripe.com/checkout.js", (data, textStatus, jqxhr) => {
      Stripe.StripeHandler = StripeCheckout.configure(Object.assign({}, { key: stripeKey }, stripeOptions));
    });
  }

  render() {
    return (
      <div key="stripe"/>
    );
  }

}
