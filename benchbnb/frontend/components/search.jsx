import React from "react";
import BenchMap from "./bench_map";
import BenchIndex from "./bench_index";
import FilterForm from "./filter_form";

const Search = (props) => {
  return (
    <div>
        <BenchMap {...props} />
        <BenchIndex {...props} />
        <FilterForm {...props} />
    </div>
  );
}

export default Search;