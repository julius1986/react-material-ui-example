import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import "./MakeStylesExample.css";
export default function MakeStylesExample() {
  const classes1 = useStyles1();
  const classes2 = useStyles2();
  return (
    <div>
      <div className="item">
        <Button classes={classes1} variant="contained" color="primary">
          NewButton1
        </Button>
      </div>
      <div className="item">
        <Button classes={classes2} variant="contained" color="primary">
          NewButton2
        </Button>
      </div>
    </div>
  );
}

const useStyles1 = makeStyles({
  root: {
    color: "gold",
    border: "1px solid black",
  },
});

const useStyles2 = makeStyles({
  root: {
    color: "coral",
    border: "1px solid black",
  },
});

const useStyles3 = makeStyles({
  root: {
    color: "coral",
    border: "1px solid black",
  },
});