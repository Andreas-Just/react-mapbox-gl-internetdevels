import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { Drawer, Divider, IconButton } from '@material-ui/core';
import { ChevronLeft, ChevronRight } from '@material-ui/icons';
import { useStyles } from './DrawerStyle';
import ListRoutes from '../ListRoutes';

const DrawerView = ({ isOpen, handleDrawer }) => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={isOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={() => handleDrawer(isOpen)}>
          {theme.direction === 'ltr' ? (
            <ChevronLeft />
          ) : (
            <ChevronRight />
          )}
        </IconButton>
      </div>
      <Divider />
      <ListRoutes />
    </Drawer>
  );
};

DrawerView.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleDrawer: PropTypes.func.isRequired,
};

export default DrawerView;
