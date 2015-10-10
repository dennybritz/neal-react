import React from 'react';

export class GoogleAnalytics extends React.Component {

  static propTypes = {
    account: React.PropTypes.string.isRequired
  }

  componentDidMount() {
    var _gaq = _gaq || [];
    _gaq.push(['_setAccount', this.props.account]);
    _gaq.push(['_trackPageview']);

    (function() {
      var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
      ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
      var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
    })();
  }

  render() {
    return null;
  }
}
