import request from 'superagent'

export const receiveEmotions = (emotions) => {
  return {
    type: 'RECEIVE_EMOTIONS',
    emotions
  }
}

export function getEmotionList () {
  return (dispatch) => {
    request
      .get(`/api/v1/emotions`)
      .end((err, res) => {
        if (err) {
          console.error(err.message)
          return
        }
        dispatch(receiveEmotions(res.body))
      })
  }
}
