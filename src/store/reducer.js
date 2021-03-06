const initialState = {
  counter: 0
}

const reducer = (state = initialState, action) => {
  if (action.type === 'INCREMENT') {
    return {
      ...state,
      counter: state.counter + action.value
    }
  } else if (action.type === 'RESET') {
    return {
      ...state,
      counter: 0,
      tomato: 0
    }
  }
  return state;
}

export default reducer;