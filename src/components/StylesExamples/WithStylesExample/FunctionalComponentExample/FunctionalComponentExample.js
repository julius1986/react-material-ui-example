import { Button, withStyles } from '@material-ui/core';
import React from 'react'

function FunctionalComponentExample({classes, ...props}) {
    return (
        <Button classes={classes} {...props} variant="contained" color="primary">
            Click me
        </Button>
    )
}

const someStyles = withStyles({
    root: {
      color: "#7FFFD4",
    },
  });

export default someStyles(FunctionalComponentExample);
