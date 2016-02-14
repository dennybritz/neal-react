import React from "react";
import Prism from "../vendor/prism.js";

export class Code extends React.Component {

  static propProps = {
    lang: React.PropTypes.string.isRequired,
    block: React.PropTypes.bool,
  };

  render() {
    const langClass = `language-${this.props.lang}`;
    const highlightedCode = Prism.highlight(this.props.children, Prism.languages[this.props.lang]);
    const codeElement = <code className={langClass} dangerouslySetInnerHTML={{ __html: highlightedCode }}/>;
    if (this.props.block) {
      return (
        <pre className={langClass}>{codeElement}</pre>
      );
    }
    return codeElement;
  }
}
