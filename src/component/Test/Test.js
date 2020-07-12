import React from 'react';
import { connect } from 'react-redux';
import { increment } from '../../actions/actionCreator';
import './Test.css'

const Test = ({ increment, test }) => (
  <div className='test'>
    <div className="test__btn">
      <button
        onClick={() => increment(10)}
        data-hover="Increment"
      >
        Increment
      </button>
    </div>
    <h2>{test}</h2>
  </div>
);

export default connect(({ test }) => ({
  test,
}), { increment })(Test);

/*
export default connect(state => ({
  index: state.test,
}), { increment })(Test);
*/

/*
const mapStateToProps = (state) => ({
  index: state.test.index
});
const mapDispatchToProps = (dispatch) => ({
  increment: (number) => dispatch(increment(number))
});
export default connect(mapStateToProps, mapDispatchToProps)(Test);
*/
