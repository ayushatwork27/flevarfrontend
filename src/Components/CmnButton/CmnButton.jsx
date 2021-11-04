import React from "react";
import Button from "@material-ui/core/Button";
function CmnButton(props) {
  return (
    <Button
      variant={props.variant}
      className={`cmnBtn ${props.className}`}
      startIcon={props.startIcon}
      onClick={props.onClick}
      endIcon={props.endIcon}
      disabled={props.disabled}
    >
      {props.btntitle}
    </Button>
  );
}

export default CmnButton;
