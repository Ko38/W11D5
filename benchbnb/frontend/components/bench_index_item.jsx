import React from "react";

class BenchIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let benches = Object.values(this.props.benches);
    return (

      <ul>
        {benches.map(bench => {
          return (
            <li key={bench.description}>
              {bench.description}
              <ul>
                <li>{bench.lat}</li>
                <li>{bench.lng}</li>
              </ul>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BenchIndexItem;