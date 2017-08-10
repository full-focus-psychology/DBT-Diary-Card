function emotions (state = [], action) {
  switch (action.type) {
    case 'RECEIVE_EMOTIONS':
      return [...action.emotions]
    default:
      return state
  }
}

export default emotions
