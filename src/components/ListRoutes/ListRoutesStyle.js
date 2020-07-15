import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  listItemText: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  listItemIcon: {
    minWidth: 30,
  },
}));
