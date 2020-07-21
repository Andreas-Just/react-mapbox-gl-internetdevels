import React from 'react';
import clsx from 'clsx';
import { useRoutes } from '../../routes';
import { useStyles } from './MainStyle';
import AppBarView from '../../components/AppBar/AppBarView';
import DrawerView from '../../components/Drawer/DrawerView';

const Main = () => {
  const routes = useRoutes();
  const classes = useStyles();
  const [isOpen, setOpen] = React.useState(false);

  const handleDrawer = open => (!open ? setOpen(true) : setOpen(false));

  return (
    <div className={classes.root}>
      <AppBarView
        isOpen={isOpen}
        handleDrawer={handleDrawer}
      />
      <DrawerView isOpen={isOpen} handleDrawer={handleDrawer} />
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: isOpen,
        })}
      >
        <div className={classes.drawerHeader} />
        {routes}
      </main>
    </div>
  );
};

export default Main;
