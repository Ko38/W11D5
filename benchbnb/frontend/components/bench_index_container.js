import { fetchBenches } from "../actions/bench_actions";
import { connect } from 'react-redux';
import BenchIndex from "./bench_index";

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBenches: () => dispatch(fetchBenches())
  };
};

const mapStateToProps = (state) => {
  return {
    benches: state.entities.benches
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BenchIndex);