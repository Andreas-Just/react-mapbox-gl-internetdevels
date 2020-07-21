import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import clsx from 'clsx';
import { AppBar, IconButton, Toolbar } from '@material-ui/core';
import { Menu } from '@material-ui/icons';
import { useStyles } from './AppBarStyle';
import { getHeading } from '../../store/selectors';
import { setHeading } from '../../store/heading';

const AppBarView = ({
  isOpen,
  handleDrawer,
}) => {
  const heading = useSelector(getHeading);
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    dispatch(setHeading(history.location.pathname));
  }, [history, dispatch, location]);

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
          <Menu />
        </IconButton>
        <h2 className={classes.appText}>
          {heading}
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
