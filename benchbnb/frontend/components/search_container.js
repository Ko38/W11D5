import React from "react";
import { connect } from "react-redux";
import Search from "./search";
import { fetchBenches } from "../actions/bench_actions";
import { updateBounds } from "../actions/filter_actions";

const mapStateToProps = (state) => {

  return {
    benches: state.entities.benches,
    bounds: state.ui.filter.bounds
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchBenches: (bounds) => { dispatch(fetchBenches(bounds)) },
    updateBounds: (bounds) => { dispatch(updateBounds(bounds)) }
    // fetchBenches: (bounds) => { dispatch(updateBounds(bounds))}    
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Search);