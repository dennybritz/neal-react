import React from 'react';
import classNames from 'classnames'

export var Container = (props) => { 
  var _className = classNames('container', props.className);
  return <div {... props} className={_className}> {props.children} </div>
}
export var Row = (props) => { 
  var _className = classNames('row', props.className);
  return <div {... props} className={_className}>{props.children}</div>
}
export var Col = (props) => { 
  var sizeClasses = (props.size || []).map(function(x) { return `col-${x}` }).join(" ")
   var _className = classNames(sizeClasses, props.className);
  return <div {... props} className={_className}>{props.children}</div>
}