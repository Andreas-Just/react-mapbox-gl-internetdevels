import React, { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useStyles } from './ListRoutesStyle';
import { historyLocation } from '../../store/location';
import { HOME, ABOUT, SETTINGS } from '../../constants/linkName';

const ListRoutes = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    dispatch(historyLocation(history.location.pathname));
  }, [history, dispatch]);

  return (
    <List>
      <ListItem
        to="/"
        button
        component={Link}
        onClick={() => dispatch(historyLocation('/'))}
      >
        <ListItemIcon className={classes.listItemIcon}>
          <ListIcon />
        </ListItemIcon>
        <ListItemText
          primary={HOME}
          className={classes.listItemText}
        />
      </ListItem>
      <ListItem
        to="/about"
        button
        component={Link}
        onClick={() => dispatch(historyLocation('/about'))}
      >
        <ListItemIcon className={classes.listItemIcon}>
          <AddIcon />
        </ListItemIcon>
        <ListItemText
          primary={ABOUT}
          className={classes.listItemText}
        />
      </ListItem>
      <ListItem
        to="/settings"
        button
        component={Link}
        onClick={() => dispatch(historyLocation('/settings'))}
      >
        <ListItemIcon className={classes.listItemIcon}>
          <ListAltIcon />
        </ListItemIcon>
        <ListItemText
          primary={SETTINGS}
          className={classes.listItemText}
        />
      </ListItem>
    </List>
  );
};

export default ListRoutes;
