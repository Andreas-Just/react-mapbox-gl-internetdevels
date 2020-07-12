import { INCREMENT_INDEX } from '../constants';

export const increment = (index) => ({
  type: INCREMENT_INDEX,
  index
});
