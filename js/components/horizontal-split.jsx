import { Row, Col } from "../helpers/bootstrap.jsx";
import React from "react";

export class HorizontalSplit extends React.Component {

  static COLUMN_CLASSES = {
    1: ["xs-12"],
    2: ["xs-12" ,"lg-6"],
    3: ["xs-12", "lg-4"],
    4: ["xs-12", "sm-6", "lg-3"],
    6: ["xs-12", "sm-6", "lg-4"],
    12:["xs-12", "sm-6", "lg-3"]
  }

  static propTypes = {
    padding: React.PropTypes.oneOf(["sm", "md", "lg"])
  }

  static defaultProps = {
    padding: "sm"
  }

  render() {
    let numSections = this.props.children.length;
    if(12 % numSections !== 0) {
      return null;
    }

    return (
      <div className={`neal-horizontal-split neal-horizontal-split-${this.props.padding}`}>
        <Row>
          {this.props.children.map((child, idx) => {
            return(
              <Col size={HorizontalSplit.COLUMN_CLASSES[numSections]} key={idx}>
                <div className="neal-horizontal-split-col">
                  {child}
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
