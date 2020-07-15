import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import { useStyles } from './AppBarStyle';
import { getLocation } from '../../store/selectors';

const AppBarView = ({
  isOpen,
  handleDrawer,
}) => {
  const location = useSelector(getLocation);
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={clsx(classes.appBar, {
        [classes.appBarShift]: isOpen,
      })}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={() => handleDrawer(isOpen)}
          className={clsx(classes.menuButton, isOpen && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
        <h2 className={classes.appText}>
          {location}
        </h2>
      </Toolbar>
    </AppBar>
  );
};

AppBarView.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  handleDrawer: PropTypes.func.isRequired,
};

export default AppBarView;
