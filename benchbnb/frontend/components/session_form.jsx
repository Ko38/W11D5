import React from 'react';

export default class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(type){
    return (e) => {
      this.setState({[type] : e.target.value})
    }
  }

  handleSubmit(e){
    e.preventDefault();

    this.props.processForm(Object.assign({}, this.state))
      .then( () => this.props.history.push("/"))
  }

  render(){
    return (
      <form>
        <label>
          Username: 
          <input type="text" onChange={this.handleInput("username")} />
        </label>
        <label>
          Password:
          <input type="password" onChange={this.handleInput("password")} />
        </label>
        <button onClick={ this.handleSubmit}>{this.props.buttonText}</button>
        {
          this.props.sessionErrors.map( errorText => <p>{errorText}</p> )
        }
      </form>
    )
  }
}