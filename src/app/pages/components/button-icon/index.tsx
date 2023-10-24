import { Button } from "antd";
import React from "react";
import "./index.scss";

export default function ButtonIcon(props: any) {
  return (
    <>
      <Button
        shape={props.shape ?? "circle"}
        type="text"
        className="c-button-icon"
      >
        <i className={props.iconClass}></i>
      </Button>
    </>
  );
}
