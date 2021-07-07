import React from "react";
import { Button, withStyles } from "@material-ui/core";
import "./WithStylesExample.css";

export default function WithStylesExample() {
  return (
    <div>
      <div className="item">
        <NewButton>NewButton</NewButton>
      </div>
      <div className="item">
        <NewButton2 variant="contained" color="primary">
          NewButton
        </NewButton2>
      </div>
    </div>
  );
}

const NewButton = withStyles({
  root: {
    border: "1px solid green",
  },
  text: { color: "coral" },
})(Button);

const NewButton2 = withStyles({
  root: {
    color: "white",
    border: "1px solid black",
  },
})(Button);
