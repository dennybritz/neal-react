import {Row, Col} from '../helpers/bootstrap.jsx';
import React from 'react';

export default class HorizontalSplit extends React.Component {
  
  static COLUMN_CLASSES = {
    1: ["xs-12"],
    2: ["xs-12" ,"sm-6"],
    3: ["xs-12", "lg-4"],
    4: ["xs-12", "sm-6", "lg-3"],
    6: ["xs-12", "sm-6", "lg-4"],
    12:["xs-12", "sm-6", "lg-3"]
  }

  render() {
    var numSections = this.props.children.length;
    if(12 % numSections != 0){
      console.error(`Cannot split 12 columns into ${numSections}.`);
      return null;
    }

    return (
      <div className="blitz-horizontal-split">
        <Row>
          {this.props.children.map(function(child, idx){
            return(
              <Col size={HorizontalSplit.COLUMN_CLASSES[numSections]} key={idx}>
                {child}
              </Col>
            )
          })}
        </Row>
      </div>
    );
  }
}