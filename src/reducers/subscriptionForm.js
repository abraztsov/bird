import { SET_SUBSCRIPTION_FORM } from '../actions/actionTypes.js';
import { handleActions } from 'redux-actions';

let initialState = {};

export default handleActions(
  {
    [SET_SUBSCRIPTION_FORM]: (state, { payload }) => payload
  },
  initialState
);
