import { INCREMENT_INDEX } from '../constants';

let initialIndex = 0;

const test = (state = initialIndex, { type, index }) => {
  console.log(state);
  switch (type) {
    case INCREMENT_INDEX:
      return initialIndex += index;
    default:
      return state;
  }
};

export default test;
