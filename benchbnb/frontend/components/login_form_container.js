import { connect } from 'react-redux';
import { login } from '../actions/session_actions';
import SessionForm from './session_form';

function mapDispatchToProps(dispatch) {
  return {
    processForm: (user) => dispatch(login(user))
  }
}

function mapStateToProps(state) {
  return {
    buttonText: "Login",
    sessionErrors: state.errors.session
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm)