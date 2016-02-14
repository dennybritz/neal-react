import React from "react";

export class Stripe extends React.Component {

  static propTypes ={
    stripeKey: React.PropTypes.string.isRequired,
    // Optional options we pass to Stripe Checkout configuration
    stripeOptions: React.PropTypes.object,
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
