import React from "react";
import classNames from "classnames";

export const Container = (props) => {
  let _className = classNames("container", props.className);
  return <div {... props} className={_className}> {props.children} </div>;
};
export const Row = (props) => {
  let _className = classNames("row", props.className);
  return <div {... props} className={_className}>{props.children}</div>;
};
export const Col = (props) => {
  let sizeClasses = (props.size || []).map((x) => { return `col-${x}`; }).join(" ");
  let _className = classNames(sizeClasses, props.className);
  return <div {... props} className={_className}>{props.children}</div>;
};
