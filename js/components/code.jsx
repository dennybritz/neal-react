import React from 'react';
var Prism = require("exports?Prism!./../vendor/prism.js")

export class Code extends React.Component {

  static propProps = {
    lang: React.PropTypes.string.isRequired
  }

  render() {
    let langClass = `language-${this.props.lang}`;
    let highlightedCode = Prism.highlight(this.props.children, Prism.languages[this.props.lang]);
    return (
      <pre className={langClass}>
        <code className={langClass} dangerouslySetInnerHTML={{ __html: highlightedCode }}/>
      </pre>
    );
  }
}
