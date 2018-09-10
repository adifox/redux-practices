import * as actionTypes from './types';

export const increment = (value) => {
  return {
    type: actionTypes.INCREMENT,
    value
  }
}

export const resetCounter = () => {
  return {
    type: actionTypes.RESET,
  }
}