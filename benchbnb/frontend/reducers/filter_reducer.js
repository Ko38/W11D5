import { UPDATE_BOUNDS, UPDATE_FILTER } from '../actions/filter_actions'

const filterReducer = (state = { }, action) =>{
  Object.freeze(state);
  let newState = Object.assign({}, state);
  switch (action.type) {
    case UPDATE_BOUNDS:
      console.log("UPDATE");
      newState["bounds"] = action.bounds;

      return newState;


    case UPDATE_FILTER:
      let filter = action.filter;
      let value = action.value;
      newState[filter] = value;

      // newState["bounds"] = action.filter;
      // newState["minSeat"] = action.minSeat;
      // newState["maxSeat"] = action.maxSeat;
      return newState;
    default:
      return newState;
  }
};

export default filterReducer;