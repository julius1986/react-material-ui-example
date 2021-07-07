import { Button, withStyles } from "@material-ui/core";
import React, { Component } from "react";

class ClassComponentTest extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <div className="item">
          <Button classes={classes} variant="contained" color="primary">
            NewButton
          </Button>
        </div>
      </div>
    );
  }
}

const someStyles = withStyles({
  root: {
    color: "#61dafb",
  },
});

export default someStyles(ClassComponentTest);
