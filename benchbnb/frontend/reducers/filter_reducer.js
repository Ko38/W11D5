import { UPDATE_BOUNDS } from '../actions/filter_actions'

const filterReducer = (state = { }, action) =>{
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_BOUNDS:
      console.log("UPDATE");
      newState["bounds"] = action.bounds;

      return newState;
    default:
      return newState;
  }
};

export default filterReducer;