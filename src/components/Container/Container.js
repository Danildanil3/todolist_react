import React from "react";
import "./Container.css";
import Content from "../Content/Content";
import Form from "../Form/Form";

function Container(props) {
  return <div className="container">{props.children}</div>;
}

export default Container;
