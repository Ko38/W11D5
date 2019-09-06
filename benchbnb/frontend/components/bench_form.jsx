import React from "react";


class BenchForm extends React.Component {
  constructor(props) {
    super(props);
  }

  textInputed(type) {

    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  submitButtonClicked(e) {
    e.preventDefault();

    this.props.createBench(Object.assign({}, this.state)).then( () => {
      this.props.history.push("/");
    });
  }

  componentDidMount() {
    this.setState({
      lat: this.latNode.value,
      lng: this.lngNode.value
    })
  }

  render() {
    return (
      <form>
        <label> Description:
          <input type="text" onChange={this.textInputed.bind(this)("description")} />
        </label> 
        <br/>
        <label> Number of seats:
          <input type="text" onChange={this.textInputed.bind(this)("seating")}/>
        </label> 
        <br />
        <label> Latitude: 
          <input type="text" value={this.props.lat} ref={(lat) => this.latNode = lat} onChange={this.textInputed.bind(this)("lat")} disable="true"></input>
        </label> 
        <br />
        <label> Longitude:
          <input type="text" value={this.props.lng} ref={(lng) => this.lngNode = lng} onChange={this.textInputed.bind(this)("lng")}  disable="true"></input>
        </label>
        <br/>
        <button onClick={this.submitButtonClicked.bind(this)}>Submit</button>
      </form>
    );
  }

}

export default BenchForm;