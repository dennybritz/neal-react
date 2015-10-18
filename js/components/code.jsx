import React from "react";
import Prism from "exports?Prism!./../vendor/prism.js";

export class Code extends React.Component {

  static propProps = {
    lang: React.PropTypes.string.isRequired,
    block: React.PropTypes.bool
  }

  render() {
    let langClass = `language-${this.props.lang}`;
    let highlightedCode = Prism.highlight(this.props.children, Prism.languages[this.props.lang]);
    let codeElement = <code className={langClass} dangerouslySetInnerHTML={{ __html: highlightedCode }}/>;
    if (this.props.block) {
      return (
        <pre className={langClass}>{codeElement}</pre>
      );
    } else {
      return codeElement;
    }
  }
}
