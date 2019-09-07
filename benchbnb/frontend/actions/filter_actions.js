import { fetchBenches as getBenches} from "../util/bench_api_util";
import {fetchBenches} from "./bench_actions";

export const UPDATE_BOUNDS = "UPDATE_BOUNDS";
export const UPDATE_FILTER = "UPDATE_FILTER";

export const updateFilter = (filter, value) => ({
  type: UPDATE_FILTER,
  filter,
  value
});

export const updatingBounds = (bounds) => {
  return {
    type: UPDATE_BOUNDS,
    bounds
  };
};

// export const updateBounds = (bounds) => {
//   return (dispatch) => {
//     return dispatch(updatingBounds(bounds));
//     // return getBenches(bounds.northEast, bounds.southEast).then((benches) => {
//     //   return dispatch(updateBenches(benches));
//     // });
//   };
// };

export const updateBounds = (bounds) => {
  return (dispatch, getState) => {
    dispatch(updatingBounds(bounds));
    return fetchBenches(getState().ui.filter.bounds)(dispatch);
  };
};

export const updateFilterAction = (type, value) => {
  return (dispatch, getState) => {
    dispatch(updateFilter(type, value));
    let state = getState();
    return fetchBenches(state.ui.filter.bounds, state.ui.filter.minSeat, state.ui.filter.maxSeat)(dispatch);
  }
};