import { RECEIVE_CURRENT_USER } from '../actions/session_actions'


export default function usersReducer(state = { }, action) {

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, state, { [action.payload.id]: action.payload })
      break;

    default:
      return state
      break;
  }
}