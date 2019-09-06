import React from "react";
import BenchMap from "./bench_map";
import BenchIndex from "./bench_index";


const Search = (props) => {
  return (
    <div>
        <BenchMap {...props} />
        <BenchIndex {...props} />
    </div>
  );
}

export default Search;