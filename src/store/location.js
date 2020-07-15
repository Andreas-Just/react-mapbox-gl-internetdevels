import { HISTORY_LOCATION } from '../constants/actionTypes';
import { HOME, ABOUT, SETTINGS, ERROR } from '../constants/linkName';

export const historyLocation = event => ({
  type: HISTORY_LOCATION,
  local: event,
});

const reduce = (location = HOME, { type, local }) => {
  switch (type) {
    case HISTORY_LOCATION:
      if (local === '/') {
        return HOME;
      }

      if (local === '/create') {
        return ABOUT;
      }

      if (local === '/previous') {
        return SETTINGS;
      }

      return ERROR;
    default:
      return location;
  }
};

export default reduce;
