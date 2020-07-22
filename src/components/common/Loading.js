import React from 'react';
import { CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

export const Loading = () => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.spinner}>
      <CircularProgress disableShrink />
    </Box>
  );
};

const useStyles = makeStyles({
  spinner: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
});
