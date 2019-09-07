import React from "react";


class FilterForm extends React.Component {

  constructor(props) {
    super(props);
  }

  onChangeText(type) {
    return (e) => {
      let value = e.target.value;
      this.props.updateFilterAction(type, value);
    };
  }

  render() {

    return (
      <form>
        <label>Min Seat:
          <input type="text" onChange={this.onChangeText.bind(this)("minSeat")}/>
        </label>
        <label>Max Seat:
          <input type="text" onChange={this.onChangeText.bind(this)("maxSeat")}/>
        </label>
      </form>
    );
  }
}

export default FilterForm;