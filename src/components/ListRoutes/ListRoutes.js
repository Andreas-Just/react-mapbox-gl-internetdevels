import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as icons from '@material-ui/icons';
import { useStyles } from './ListRoutesStyle';

export const listConfig = [
  {
    id: 1,
    name: 'Map',
    to: '/',
  },
  {
    id: 2,
    name: 'About',
    to: '/about',
  },
  {
    id: 3,
    name: 'Settings',
    to: '/settings',
  },
];

export const setHeadingAndIcon = (to) => {
  switch (to) {
    case '/':
      return ['Map', <icons.Map />];
    case '/about':
      return ['About', <icons.Info />];
    case '/settings':
      return ['Settings', <icons.Settings />];
    default:
      return ['Error', <icons.Error />];
  }
};

const ListRoutes = () => {
  const classes = useStyles();

  return (
    <List>
      {listConfig.map(({ id, name, to }) => (
        <ListItem
          key={id}
          to={to}
          button
          component={Link}
        >
          <ListItemIcon className={classes.listItemIcon}>
            {setHeadingAndIcon(to)[1]}
          </ListItemIcon>
          <ListItemText
            primary={name}
            className={classes.listItemText}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default ListRoutes;
