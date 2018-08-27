import * as ActionTypes from '../constants/actionTypes';

// DEFAULT STATE
const defaultState = {
  count: 0
};

const counterReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ActionTypes.COUNTER_INCREASE_COUNT:
      var newCount = state.count + action.number;
      return { ...state, count: newCount };
    // return Object.assign({}, state, {
    //   count: state.count + action.number
    // });
    case ActionTypes.COUNTER_DECREASE_COUNT:
      return Object.assign({}, state, {
        count: state.count - action.number
      });
    default:
      return state;
  }
}

export default counterReducer;

// Notes: 
// Object.assign method
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign

// Spread syntax:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax