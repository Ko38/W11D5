import {connect} from "react-redux";
import BenchForm from "./bench_form";
import {createBench} from "../actions/bench_actions";

const mapStateToProps = (state, ownProps) => {
  let searchParams = new URLSearchParams(ownProps.location.search);
  return {
    lat: searchParams.get("lat"),
    lng: searchParams.get("lng")
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBench: (bench) => { return dispatch(createBench(bench));}
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BenchForm);