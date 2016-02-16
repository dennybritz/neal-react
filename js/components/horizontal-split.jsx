import { Row, Col, Container } from "../helpers/bootstrap";
import React from "react";

export class HorizontalSplit extends React.Component {

  static COLUMN_CLASSES = {
    1: ["xs-12"],
    2: ["xs-12", "lg-6"],
    3: ["xs-12", "lg-4"],
    4: ["xs-12", "sm-6", "lg-3"],
    6: ["xs-12", "sm-6", "lg-4"],
    12: ["xs-12", "sm-6", "lg-3"],
  };

  static propTypes = {
    padding: React.PropTypes.oneOf(["sm", "md", "lg"]),
  };

  static defaultProps = {
    padding: "sm",
  };

  render() {
    const numSections = this.props.children.length;
    if (12 % numSections !== 0) {
      return null;
    }

    return (
        <Row className={`neal-horizontal-split neal-horizontal-split-${this.props.padding}`}>
          {this.props.children.map((child, idx) => {
            return (
              <Col size={HorizontalSplit.COLUMN_CLASSES[numSections]} className="neal-horizontal-split-col" key={idx}>
                  {child}
              </Col>
            );
          })}
        </Row>
    );
  }
}
