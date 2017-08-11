import {combineReducers} from 'redux'

import skills from './skills'
import emotions from './emotions'

export default combineReducers({
  emotions,
  skills
})
