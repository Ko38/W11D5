import { fetchBenches as getBenches, createBench as postBench} from "../util/bench_api_util";

export const RECEIVE_BENCHES = "RECEIVE_BENCHES";
export const RECEIVE_BENCH = "RECEIVE_BENCH";

export const receiveBenches = (benches) => {
  return {
    type: RECEIVE_BENCHES,
    benches
  };
};

export const receiveBench = (bench) => {
  return {
    type: RECEIVE_BENCH,
    bench
  };
};

export const fetchBenches = (bounds, minSeat, maxSeat) => {
  return (dispatch) => {
    return getBenches(bounds.northEast, bounds.southWest, minSeat, maxSeat).then(benches => {
      return dispatch(receiveBenches(benches));
    });
  };
};

export const createBench = (bench) => {
  return (dispatch) => {
    return postBench(bench).then(bench => {
      return dispatch(receiveBench(bench));
    });
  };
};

window.fetchBenches = fetchBenches;
window.createBench = createBench;
//window.store.dispatch(fetchBenches()).then( benches => console.log(benches))

// export receiveBenches = dispatch => (fetchBenches().then(benches =>  dispatch)

