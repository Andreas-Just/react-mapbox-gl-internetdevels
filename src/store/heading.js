import { HISTORY_LOCATION } from '../constants/actionTypes';
import { listConfig, setHeadingAndIcon } from '../components/ListRoutes';

export const setHeading = event => ({
  type: HISTORY_LOCATION,
  pathname: event,
});

const reduce = (heading = listConfig[0].name, { type, pathname }) => {
  switch (type) {
    case HISTORY_LOCATION:
      return setHeadingAndIcon(pathname)[0];
    default:
      return heading;
  }
};

export default reduce;
