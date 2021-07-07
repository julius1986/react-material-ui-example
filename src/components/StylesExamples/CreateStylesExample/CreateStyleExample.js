import { Button, createStyles } from "@material-ui/core";
import React from "react";
import "./CreateStyleExample.css";

export default function CreateStyleExample() {
  return (
    <div>
      <div className="item">
        <Button style={stylesButton.root} variant="contained" color="primary">
          NewButton
        </Button>
      </div>
    </div>
  );
}

const stylesButton = createStyles({
  root: {
    color: "coral",
    border: "1px solid black",
  },
});
