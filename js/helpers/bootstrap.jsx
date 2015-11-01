import React from "react";
import classNames from "classnames";

export const Container = (props) => {
  const _className = classNames({
    "container": !props.fluid,
    "container-fluid": props.fluid,
  }, props.className);
  return <div {... props} className={_className}> {props.children} </div>;
};
export const Row = (props) => {
  const _className = classNames("row", props.className);
  return <div {... props} className={_className}>{props.children}</div>;
};
export const Col = (props) => {
  const sizeClasses = (props.size || []).map((x) => { return `col-${x}`; }).join(" ");
  const _className = classNames(sizeClasses, props.className);
  return <div {... props} className={_className}>{props.children}</div>;
};
