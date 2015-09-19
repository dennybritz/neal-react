import React from 'react';

export var Container = (props) => { return <div className="container">{props.children}</div> }
export var Row = (props) => { return <div className="row">{props.children}</div> }
export var Col = (props) => { 
  var sizeClasses = (props.size || []).map(function(x) { return `col-${x}` }).join(" ")
  return <div className={sizeClasses}>{props.children}</div>
}

// export class FormInput extends React.Component {

//   static propTypes = {
//     name: React.PropTypes.string.required,
//     type: React.PropTypes.string,
//     required: React.PropTypes.bool,
//     placeholder: React.PropTypes.string
//   }

//   static defaultProps = {
//     type: 'text',
//     required: false
//   }

//   render() {
//     return(
//       <fieldset className="form-group">
//         <input type={this.props.type} className="form-control" id={this.props.name} placeholder={this.props.placeholder}/>
//       </fieldset>
//     )
//   }

// }