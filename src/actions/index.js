import * as actionTypes from './types';

export const increment = (value) => {
  return {
    type: actionTypes.INCREMENT,
    value
  }
}

export const reset = () => {
  return {
    type: actionTypes.RESET,
  }
}