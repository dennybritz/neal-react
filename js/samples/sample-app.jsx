import React from 'react';
import {App} from '../components/index';
import SamplePage from './sample-page.jsx';

export default class SampleApp extends React.Component {

  render() {
    return (
      <App
        googleAnalyticsKey="ABC"
        segmentKey="ABC"
        stripeKey="pk_test_6pRNASCoBOKtIshFeQd4XMUh"
      >{this.props.children}</App>
    );
  }
}