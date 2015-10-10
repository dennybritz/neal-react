import React from 'react';
import {HorizontalSplit} from './horizontal-split.jsx'

export class CustomerQuote extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    title: React.PropTypes.string.isRequired,
    imageUrl: React.PropTypes.string.isRequired
  }

  render() {
    return(
      <div className="blitz-customer-quote">
        <div className="blitz-customer-quote-quote">{this.props.children}</div>
        <div className="blitz-customer-quote-profile">
          <img className="blitz-customer-quote-img img-responsive img-thumbnail" src={this.props.imageUrl}/>
          <span className="blitz-customer-quote-name">{this.props.name}</span>,&nbsp;
          <span className="blitz-customer-quote-title">{this.props.title}</span>         
        </div>
      </div>
    );
  }

}

export class CustomerQuotes extends React.Component {
  
  static propTypes = {
    // TODO: Enforce CustomerQuote type
    children: React.PropTypes.arrayOf(React.PropTypes.element)
  }

  render() {
    return (
      <div className="blitz-customer-quotes">
        <HorizontalSplit>
          {this.props.children}
        </HorizontalSplit>
      </div>
    );
  }
}

CustomerQuotes.Quote = CustomerQuote